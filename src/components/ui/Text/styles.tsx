import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/styles/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
  },
  textTag: {
    height: "100%",
    width: spacing[2],
    backgroundColor: colors.primaryPalette[500],
    borderRadius: radius.full,
  },
  text: {
    ...typography.base,
  },
});
