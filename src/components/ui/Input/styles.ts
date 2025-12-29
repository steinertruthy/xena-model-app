import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inout: {
    gap: spacing[1],
  },
  textInput: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: radius.xl,
  },
});
