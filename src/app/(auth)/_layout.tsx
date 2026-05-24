import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
        contentStyle: { backgroundColor: "transparent" },
      }}
    >
      <Stack.Screen name="login"></Stack.Screen>
      <Stack.Screen name="signup"></Stack.Screen>
    </Stack>
  );
};

export default AuthLayout;
