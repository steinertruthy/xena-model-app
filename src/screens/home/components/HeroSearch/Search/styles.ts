import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  search: {
    gap: spacing[2],
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    padding: spacing[3],
    marginHorizontal: spacing[3],
    marginVertical: spacing[2],
  },
});
