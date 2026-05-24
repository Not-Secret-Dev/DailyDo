import useAuth from "@/hooks/useAuth";
import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen name="(tabs)" />
          ) : (
            <Stack.Screen name="(auth)" />
          )}
        </Stack>
      </ThemeProvider>
    </SafeAreaView>
  );
}
