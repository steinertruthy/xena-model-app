import { typography } from "@/src/styles/typography";
import { ReactNode } from "react";
import { Text, TextProps, TextStyle, View } from "react-native";
import { styles } from "./styles";

type TVariant = keyof typeof typography.variants;

export interface ITextLocal extends TextProps {
  children: ReactNode;
  variant?: TVariant;
  textAlign?: TextStyle["textAlign"];
  color?: string;
  enabledTag?: boolean;
  bold?: boolean;
}
export default function TextLocal({
  children,
  variant = "bodyMd",
  textAlign,
  color,
  enabledTag,
  bold,
  ...restProps
}: ITextLocal) {
  const variantStyle = typography.variants[variant];

  return (
    <View style={styles.textContainer}>
      {enabledTag && <View style={styles.textTag}></View>}
      <Text
        style={[
          styles.text,
          variantStyle,
          {
            ...(textAlign && { textAlign }),
            ...(color && { color }),
            ...(bold && { fontWeight: "bold" }),
          },
        ]}
        {...restProps}
      >
        {children}
      </Text>
    </View>
  );
}
