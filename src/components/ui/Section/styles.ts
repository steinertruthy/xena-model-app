import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { shadows } from "@/src/styles/shadows";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    padding: spacing[4],
    backgroundColor: colors.white,
    marginHorizontal: spacing[3],
    borderRadius: radius.xl,
    ...shadows.sm,
  },
  header: {
    marginBottom: spacing[4],
  },
});
