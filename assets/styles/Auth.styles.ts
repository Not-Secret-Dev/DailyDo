import { ThemeType } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createAuthStyles = (theme: ThemeType) => {
  const { colors, spacing, radius, typography, shadows } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor: colors.bg,
    },

    keyboardViewContainer: {
      flex: 1,
    },

    scrollView: {
      flex: 1,
    },

    imageContainer: {
      width: "40%",
      height: "40%",
    },

    image: {},

    scrollContent: {
      flexGrow: 1,

      justifyContent: "center",
      alignItems: "center",

      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.xxl,
    },

    contentContainer: {
      width: "100%",
      maxWidth: 420,

      justifyContent: "center",
    },

    title: {
      ...typography.headlineLG,

      color: colors.text,

      textAlign: "center",

      marginBottom: spacing.sm,
    },

    subtitle: {
      ...typography.bodyMD,

      color: colors.textMuted,

      textAlign: "center",

      lineHeight: 24,

      marginBottom: spacing.xxl,

      paddingHorizontal: spacing.sm,
    },

    formContainer: {
      gap: spacing.lg,
    },

    inputContainer: {
      gap: spacing.sm,
    },

    inputHeaderContainer: {
      flexDirection: "row",

      justifyContent: "space-between",
      alignItems: "center",

      paddingHorizontal: 2,
    },

    inputHeader: {
      ...typography.labelMD,

      color: colors.text,

      fontWeight: "600",
    },

    forgotBtn: {
      ...typography.labelSM,

      color: colors.primary,

      fontWeight: "600",
    },

    textInput: {
      width: "100%",

      backgroundColor: colors.backgrounds.input,

      borderWidth: 1.5,
      borderColor: colors.border,

      borderRadius: radius.lg,

      paddingHorizontal: spacing.lg,
      paddingVertical: 18,

      color: colors.text,

      fontSize: 15,
      fontWeight: "500",

      ...shadows.level1,
    },

    loginButton: {
      marginTop: spacing.sm,

      paddingVertical: 18,

      borderRadius: radius.xl,

      alignItems: "center",
      justifyContent: "center",

      backgroundColor: colors.primary,

      ...shadows.glow,
    },

    loginButtonDisabled: {
      marginTop: spacing.sm,

      paddingVertical: 18,

      borderRadius: radius.xl,

      alignItems: "center",
      justifyContent: "center",

      backgroundColor: colors.secondary,

      ...shadows.glow,
    },

    loginButtonText: {
      color: "#ffffff",

      fontSize: 16,
      fontWeight: "700",

      letterSpacing: 0.3,
    },

    footerContainer: {
      marginTop: spacing.xl,

      flexDirection: "row",

      justifyContent: "center",
      alignItems: "center",

      gap: spacing.xs,
    },

    footerText: {
      ...typography.labelMD,

      color: colors.textMuted,
    },

    signupText: {
      ...typography.labelMD,

      color: colors.primary,

      fontWeight: "700",
    },
  });
};
