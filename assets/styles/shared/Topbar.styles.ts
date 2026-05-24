import { ThemeType } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createTopBarStyles = (theme: ThemeType) => {
  const { colors, spacing, radius, typography, shadows } = theme;

  return StyleSheet.create({
    container: {
      width: "100%",

      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",

      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.md,

      backgroundColor: colors.bg,
      borderBottomWidth: 0.6,
      borderBottomColor: colors.textLight,
    },

    leftContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },

    avatar: {
      width: 38,
      height: 38,

      borderRadius: radius.full,

      borderWidth: 1.5,
      borderColor: colors.primary,

      backgroundColor: colors.surface,
    },

    textContainer: {
      justifyContent: "center",
    },

    appName: {
      ...typography.headlineMD,
      color: colors.primary,
      letterSpacing: -0.5,
      fontSize: 18,
    },

    notificationButton: {
      width: 42,
      height: 42,

      borderRadius: radius.lg,

      justifyContent: "center",
      alignItems: "center",

      backgroundColor: colors.surface,

      borderWidth: 1,
      borderColor: colors.primary,

      ...shadows.level1,
    },

    badge: {
      position: "absolute",
      top: 8,
      right: 8,

      width: 8,
      height: 8,

      borderRadius: radius.full,
      backgroundColor: colors.danger,
    },
  });
};
