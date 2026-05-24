import { createHabitsStyles } from "@/assets/styles/Habits.styles";
import useTheme from "@/hooks/useTheme";
import { Habit } from "@/services/habitsStorage";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

const AddHabitModal = ({
  visible,
  onClose,
  onAdd,
}: {
  visible: boolean;
  onClose: () => void;
  onAdd: (habit: Habit) => void;
}) => {
  const { theme } = useTheme();
  const styles = createHabitsStyles(theme);

  const [title, setTitle] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("heart-outline");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState("10 min/day");

  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState<Date | null>(null);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const icons = [
    "rose-outline",
    "barbell-outline",
    "book-outline",
    "water-outline",
    "walk-outline",
  ];

  const days = [
    { label: "M", id: "0" },
    { label: "T", id: "1" },
    { label: "W", id: "2" },
    { label: "T", id: "3" },
    { label: "F", id: "4" },
    { label: "S", id: "5" },
    { label: "S", id: "6" },
  ];

  const toggleDay = (id: string) => {
    setSelectedDays((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id],
    );
  };

  const reset = () => {
    setTitle("");
    setSelectedIcon("heart-outline");
    setSelectedDays([]);
    setSelectedDuration("10 min/day");
    setReminderEnabled(false);
    setReminderTime(null);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleAdd = () => {
    if (!title.trim()) return;

    const newHabit: Habit = {
      id: Date.now().toString(),
      title: title.trim(),
      icon: selectedIcon,
      done: false,
      selectedDays,
      selectedDuration,
      reminderEnabled,
      reminderTime: reminderTime ? reminderTime.toISOString() : null,
    };

    onAdd(newHabit);
    handleClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.addHabitContainer}>
        <View style={styles.modalHeader}>
          <View style={styles.dragHandle} />
        </View>

        <View style={styles.addHabitCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* ================= ICON PREVIEW (BIG CENTER ICON) ================= */}
            <View style={styles.iconPreviewSection}>
              <View style={styles.iconPreview}>
                <Ionicons
                  name={selectedIcon as any}
                  size={56}
                  color={theme.colors.primary}
                />
              </View>
              <Text style={styles.previewHint}>Tap an icon below</Text>
            </View>

            {/* ================= TITLE ================= */}
            <View style={styles.sectionWrapper}>
              <Text style={styles.sectionTitle}>Habit Name</Text>
              <TextInput
                value={title}
                onChangeText={setTitle}
                style={styles.addHabitInput}
                placeholder="e.g. Morning Run"
                placeholderTextColor={theme.colors.textMuted}
              />
            </View>

            {/* ================= ICON GRID ================= */}
            <View style={styles.sectionWrapper}>
              <Text style={styles.sectionTitle}>Icon</Text>
              <View style={styles.iconGrid}>
                {icons.map((icon) => (
                  <Pressable
                    key={icon}
                    onPress={() => setSelectedIcon(icon)}
                    style={[
                      styles.iconButton,
                      selectedIcon === icon && styles.iconButtonSelected,
                    ]}
                  >
                    <Ionicons
                      name={icon as any}
                      size={24}
                      color={
                        selectedIcon === icon ? "white" : theme.colors.text
                      }
                    />
                  </Pressable>
                ))}
              </View>
            </View>

            {/* ================= DAYS ================= */}
            <View style={styles.sectionWrapper}>
              <Text style={styles.sectionTitle}>Days</Text>
              <View style={styles.daysGrid}>
                {days.map((day) => (
                  <Pressable
                    key={day.id}
                    onPress={() => toggleDay(day.id)}
                    style={[
                      styles.dayButton,
                      selectedDays.includes(day.id) && styles.dayButtonSelected,
                    ]}
                  >
                    <Text
                      style={{
                        color: selectedDays.includes(day.id)
                          ? "white"
                          : theme.colors.text,
                      }}
                    >
                      {day.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* ================= REMINDER SECTION ================= */}
            <View style={styles.sectionWrapper}>
              <Text style={styles.sectionTitle}>Reminder</Text>

              <View style={styles.reminderCard}>
                <View style={styles.reminderTopRow}>
                  <View>
                    <Text style={styles.reminderTitle}>Enable Reminder</Text>
                    <Text style={styles.reminderSubtitle}>
                      Get notified at a specific time
                    </Text>
                  </View>

                  <Switch
                    value={reminderEnabled}
                    onValueChange={(val) => {
                      setReminderEnabled(val);
                      if (!val) setReminderTime(null);
                    }}
                  />
                </View>

                {reminderEnabled && (
                  <Pressable
                    onPress={() => setShowTimePicker(true)}
                    style={styles.reminderTimeBox}
                  >
                    <Ionicons
                      name="time-outline"
                      size={20}
                      color={theme.colors.primary}
                    />

                    <Text style={styles.reminderTimeText}>
                      {reminderTime
                        ? reminderTime.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "Set time"}
                    </Text>

                    <Ionicons
                      name="chevron-forward"
                      size={18}
                      color={theme.colors.textMuted}
                    />
                  </Pressable>
                )}
              </View>
            </View>
          </ScrollView>

          {/* ================= FOOTER ================= */}
          <View style={styles.modalFooter}>
            <Pressable onPress={handleClose} style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>

            <Pressable
              onPress={handleAdd}
              disabled={!title.trim()}
              style={[
                styles.addButton,
                !title.trim() && styles.addButtonDisabled,
              ]}
            >
              <Text style={styles.addText}>Add Habit</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {showTimePicker && (
        <DateTimePicker
          value={reminderTime || new Date()}
          mode="time"
          display="default"
          onChange={(_, date) => {
            setShowTimePicker(false);
            if (date) setReminderTime(date);
          }}
        />
      )}
    </Modal>
  );
};

export default AddHabitModal;
