import TextLocal from "@/src/components/ui/Text";
import { View } from "react-native";
import { styles } from "./styles";

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.page}>
      <TextLocal>Forgot password</TextLocal>
    </View>
  );
}
