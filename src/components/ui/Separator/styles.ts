import { colors } from "@/src/styles/colors";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.gray[200],
    marginVertical: spacing[3],
  },
});
