export interface Habit {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  icon: string;
  color: string;
  selected_days: string[];
  selected_duration: string | null;
  reminder_enabled: boolean;
  reminder_time: string | null;
  is_completed_today: boolean;
  created_at: string;
}
