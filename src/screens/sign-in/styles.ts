import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    gap: spacing[3],
  },
  inputsContainer: {
    gap: spacing[2],
  },
  forgotPassword: {
    alignSelf: "flex-end",
  },
});
