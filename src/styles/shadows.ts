import { colors } from "./colors";
import { radius } from "./radius";

export const shadows = {
  xs: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: radius.xs,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },

  sm: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.07,
    shadowRadius: radius.sm,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  md: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: radius.md,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  lg: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: radius.lg,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  xl: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.16,
    shadowRadius: radius.xl,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
};
