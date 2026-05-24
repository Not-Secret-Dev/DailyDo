import { createAuthStyles } from "@/assets/styles/Auth.styles";
import useTheme from "@/hooks/useTheme";
import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginPage = () => {
  const { theme } = useTheme();
  const authStyles = createAuthStyles(theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) return;

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    router.replace("/(tabs)/home");
    if (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={authStyles.keyboardViewContainer}
      >
        <ScrollView
          contentContainerStyle={authStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={authStyles.contentContainer}>
            <Text style={authStyles.title}>Welcome back</Text>
            <Text style={authStyles.subtitle}>
              Check what your progress was last time
            </Text>

            <View style={authStyles.formContainer}>
              {/* EMAIL */}
              <View style={authStyles.inputContainer}>
                <Text style={authStyles.inputHeader}>Email</Text>
                <TextInput
                  placeholder="Enter your email"
                  style={authStyles.textInput}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              {/* PASSWORD */}
              <View style={authStyles.inputContainer}>
                <View style={authStyles.inputHeaderContainer}>
                  <Text style={authStyles.inputHeader}>Password</Text>

                  <TouchableOpacity>
                    <Text style={authStyles.forgotBtn}>Forgot password?</Text>
                  </TouchableOpacity>
                </View>

                <TextInput
                  placeholder="Enter your password"
                  style={authStyles.textInput}
                  secureTextEntry
                  autoCapitalize="none"
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              {/* BUTTON */}
              <TouchableOpacity
                onPress={handleSubmit}
                style={[authStyles.loginButton, loading && { opacity: 0.6 }]}
                disabled={loading}
              >
                <Text style={authStyles.loginButtonText}>
                  {loading ? "Signing In..." : "Sign In"}
                </Text>
              </TouchableOpacity>

              {/* FOOTER */}
              <View style={authStyles.footerContainer}>
                <Text style={authStyles.footerText}>
                  Don't have an account?
                </Text>

                <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
                  <Text style={authStyles.signupText}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginPage;
