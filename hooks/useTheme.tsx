import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { ColorScheme, darkColors, lightColors } from "@/theme/colors";

import { radius } from "@/theme/radius";
import { shadows } from "@/theme/shadows";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";

export interface ThemeType {
  colors: ColorScheme;
  spacing: typeof spacing;
  radius: typeof radius;
  typography: typeof typography;
  shadows: typeof shadows;
}

interface ThemeContextType {
  theme: ThemeType;
  isDarkMode: boolean;
  toggleDarkMode: () => Promise<void>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("darkMode");

        if (storedTheme !== null) {
          setIsDarkMode(JSON.parse(storedTheme));
        }
      } catch (error) {
        console.log("Failed to load theme:", error);
      }
    };

    loadTheme();
  }, []);

  const toggleDarkMode = async () => {
    try {
      const newMode = !isDarkMode;

      setIsDarkMode(newMode);

      await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
    } catch (error) {
      console.log("Failed to save theme:", error);
    }
  };

  const colors = isDarkMode ? darkColors : lightColors;

  const theme: ThemeType = {
    colors,
    spacing,
    radius,
    typography,
    shadows,
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};

export default useTheme;
