import { createHomeStyles } from "@/assets/styles/Home.styles";
import StreakCard from "@/components/home/streakCard";
import useAuth from "@/hooks/useAuth";
import useTheme from "@/hooks/useTheme";
import { format } from "date-fns";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const Home = () => {
  const { theme } = useTheme();
  const homeStyles = createHomeStyles(theme);
  const { user } = useAuth();
  const formattedDate = format(new Date(), "MMM do, yyyy");
  const [mood, setMood] = useState<number | null>(null);
  const moods = ["😄", "🙂", "😐", "😔", "😩"];

  // ✅ Call useSharedValue at top level (not in a loop)
  const scale0 = useSharedValue(1);
  const scale1 = useSharedValue(1);
  const scale2 = useSharedValue(1);
  const scale3 = useSharedValue(1);
  const scale4 = useSharedValue(1);
  const scales = [scale0, scale1, scale2, scale3, scale4];

  const handlePress = (index: number) => {
    setMood(index);
    scales[index].value = withSpring(1.3, { damping: 8 }, () => {
      scales[index].value = withSpring(1);
    });
  };

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.date}>{formattedDate}</Text>
      <Text style={homeStyles.title}>
        Welcome Back, {user?.user_metadata.username} 👋
      </Text>
      <View style={homeStyles.streakCards}>
        <StreakCard
          icon="flash-outline"
          name="Today's Progress"
          progress={85}
          type="progress"
        />
        <StreakCard
          icon="flash-outline"
          name="Today's Progress"
          type="streak"
          streakDays={[true, false, true, true]}
        />
      </View>
      <View style={homeStyles.quoteArea}>
        <Text style={homeStyles.quoteTitle}>,,</Text>
        <Text style={homeStyles.quoteText}>
          "The secret to your future is hidden in your daily routine"
        </Text>
        <Text style={homeStyles.quoteAuthor}>-MIKE MURDOCK</Text>
      </View>
      <View style={homeStyles.moodSection}>
        <Text style={homeStyles.moodTitle}>How are you feeling today?</Text>
        <View style={homeStyles.moodRow}>
          {moods.map((emoji, index) => {
            const animatedStyle = useAnimatedStyle(() => ({
              transform: [{ scale: scales[index].value }],
            }));
            const isActive = mood === index;
            return (
              <Pressable key={index} onPress={() => handlePress(index)}>
                <Animated.View
                  style={[
                    homeStyles.moodEmoji,
                    animatedStyle,
                    {
                      backgroundColor: isActive
                        ? theme.colors.border
                        : "transparent",
                    },
                  ]}
                >
                  <Text style={{ fontSize: 26 }}>{emoji}</Text>
                </Animated.View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Home;
