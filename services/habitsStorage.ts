import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "habits_v1";

export type Habit = {
  id: string;
  title: string;
  icon: string;
  done: boolean;
  selectedDays: string[];
  selectedDuration: string;
  reminderEnabled: boolean;
  reminderTime: string | null;
};

export const HabitsStorage = {
  async get(): Promise<Habit[]> {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  },

  async save(habits: Habit[]) {
    await AsyncStorage.setItem(KEY, JSON.stringify(habits));
  },
};
