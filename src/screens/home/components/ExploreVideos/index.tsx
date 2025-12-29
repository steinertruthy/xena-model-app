import TextLocal from "@/src/components/ui/Text";
import { exploreVideos } from "@/src/mocks/explore-videos";
import { colors } from "@/src/styles/colors";
import {
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
} from "react-native";

import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export default function ExploreVideos() {
  const onSelect = (id: string) => {
    console.log("onSelected", id);
  };

  const renderItem = ({
    item,
  }: ListRenderItemInfo<(typeof exploreVideos)[0]>) => {
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={() => onSelect(item.id)}>
        <ImageBackground source={{ uri: item.thumbUrl }} style={styles.card}>
          <LinearGradient
            colors={[`${colors.gray[600]}40`, `${colors.gray[800]}90`]}
            style={styles.linearGradient}
          >
            <View style={styles.cardTime}>
              <TextLocal variant="bodySm" color={colors.white}>
                {item.time}
              </TextLocal>
            </View>

            <View style={styles.cardPlayIcon}>
              <Ionicons
                name="play"
                size={typography.sizes["4xl"]}
                color={colors.gray[300]}
              />
            </View>

            <View style={styles.cardInfo}>
              <TextLocal bold color={colors.white}>
                {item.name}
              </TextLocal>

              <View style={styles.cardInfoLocation}>
                <Ionicons
                  name="location-outline"
                  size={typography.sizes.sm}
                  color={colors.gray[200]}
                />
                <TextLocal variant="bodySm" color={colors.gray[200]}>
                  {item.location}
                </TextLocal>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.exploreVideos}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons
            name="play"
            size={typography.sizes["2xl"]}
            color={colors.white}
          />
        </View>
        <TextLocal variant="titleLg" color={colors.white}>
          Video Teasers
        </TextLocal>
      </View>

      <FlatList
        data={exploreVideos}
        ItemSeparatorComponent={() => (
          <View style={{ width: spacing[2] }}></View>
        )}
        renderItem={renderItem}
        horizontal
        keyExtractor={({ id }) => id}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={3}
        windowSize={3}
      />
    </View>
  );
}
