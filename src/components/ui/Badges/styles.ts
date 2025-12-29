import { radius } from "@/src/styles/radius";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  badges: {
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[3],
    borderRadius: radius.full,
    marginBottom: spacing[2],
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
  },
});
