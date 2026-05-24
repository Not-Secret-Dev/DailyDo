import { ThemeType } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createLoadingStyles = (theme: ThemeType) => {
  const { colors, spacing, radius, typography, shadows } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

      backgroundColor: colors.bg,

      paddingHorizontal: spacing.lg,
    },

    centerContainer: {
      justifyContent: "center",
      alignItems: "center",

      gap: spacing.lg,
    },

    iconContainer: {
      width: 148,
      height: 148,

      borderRadius: radius.full,

      justifyContent: "center",
      alignItems: "center",

      backgroundColor: colors.surface,

      borderWidth: 1,
      borderColor: colors.border,

      ...shadows.level1,
    },

    loadingIcon: {
      width: 92,
      height: 92,

      borderRadius: radius.full,

      justifyContent: "center",
      alignItems: "center",

      ...shadows.glow,
    },

    textContainer: {
      alignItems: "center",

      gap: spacing.xs,
    },

    heading: {
      ...typography.headlineMD,

      color: colors.text,

      fontSize: 30,
      letterSpacing: -0.8,
    },

    subHeading: {
      ...typography.bodyMD,

      color: colors.textMuted,

      fontSize: 15,
    },

    loadingWrapper: {
      position: "absolute",

      bottom: 54,

      width: "100%",

      paddingHorizontal: spacing.xl,

      gap: spacing.sm,
    },

    loadingHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    loadingText: {
      ...typography.labelMD,

      color: colors.textMuted,
    },

    loadingPercent: {
      ...typography.labelMD,

      color: colors.primary,

      fontWeight: "700",
    },

    progressBarBackground: {
      width: "100%",

      height: 10,

      borderRadius: radius.full,

      backgroundColor: colors.border,

      overflow: "hidden",
    },

    progressBarFill: {
      height: "100%",

      borderRadius: radius.full,

      backgroundColor: colors.primary,
    },
  });
};
