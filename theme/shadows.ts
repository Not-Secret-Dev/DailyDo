import { Platform } from "react-native";

export const shadows = {
  level1: Platform.select({
    ios: {
      shadowColor: "#4f46e5",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.08,
      shadowRadius: 20,
    },

    android: {
      elevation: 4,
    },
  }),

  level2: Platform.select({
    ios: {
      shadowColor: "#4f46e5",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.12,
      shadowRadius: 32,
    },

    android: {
      elevation: 10,
    },
  }),

  glow: Platform.select({
    ios: {
      shadowColor: "#4f46e5",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 18,
    },

    android: {
      elevation: 12,
    },
  }),
};
