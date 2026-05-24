import { createLoadingStyles } from "@/assets/styles/Loading.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Text, View } from "react-native";

const Index = () => {
  const { theme } = useTheme();
  const loadingStyles = createLoadingStyles(theme);

  const progress = useRef(new Animated.Value(0)).current;
  const [progressText, setProgressText] = useState(0);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 90,
      duration: 3000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();

    const listener = progress.addListener(({ value }) => {
      setProgressText(Math.floor(value));
    });

    const initializeApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3500));

      const hasUser = false;

      if (hasUser) {
        router.replace("/(tabs)/home");
        console.log("User found!");
      } else {
        router.replace("/(auth)/login");
      }
    };

    initializeApp();

    return () => {
      progress.removeListener(listener);
    };
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={loadingStyles.container}>
      <View style={loadingStyles.centerContainer}>
        <View style={loadingStyles.iconContainer}>
          <LinearGradient
            colors={theme.colors.gradients.primary}
            style={loadingStyles.loadingIcon}
          >
            <Ionicons
              name="checkmark-circle-outline"
              size={35}
              color={theme.colors.bg}
            />
          </LinearGradient>
        </View>

        <View style={loadingStyles.textContainer}>
          <Text style={loadingStyles.heading}>HabitFlow</Text>

          <Text style={loadingStyles.subHeading}>
            Aligning your daily rhythm
          </Text>
        </View>
      </View>

      <View style={loadingStyles.loadingWrapper}>
        <View style={loadingStyles.loadingHeader}>
          <Text style={loadingStyles.loadingText}>Synchronizing...</Text>

          <Text style={loadingStyles.loadingPercent}>{progressText}%</Text>
        </View>

        <View style={loadingStyles.progressBarBackground}>
          <Animated.View
            style={[
              loadingStyles.progressBarFill,
              {
                width: progressWidth,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default Index;
