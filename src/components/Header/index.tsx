import { router } from "expo-router";
import { View } from "react-native";
import Button from "../ui/Button";
import TextLocal from "../ui/Text";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <TextLocal>Logo</TextLocal>

      <View style={styles.buttons}>
        <Button
          title="Login"
          variant="ghost"
          size="sm"
          leftIcon="log-in-outline"
          onPress={() => router.navigate("/sign-in")}
        />
        <Button
          title="Sign Up"
          size="sm"
          rounded="full"
          onPress={() => router.navigate("/sign-up")}
        />
      </View>
    </View>
  );
}
