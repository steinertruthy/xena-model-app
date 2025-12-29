import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing[3],
  },
  tab: {
    padding: spacing[1],
    backgroundColor: colors.gray[100],
    flexDirection: "row",
    gap: spacing[1],
    borderRadius: radius.xl,
  },
  tabItem: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: radius.lg,
  },
  image: {
    height: 200,
    width: "49%",
    borderRadius: radius.lg,
  },
  linearGradient: {
    flex: 1,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  cardPlayIcon: {
    borderRadius: radius.full,
    padding: spacing[3],
    backgroundColor: colors.gray[900] + 90,
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
});
