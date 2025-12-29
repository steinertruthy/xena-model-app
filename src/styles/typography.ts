import { colors } from "./colors";

export const typography = {
  base: {
    color: colors.text,
    fontFamily: "Inter-Regular",
  },

  sizes: {
    xs: 12,
    xsm: 13,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
  },

  lineHeight: {
    xs: 16,
    sm: 18,
    base: 22,
    lg: 24,
    xl: 28,
    "2xl": 32,
    "3xl": 36,
    "4xl": 40,
    "5xl": 56,
  },

  weights: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  variants: {
    titleXs: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: "600",
    },
    titleSm: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "700",
    },
    titleMd: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: "700",
    },
    titleLg: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: "800",
    },
    titleXl: {
      fontSize: 30,
      lineHeight: 36,
      fontWeight: "800",
    },

    bodySm: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: "400",
    },
    bodyMd: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "400",
    },
    bodyLg: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: "400",
    },

    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: "400",
    },

    buttonSm: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: "600",
      letterSpacing: 0.5,
    },
    buttonMd: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: "600",
      letterSpacing: 0.5,
    },
  },
} as const;
