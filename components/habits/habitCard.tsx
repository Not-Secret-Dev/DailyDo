import { createHabitsStyles } from "@/assets/styles/Habits.styles";
import useTheme from "@/hooks/useTheme";
import { Habit } from "@/services/habitsStorage";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  habit: Habit;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const HabitCard = ({ habit, onToggle }: Props) => {
  const { theme } = useTheme();
  const habitStyles = createHabitsStyles(theme);

  const handleIsChecked = () => {
    onToggle(habit.id);
  };

  return (
    <View style={habitStyles.habitCardContainer}>
      <View style={habitStyles.cardTop}>
        {/* Left: Icon */}
        <View style={habitStyles.cardIconContainer}>
          <Ionicons
            name={habit.icon as any}
            size={22}
            color={theme.colors.primary}
          />
        </View>

        {/* Center: Text Content */}
        <View style={habitStyles.cardTextContainer}>
          <Text style={habitStyles.habitTitle} numberOfLines={1}>
            {habit.title}
          </Text>

          {habit.reminderTime ? (
            <View style={habitStyles.reminderRow}>
              <Ionicons
                name="time-outline"
                size={14}
                color={theme.colors.textMuted}
                style={habitStyles.reminderIcon}
              />
              <Text style={habitStyles.reminderText}>
                {new Date(habit.reminderTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
              <Text style={habitStyles.separator}>•</Text>
              <Text style={habitStyles.reminderText}>
                {habit.selectedDuration.replace("/day", "")}
              </Text>
            </View>
          ) : null}
        </View>

        {/* Right: Checkbox Button */}
        <TouchableOpacity
          style={habitStyles.checkboxWrapper}
          activeOpacity={0.7}
          onPress={handleIsChecked}
        >
          <LinearGradient
            colors={
              habit.done
                ? theme.colors.gradients.success
                : theme.colors.gradients.surface
            }
            style={[
              habitStyles.checkboxInner,
              {
                borderColor: habit.done ? "transparent" : theme.colors.border,
              },
            ]}
          >
            {habit.done && <Ionicons name="checkmark" size={16} color="#fff" />}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HabitCard;
