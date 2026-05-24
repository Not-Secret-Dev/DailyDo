import { ThemeType } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createStreakCardStyles = (theme: ThemeType) => {
  const { colors, spacing, radius, typography, shadows } = theme;

  return StyleSheet.create({
    container: {
      width: "48%",

      paddingHorizontal: spacing.md,
      paddingVertical: spacing.md,

      backgroundColor: colors.surface,

      borderRadius: radius.xl,

      borderWidth: 1,
      borderColor: colors.border,

      ...shadows.level1,
    },

    topRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.sm,
    },

    iconBox: {
      width: 28,
      height: 28,

      borderRadius: radius.lg,

      justifyContent: "center",
      alignItems: "center",

      backgroundColor: colors.backgrounds.input,
    },

    progressText: {
      ...typography.labelMD,
      color: colors.primary,
      fontWeight: "700",
    },

    name: {
      ...typography.labelMD,
      color: colors.text,
      fontWeight: "600",
      marginBottom: spacing.sm,
    },

    progressTrack: {
      width: "100%",
      height: 6,

      backgroundColor: colors.border,

      borderRadius: radius.full,
      marginTop: spacing.sm,

      overflow: "hidden",
    },

    progressFill: {
      height: "100%",
      backgroundColor: colors.primary,
      borderRadius: radius.full,
    },

    streakRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: spacing.sm,
    },

    dayCircle: {
      width: 18,
      height: 18,
      borderRadius: radius.full,
      borderWidth: 1,
    },

    dayActive: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },

    dayInactive: {
      backgroundColor: "transparent",
      borderColor: colors.border,
    },
  });
};
