import { colors } from "@/src/styles/colors";
import { radius } from "@/src/styles/radius";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  exploreCategories: {
    flex: 1,
    paddingHorizontal: spacing[3],
    marginTop: spacing[8],
  },
  flatList: {
    marginTop: spacing[4],
  },
  flatListSeparator: {
    marginBottom: spacing[2],
  },
  card: {
    padding: spacing[3],
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    alignItems: "center",
    width: "50%",
  },
  cardIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primaryPalette[50],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.full,
    marginBottom: spacing[2],
  },
  cardTextContainer: {
    alignItems: "center",
    gap: spacing[1],
  },
});
