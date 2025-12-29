import { Image, ImageProps } from "expo-image";
import { View } from "react-native";
import { sizeStyles, styles } from "./styles";

type TSize = keyof typeof sizeStyles;
interface IAvatar extends ImageProps {
  size?: TSize;
}

export default function Avatar({ size = "xs", ...restProps }: IAvatar) {
  const sizeStyle = sizeStyles[size];
  return (
    <View style={styles.avatar}>
      <Image style={[sizeStyle]} {...restProps} />
    </View>
  );
}
