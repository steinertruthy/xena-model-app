import { colors } from "@/src/styles/colors";
import { shadows } from "@/src/styles/shadows";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  escortsList: {
    padding: spacing[3],
    backgroundColor: colors.white,
    marginTop: spacing[8],
    ...shadows.sm,
  },
  title: {
    marginBottom: spacing[7],
  },
  flatList: {
    marginBottom: spacing[5],
    paddingBottom: spacing[2],
  },
});
