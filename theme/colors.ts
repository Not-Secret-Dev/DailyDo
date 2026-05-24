export interface ColorScheme {
  bg: string;
  surface: string;
  bgLight: string;

  text: string;
  textMuted: string;
  textLight: string;

  border: string;

  primary: string;
  secondary: string;

  success: string;
  warning: string;
  danger: string;

  shadow: string;

  gradients: {
    primary: [string, string];
    background: [string, string];
    surface: [string, string];
    success: [string, string];
    warning: [string, string];
    danger: [string, string];
  };

  backgrounds: {
    input: string;
    editInput: string;
  };

  statusBarStyle: "light-content" | "dark-content";
}

export const lightColors: ColorScheme = {
  bg: "#faf8ff",
  surface: "#ffffff",
  bgLight: "#ede2fe",

  text: "#131b2e",
  textMuted: "#5b5a6b",
  textLight: "#b1b1b1",

  border: "#d7dcf3",

  primary: "#4f46e5",
  secondary: "#7c3aed",

  success: "#10b981",
  warning: "#f59e0b",
  danger: "#ef4444",

  shadow: "rgba(79,70,229,0.10)",

  gradients: {
    primary: ["#7c3aed", "#4f46e5"],

    background: ["#faf8ff", "#eef2ff"],

    surface: ["#ffffff", "#f5f7ff"],

    success: ["#10b981", "#059669"],

    warning: ["#f59e0b", "#d97706"],

    danger: ["#ef4444", "#dc2626"],
  },

  backgrounds: {
    input: "#f8faff",
    editInput: "#eef2ff",
  },

  statusBarStyle: "dark-content",
};

export const darkColors: ColorScheme = {
  bg: "#0f172a",
  surface: "#1e293b",
  bgLight: "#7c3aed",

  text: "#f8fafc",
  textMuted: "#94a3b8",
  textLight: "#b1b1b1",

  border: "#334155",

  primary: "#818cf8",
  secondary: "#a78bfa",

  success: "#34d399",
  warning: "#fbbf24",
  danger: "#f87171",

  shadow: "rgba(0,0,0,0.35)",

  gradients: {
    primary: ["#a78bfa", "#818cf8"],

    background: ["#0f172a", "#1e293b"],

    surface: ["#1e293b", "#334155"],

    success: ["#34d399", "#10b981"],

    warning: ["#fbbf24", "#f59e0b"],

    danger: ["#f87171", "#ef4444"],
  },

  backgrounds: {
    input: "#1e293b",
    editInput: "#0f172a",
  },

  statusBarStyle: "light-content",
};
