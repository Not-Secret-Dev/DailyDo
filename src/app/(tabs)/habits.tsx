import { createHabitsStyles } from "@/assets/styles/Habits.styles";
import AddHabitModal from "@/components/habits/addHabitModal";
import EmptyHabits from "@/components/habits/emptyHabits";
import FloatingAddButton from "@/components/habits/floatingAddButton";
import HabitCard from "@/components/habits/habitCard";
import useTheme from "@/hooks/useTheme";
import { Habit, HabitsStorage } from "@/services/habitsStorage";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Habits = () => {
  const { theme } = useTheme();
  const styles = createHabitsStyles(theme);

  const [habits, setHabits] = useState<Habit[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const formatted = format(new Date(), "MMM do");

  const dayName = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const completed = habits.filter((h) => h.done).length;

  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = async () => {
    try {
      const data = await HabitsStorage.get();
      setHabits(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const updateHabits = async (newHabits: Habit[]) => {
    setHabits(newHabits);
    await HabitsStorage.save(newHabits);
  };

  const handleDelete = async (id: string) => {
    const updated = habits.filter((h) => h.id !== id);

    await updateHabits(updated);
  };

  const handleToggle = async (id: string) => {
    const updated = habits.map((habit) =>
      habit.id === id
        ? {
            ...habit,
            done: !habit.done,
          }
        : habit,
    );

    await updateHabits(updated);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habits for Today</Text>

      <View style={styles.completedContainer}>
        <Text style={styles.date}>
          {dayName}, {formatted}
        </Text>

        <Text style={styles.completedText}>
          {completed} of {habits.length} completed
        </Text>
      </View>

      {habits.length === 0 ? (
        <EmptyHabits />
      ) : (
        <View style={{ marginTop: 20 }}>
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </View>
      )}

      <FloatingAddButton onPress={() => setOpen(true)} />

      <AddHabitModal
        visible={open}
        onClose={() => setOpen(false)}
        onAdd={async (habit: Habit) => {
          const updated = [...habits, habit];

          await updateHabits(updated);
        }}
      />
    </View>
  );
};

export default Habits;
