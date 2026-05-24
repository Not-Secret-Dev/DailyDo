import useTheme from "@/hooks/useTheme";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";

const FloatingAddButton = ({ onPress }: { onPress: () => void }) => {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={{
        position: "absolute",
        bottom: 30,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: theme.colors.primary,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
      }}
    >
      <Feather name="plus" size={28} color="white" />
    </Pressable>
  );
};

export default FloatingAddButton;
