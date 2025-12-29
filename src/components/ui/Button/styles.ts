import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { StyleSheet } from "react-native";

export const baseStyles = StyleSheet.create({
  button: {
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing[2],
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[4],
  },
  title: {
    fontFamily: "Inter-Regular",
    fontWeight: "700",
    color: colors.white,
  },
});

export const variantStyles = StyleSheet.create({
  solid: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  outline: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  ghost: {},
});

export const variantStylesText = StyleSheet.create({
  solid: {
    color: "#FFFFFF",
  },
  outline: {
    color: colors.primary,
  },
  ghost: {
    color: colors.primary,
  },
});

export const sizeStyles = {
  xs: {
    height: 28,
    paddingHorizontal: 10,
    fontSize: typography.sizes.xs,
  },
  sm: {
    height: 36,
    paddingHorizontal: 12,
    fontSize: typography.sizes.sm,
  },
  md: {
    height: 44,
    paddingHorizontal: 16,
    fontSize: typography.sizes.base,
  },
  lg: {
    height: 52,
    paddingHorizontal: 20,
    fontSize: typography.sizes.lg,
  },
};

export const roundedStyles = StyleSheet.create({
  none: {
    borderRadius: radius.none,
  },
  sm: {
    borderRadius: radius.sm,
  },
  md: {
    borderRadius: radius.md,
  },
  lg: {
    borderRadius: radius.lg,
  },
  xl: {
    borderRadius: radius.xl,
  },
  full: {
    borderRadius: radius.full,
    height: "100%",
  },
});

export const iconSizeStyles = StyleSheet.create({
  xs: {
    fontSize: typography.sizes.xs,
  },
  sm: {
    fontSize: typography.sizes.sm,
  },
  md: {
    fontSize: typography.sizes.base,
  },
  lg: {
    fontSize: typography.sizes.lg,
  },
});
