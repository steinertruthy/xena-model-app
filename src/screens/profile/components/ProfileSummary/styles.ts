import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { shadows } from "@/src/styles/shadows";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  coverImage: {
    height: 300,
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: spacing[3],
  },
  badgesContainer: {
    flexDirection: "row",
    gap: spacing[2],
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    padding: spacing[4],
    marginTop: "-15%",
    gap: spacing[3],
    marginHorizontal: spacing[3],
    ...shadows.sm,
  },
  avatar: {
    marginTop: "-17%",
  },
  contentBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentMainInfo: {
    gap: spacing[2],
  },
  meta: {
    flexDirection: "row",
    gap: spacing[2],
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[1],
  },
  ratingContainer: {
    alignItems: "center",
    gap: spacing[1],
  },
  rating: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    backgroundColor: colors.primaryPalette[100],
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
    borderRadius: radius.md,
  },
  about: {
    marginTop: spacing[6],
  },
});
