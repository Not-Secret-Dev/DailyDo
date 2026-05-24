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

const SignupScreen = () => {
  const { theme } = useTheme();
  const authStyles = createAuthStyles(theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (!email || !password || !username) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (username.length < 3) {
      Alert.alert("Error", "Username must be at least 3 characters");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,

        options: {
          data: {
            username: username,
          },
        },
      });

      if (error) {
        Alert.alert("Error", error.message);
        return;
      }

      Alert.alert("Success", "Account created successfully");
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
    } finally {
      setLoading(false);
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
            <Text style={authStyles.title}>Create Account</Text>
            <Text style={authStyles.subtitle}>
              Start building better habits today
            </Text>

            <View style={authStyles.formContainer}>
              {/* USERNAME */}
              <View style={authStyles.inputContainer}>
                <Text style={authStyles.inputHeader}>Username</Text>
                <TextInput
                  placeholder="Enter your username"
                  style={authStyles.textInput}
                  autoCapitalize="none"
                  value={username}
                  onChangeText={setUsername}
                />
              </View>

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
                <Text style={authStyles.inputHeader}>Password</Text>
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
                  {loading ? "Creating Account..." : "Create Account"}
                </Text>
              </TouchableOpacity>

              {/* FOOTER */}
              <View style={authStyles.footerContainer}>
                <Text style={authStyles.footerText}>
                  Already have an account?
                </Text>

                <TouchableOpacity
                  onPress={() => router.replace("/(auth)/login")}
                >
                  <Text style={authStyles.signupText}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignupScreen;
