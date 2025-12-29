import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
  baseStyles,
  iconSizeStyles,
  sizeStyles,
  variantStyles,
  variantStylesText,
} from "./styles";

import { radius } from "@/src/styles/radius";
import { Ionicons } from "@expo/vector-icons";

type TVariant = "solid" | "outline" | "ghost";
type TSize = keyof typeof sizeStyles;
type TRounded = "none" | "sm" | "md" | "lg" | "xl" | "full";

type TGlyphMap = keyof typeof Ionicons.glyphMap;

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: TVariant;
  size?: TSize;
  backgroundColor?: string;
  color?: string;
  rounded?: TRounded;
  leftIcon?: TGlyphMap;
  rightIcon?: TGlyphMap;
}

export default function Button({
  title,
  variant = "solid",
  size = "md",
  backgroundColor,
  color,
  rounded = "xl",
  leftIcon,
  rightIcon,
  ...restProps
}: ButtonProps) {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];
  const roundedStyle = radius[rounded];
  const variantStyleText = variantStylesText[variant];

  const iconSizeStyle = iconSizeStyles[size];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        baseStyles.button,
        variantStyle,
        sizeStyle,
        {
          borderRadius: roundedStyle,
          ...(backgroundColor && { backgroundColor }),
        },
      ]}
      {...restProps}
    >
      {leftIcon && (
        <Ionicons
          name={leftIcon}
          style={[variantStyleText, iconSizeStyle, { ...(color && { color }) }]}
        />
      )}
      <Text
        style={[
          baseStyles.title,
          variantStyleText,
          { ...(color && { color }) },
        ]}
      >
        {title}
      </Text>
      {rightIcon && (
        <Ionicons
          name={rightIcon}
          style={[variantStyleText, iconSizeStyle, { ...(color && { color }) }]}
        />
      )}
    </TouchableOpacity>
  );
}
