import { ThemeType } from "@/hooks/useTheme";
import { shadows } from "@/theme";
import { StyleSheet } from "react-native";

export const createHabitsStyles = (theme: ThemeType) => {
  const { colors, radius, spacing, typography } = theme;

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
      marginBottom: spacing.sm,
    },

    completedContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.sm,
    },

    date: {
      ...typography.bodyMD,
      color: colors.text,
      fontWeight: "500",
    },

    completedText: {
      backgroundColor: colors.bgLight,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.md,
      borderRadius: radius.full,
      overflow: "hidden",
      color: colors.primary,
      fontWeight: "bold",
    },

    completedTextLabel: {
      ...typography.labelSM,
      color: "white",
    },

    /* =========================
       MODAL LAYOUT
    ========================= */

    addHabitContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    modalHeader: {
      paddingVertical: spacing.md,
      alignItems: "center",
      backgroundColor: "transparent",
    },

    dragHandle: {
      width: 40,
      height: 4,
      backgroundColor: colors.textMuted,
      borderRadius: 2,
      opacity: 0.4,
    },

    addHabitCard: {
      backgroundColor: colors.bg,
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      paddingHorizontal: spacing.md,
      paddingTop: spacing.md,
      paddingBottom: spacing.md,
      maxHeight: "92%",
      flexDirection: "column",
    },

    scrollContent: {
      paddingBottom: spacing.sm,
    },

    /* =========================
       ICON PREVIEW SECTION
    ========================= */

    iconPreviewSection: {
      alignItems: "center",
      marginBottom: spacing.xl,
      paddingVertical: spacing.lg,
    },

    iconPreview: {
      width: 100,
      height: 100,
      borderRadius: 24,
      backgroundColor: colors.bgLight,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: spacing.md,
      borderWidth: 2,
      borderColor: colors.primary,
      opacity: 0.9,
    },

    previewHint: {
      ...typography.labelMD,
      color: colors.textMuted,
    },

    /* =========================
       SECTION BASE STYLE
    ========================= */

    sectionWrapper: {
      marginBottom: spacing.xl,
      gap: spacing.md,
    },

    sectionCard: {
      backgroundColor: colors.bgLight,
      borderRadius: 16,
      padding: spacing.md,
      gap: spacing.sm,
    },

    sectionTitle: {
      ...typography.bodyMD,
      color: colors.text,
      fontWeight: "600",
      fontSize: 16,
      letterSpacing: 0.3,
    },

    sectionSubtitle: {
      ...typography.labelMD,
      color: colors.textMuted,
    },

    /* =========================
       HABIT DETAILS SECTION
    ========================= */

    habitDetailsCard: {
      backgroundColor: colors.bgLight,
      borderRadius: 16,
      padding: spacing.md,
      gap: spacing.md,
    },

    addHabitInput: {
      borderWidth: 1.5,
      borderColor: colors.border,
      padding: 14,
      borderRadius: 12,
      color: colors.text,
      backgroundColor: colors.bg,
      ...typography.bodyMD,
      fontWeight: "500",
    },

    charCount: {
      ...typography.labelSM,
      color: colors.textMuted,
      marginTop: -spacing.sm,
    },

    /* =========================
       ICON GRID & BUTTONS
    ========================= */

    iconGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
      justifyContent: "space-between",
    },

    iconButton: {
      width: 60,
      height: 60,
      borderRadius: 14,
      backgroundColor: colors.bgLight,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1.5,
      borderColor: "transparent",
    },

    iconButtonSelected: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      transform: [{ scale: 1.05 }],
    },

    daysGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 6,
    },

    dayButton: {
      width: 45,
      height: 45,
      borderRadius: 9,
      backgroundColor: colors.bgLight,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1.5,
      borderColor: "transparent",
    },

    dayButtonSelected: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      transform: [{ scale: 1.05 }],
    },

    /* =========================
       DURATION DROPDOWN
    ========================= */

    dropdownButton: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.bgLight,
      paddingVertical: 14,
      paddingHorizontal: spacing.md,
      borderRadius: 12,
      borderWidth: 1.5,
      borderColor: colors.border,
    },

    dropdownButtonText: {
      ...typography.labelMD,
      color: colors.text,
      flex: 1,
    },

    dropdownMenu: {
      backgroundColor: colors.bgLight,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
      marginTop: -spacing.sm,
      overflow: "hidden",
    },

    dropdownItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 12,
      paddingHorizontal: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },

    dropdownItemSelected: {
      backgroundColor: colors.primary,
      opacity: 0.1,
      borderBottomColor: colors.primary,
    },

    dropdownItemText: {
      ...typography.labelMD,
      color: colors.text,
      flex: 1,
    },

    dropdownItemTextSelected: {
      color: colors.primary,
      fontWeight: "600",
    },

    /* =========================
   REMINDER CARD
========================= */

    reminderCard: {
      backgroundColor: colors.bgLight,
      borderRadius: 16,
      padding: spacing.md,
      gap: spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
    },

    reminderTopRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    reminderTitle: {
      ...typography.bodyMD,
      color: colors.text,
      fontWeight: "600",
    },

    reminderSubtitle: {
      ...typography.labelSM,
      color: colors.textMuted,
      marginTop: 2,
    },

    reminderTimeBox: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 12,
      paddingHorizontal: spacing.md,
      backgroundColor: colors.bg,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
    },

    reminderTimeText: {
      ...typography.bodyMD,
      color: colors.text,
      flex: 1,
      marginLeft: 10,
    },

    /* =========================
       COMING SOON CARDS
    ========================= */

    comingSoonCard: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.md,
      backgroundColor: colors.bgLight,
      padding: spacing.md,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
      borderStyle: "dashed",
    },

    comingSoonText: {
      ...typography.labelMD,
      color: colors.textMuted,
      flex: 1,
    },

    /* =========================
       Habit Card
    ========================= */

    habitCardContainer: {
      ...shadows.level1,
      width: "100%",
      padding: 14,
      borderRadius: radius.lg,
      backgroundColor: colors.surface,
      marginBottom: spacing.md,
    },

    cardTop: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    cardIconContainer: {
      padding: spacing.sm || 10,
      backgroundColor: "#ECEAFC",
      borderRadius: radius.md,
      alignItems: "center",
      justifyContent: "center",
    },

    cardTextContainer: {
      flex: 1,
      flexDirection: "column",
      marginHorizontal: spacing.md,
    },

    habitTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text || "#1A1A1A",
      marginBottom: 4,
    },

    reminderRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    reminderIcon: {
      marginRight: 4,
    },

    reminderText: {
      fontSize: 13,
      color: colors.textMuted || "#666666",
    },

    separator: {
      marginHorizontal: 6,
      fontSize: 12,
      color: colors.textMuted || "#666666",
    },

    checkboxWrapper: {
      padding: 4, // Increases touch target size for UX
    },

    checkboxInner: {
      width: 26,
      height: 26,
      borderRadius: 13,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
    },

    /* =========================
       FOOTER & BUTTONS
    ========================= */

    modalFooter: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: spacing.md,
      paddingTop: spacing.md,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      marginHorizontal: -spacing.md,
      paddingHorizontal: spacing.md,
    },

    cancelButton: {
      paddingVertical: 12,
      paddingHorizontal: spacing.lg,
      borderRadius: 10,
      backgroundColor: colors.bgLight,
    },

    cancelText: {
      ...typography.labelMD,
      color: colors.textMuted,
    },

    addButton: {
      paddingVertical: 12,
      paddingHorizontal: spacing.xl,
      borderRadius: 10,
      backgroundColor: colors.primary,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.xs,
    },

    addButtonDisabled: {
      backgroundColor: colors.bgLight,
      opacity: 0.5,
    },

    addText: {
      ...typography.labelMD,
      color: "white",
    },

    addTextDisabled: {
      color: colors.textMuted,
      fontWeight: "600",
    },

    buttonPressed: {
      opacity: 0.7,
    },
  });
};
