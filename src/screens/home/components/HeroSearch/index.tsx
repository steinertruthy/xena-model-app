import TextLocal from "@/src/components/ui/Text";
import { colors } from "@/src/styles/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, ImageBackground, View } from "react-native";
import Search from "./Search";
import { styles } from "./style";

export default function HeroSearch() {
  const height = Dimensions.get("window").height * 0.25;

  return (
    <View style={styles.heroSearch}>
      <ImageBackground
        source={require("@/assets/images/hero-search-back-ground.webp")}
        resizeMode="cover"
        imageStyle={styles.imageBackgroundImage}
        style={[styles.imageBackground, { height: height }]}
      >
        <LinearGradient
          colors={[`${colors.gray[900]}` + "80", `${colors.gray[900]}` + "90"]}
          style={styles.linearGradient}
          start={{ x: 0, y: 1 }}
        />

        <View style={styles.textContainer}>
          <View style={styles.textTitleContainer}>
            <TextLocal variant="titleMd" color={colors.white}>
              Find Your Ideal{" "}
            </TextLocal>
            <TextLocal variant="titleMd" color={colors.primaryPalette[400]}>
              Companion
            </TextLocal>
          </View>

          <TextLocal textAlign="center" color={colors.white}>
            Discover verified professionals for genuine connections, travel, and
            events in your area.
          </TextLocal>
        </View>
        <Search />
      </ImageBackground>
    </View>
  );
}
