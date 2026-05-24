import useTheme from "@/hooks/useTheme";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const EmptyHabits = () => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}
    >
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: theme.colors.bgLight,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name="edit-3" size={32} color={theme.colors.textMuted} />
      </View>

      <Text
        style={{
          color: theme.colors.text,
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        Create your first habit
      </Text>
    </View>
  );
};

export default EmptyHabits;
