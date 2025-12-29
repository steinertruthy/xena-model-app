import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { shadows } from "@/src/styles/shadows";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  services: {
    flex: 1,
    padding: spacing[4],
    backgroundColor: colors.white,
    marginHorizontal: spacing[3],
    borderRadius: radius.xl,
    ...shadows.sm,
  },
  serviceItem: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    backgroundColor: `${colors.primary}25`,
    borderRadius: radius.full,
  },
});
