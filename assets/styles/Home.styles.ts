import { ThemeType } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createHomeStyles = (theme: ThemeType) => {
  const { colors, spacing, radius, shadows, typography } = theme;

  return StyleSheet.create({
    container: {
      backgroundColor: colors.bg,
      flex: 1,

      paddingTop: spacing.xl,
      paddingHorizontal: spacing.md,
    },

    title: {
      ...typography.headlineMD,
      color: colors.text,
    },

    date: {
      ...typography.bodyMD,
      color: colors.textLight,
    },

    streakCards: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.sm,
      marginTop: spacing.lg,
      marginBottom: spacing.xl,
    },

    quoteArea: {
      width: "100%",

      backgroundColor: colors.surface,

      paddingVertical: spacing.xl,
      paddingHorizontal: spacing.lg,

      borderRadius: radius.xl,

      borderWidth: 1,
      borderColor: colors.border,

      ...shadows.level1,
    },

    quoteTitle: {
      ...typography.headlineLG,
      textAlign: "center",
      color: colors.primary,
      marginBottom: spacing.sm,
    },

    quoteText: {
      ...typography.bodyLG,
      textAlign: "center",
      color: colors.text,
      marginBottom: spacing.md,
    },

    quoteAuthor: {
      ...typography.labelSM,
      textAlign: "center",
      color: colors.primary,
      fontWeight: "600",
    },

    moodSection: {
      marginTop: spacing.md,
      marginBottom: spacing.lg,

      padding: spacing.lg,

      borderRadius: radius.xl,

      backgroundColor: colors.surface,

      borderWidth: 1,
      borderColor: colors.border,

      ...shadows.level1,
    },

    moodTitle: {
      ...typography.labelMD,
      color: colors.textMuted,
      marginBottom: spacing.md,
    },

    moodRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    moodEmoji: {
      fontSize: 26,
      padding: spacing.sm,
      borderRadius: radius.lg,
    },
  });
};
