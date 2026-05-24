import { supabase } from "@/utils/supabase";

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

const mapFromDB = (h: any): Habit => ({
  id: h.id,
  title: h.title,
  icon: h.icon,
  done: h.is_completed_today,

  selectedDays: h.selected_days ?? [],
  selectedDuration: h.selected_duration ?? "10 min/day",

  reminderEnabled: h.reminder_enabled ?? false,
  reminderTime: h.reminder_time ?? null,
});

const mapToDB = (h: Habit) => ({
  id: h.id,
  title: h.title,
  icon: h.icon,

  is_completed_today: h.done,

  selected_days: h.selectedDays,
  selected_duration: h.selectedDuration,

  reminder_enabled: h.reminderEnabled,
  reminder_time: h.reminderTime,
});

export const HabitsAPI = {
  async getAll() {
    const { data, error } = await supabase
      .from("habits")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return (data ?? []).map(mapFromDB);
  },

  async create(habit: Habit, userId: string) {
    const { data, error } = await supabase
      .from("habits")
      .insert({
        user_id: userId,
        title: habit.title,
        icon: habit.icon,
        is_completed_today: habit.done,

        selected_days: habit.selectedDays,
        selected_duration: habit.selectedDuration,

        reminder_enabled: habit.reminderEnabled,
        reminder_time: habit.reminderTime,
      })
      .select()
      .single();

    if (error) throw error;

    return mapFromDB(data);
  },

  async toggle(id: string, done: boolean) {
    const { data, error } = await supabase
      .from("habits")
      .update({ is_completed_today: done })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return mapFromDB(data);
  },

  async remove(id: string) {
    const { error } = await supabase.from("habits").delete().eq("id", id);

    if (error) throw error;
  },
};
