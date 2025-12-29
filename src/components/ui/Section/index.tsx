import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import TextLocal from "../Text";
import { styles } from "./styles";

interface ISection {
  children: ReactNode;
  title?: string;
  style?: StyleProp<ViewStyle>;
}

export default function Section({ children, title, style }: ISection) {
  return (
    <View style={[styles.section, style]}>
      {title && (
        <View style={styles.header}>
          <TextLocal variant="titleMd">{title}</TextLocal>
        </View>
      )}
      {children}
    </View>
  );
}
