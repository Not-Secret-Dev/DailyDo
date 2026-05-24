import { createStreakCardStyles } from "@/assets/styles/home/streakCard.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  type: "streak" | "progress";
  icon: any;
  name: string;
  progress?: number;
  streakDays?: boolean[];
};

const StreakCard = ({
  type,
  icon,
  name,
  progress = 0,
  streakDays = [],
}: Props) => {
  const { theme } = useTheme();
  const styles = createStreakCardStyles(theme);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.topRow}>
        <Ionicons name={icon} size={18} color={theme.colors.primary} />
        {type === "progress" ? (
          <Text style={styles.progressText}>{progress}%</Text>
        ) : (
          <Text style={styles.progressText}>{streakDays.length}</Text>
        )}
      </View>

      <Text style={styles.name}>{name}</Text>

      {/* PROGRESS TYPE */}
      {type === "progress" && (
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      )}

      {/* STREAK TYPE */}
      {type === "streak" && (
        <View style={styles.streakRow}>
          {Array.from({ length: 7 }).map((_, i) => {
            const active = streakDays?.[i];

            return (
              <View
                key={i}
                style={[
                  styles.dayCircle,
                  active ? styles.dayActive : styles.dayInactive,
                ]}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default StreakCard;
