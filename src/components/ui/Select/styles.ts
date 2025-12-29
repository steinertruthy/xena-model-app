import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  select: {
    flexDirection: "column",
    position: "relative",
  },
  selectControl: {
    width: "100%",
    borderWidth: 1,
    borderRadius: radius.xl,
    borderColor: colors.gray[200],
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    backgroundColor: colors.gray[50],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flatList: {
    backgroundColor: colors.gray[50],
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderBottomRightRadius: radius.xl,
    borderBottomLeftRadius: radius.xl,
    position: "absolute",
    right: 0,
    bottom: -114,
    left: 0,
    zIndex: 99,
  },
  listItem: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
  },
});
