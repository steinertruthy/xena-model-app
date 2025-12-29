import { colors } from "@/src/styles/colors";
import { typography } from "@/src/styles/typography";
import { TextInput, TextInputProps, View } from "react-native";
import TextLocal from "../Text";
import { styles } from "./styles";

type TTextVariant = keyof typeof typography.variants;
interface IInput extends TextInputProps {
  label?: string;
  textVariant?: TTextVariant;
  textError?: string;
}

export default function Input({
  textVariant = "bodyMd",
  label,
  textError,
  ...restProps
}: IInput) {
  const textVariantStyle = typography.variants[textVariant];
  return (
    <View style={styles.inout}>
      {label && <TextLocal variant="bodySm">{label}</TextLocal>}
      <TextInput style={[styles.textInput, textVariantStyle]} {...restProps} />
      {textError && (
        <TextLocal variant="bodySm" color={colors.red[700]}>
          {textError}
        </TextLocal>
      )}
    </View>
  );
}
