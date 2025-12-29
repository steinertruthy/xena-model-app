import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  exploreVideos: {
    paddingVertical: spacing[12],
    paddingHorizontal: spacing[3],
    backgroundColor: colors.gray[900],
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[3],
    marginBottom: spacing[6],
  },
  headerIcon: {
    backgroundColor: colors.primary,
    padding: spacing[2],
    borderRadius: radius.lg,
  },
  card: {
    height: 400,
    width: 290,
    borderRadius: radius.xl,
    overflow: "hidden",
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTime: {
    backgroundColor: colors.gray[900] + "80",
    alignSelf: "flex-end",
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: radius.sm,
    position: "absolute",
    top: spacing[3],
    right: spacing[3],
  },
  cardPlayIcon: {
    borderRadius: radius.full,
    padding: spacing[3],
    backgroundColor: colors.gray[900] + 90,
  },
  cardInfo: {
    gap: spacing[1],
    position: "absolute",
    left: spacing[3],
    bottom: spacing[3],
  },
  cardInfoLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[1],
  },
});
