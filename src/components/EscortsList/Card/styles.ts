import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { shadows } from "@/src/styles/shadows";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    overflow: "hidden",
    ...shadows.sm,
  },
  imageBackground: {
    height: 450,
    width: "100%",
  },
  linearGradient: {
    flex: 1,
    padding: spacing[3],
    justifyContent: "space-between",
  },
  badgesContainer: {
    alignSelf: "flex-start",
  },
  primaryInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[1],
    marginTop: spacing[1],
  },
  primaryInfoRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[1],
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[3],
    backgroundColor: `${colors.gray[900]}30`,
    borderRadius: radius.lg,
    alignSelf: "flex-end",
  },
  secondaryInfo: {
    padding: spacing[4],
  },
  secondaryInfoHour: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing[4],
  },
});
