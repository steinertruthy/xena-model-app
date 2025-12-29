import { colors } from "@/src/styles/colors";
import { shadows } from "@/src/styles/shadows";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  heroSearch: {
    ...shadows.sm,
    marginBottom: 205,
  },
  imageBackground: {
    width: "100%",
    position: "relative",
    backgroundColor: colors.white,
  },
  imageBackgroundImage: {
    height: "100%",
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  textContainer: {
    padding: spacing[3],
    alignItems: "center",
    gap: spacing[2],
  },
  textTitleContainer: {
    flexDirection: "row",
  },
});
