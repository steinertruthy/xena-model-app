import { colors } from "@/src/styles/colors";
import { typography } from "@/src/styles/typography";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ColorValue, View } from "react-native";
import TextLocal from "../Text";
import { styles } from "./styles";

type TIcon = keyof typeof Ionicons.glyphMap;

interface IBadges {
  text: string;
  color: string | string[];
  icon?: TIcon;
}

export default function Badges({ text, color, icon }: IBadges) {
  let gradientColors: [ColorValue, ColorValue, ...ColorValue[]] = ["", ""];

  if (Array.isArray(color)) {
    gradientColors.splice(0, gradientColors.length);
    color.forEach((element) => {
      gradientColors.push(element);
    });
  }

  const renderTextBadges = (text: string, icon?: TIcon) => {
    return (
      <>
        {icon && (
          <Ionicons
            name={icon}
            size={typography.sizes.xs}
            color={colors.white}
          />
        )}
        <TextLocal variant="caption" color={colors.white}>
          {text}
        </TextLocal>
      </>
    );
  };
  return Array.isArray(color) ? (
    <LinearGradient colors={gradientColors} end={[1, 2]} style={styles.badges}>
      {renderTextBadges(text, icon)}
    </LinearGradient>
  ) : (
    <View style={[styles.badges, { backgroundColor: color }]}>
      {renderTextBadges(text, icon)}
    </View>
  );
}
