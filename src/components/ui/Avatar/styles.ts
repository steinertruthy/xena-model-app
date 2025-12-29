import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { shadows } from "@/src/styles/shadows";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatar: {
    alignSelf: "flex-start",
    borderRadius: radius.full,
    overflow: "hidden",
    borderWidth: spacing[1],
    borderColor: colors.white,
    ...shadows.sm,
  },
});

export const sizeStyles = StyleSheet.create({
  xs: {
    height: spacing[8],
    width: spacing[8],
  },
  sm: {
    height: spacing[10],
    width: spacing[10],
  },
  md: {
    height: spacing[12],
    width: spacing[12],
  },
  lg: {
    height: spacing[16],
    width: spacing[16],
  },
  xl: {
    height: spacing[20],
    width: spacing[20],
  },
  "2xl": {
    height: spacing[24],
    width: spacing[24],
  },
});
