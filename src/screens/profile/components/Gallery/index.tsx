import Section from "@/src/components/ui/Section";
import TextLocal from "@/src/components/ui/Text";
import { profiles } from "@/src/mocks/profiles";
import { colors } from "@/src/styles/colors";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import { FlatList, ListRenderItemInfo, Pressable, View } from "react-native";
import { styles } from "./styles";

interface IGallery {
  profile: (typeof profiles)[0];
}

type TTab = "Photos" | "Videos";

export default function Gallery({ profile }: IGallery) {
  const tabs: TTab[] = ["Photos", "Videos"];
  const [galleryTabSelected, setGalleryTabSelected] = useState<TTab>("Photos");

  const renderItemTab = (tab: (typeof tabs)[0]) => {
    return (
      <Pressable
        onPress={() => setGalleryTabSelected(tab)}
        key={tab}
        style={[
          styles.tabItem,
          {
            backgroundColor:
              tab === galleryTabSelected ? colors.white : undefined,
          },
        ]}
      >
        <TextLocal
          bold
          color={tab === galleryTabSelected ? colors.primary : colors.gray[500]}
        >
          {tab} (
          {tab === "Photos" ? profile.photos.total : profile.videos.total})
        </TextLocal>
      </Pressable>
    );
  };

  const renderItemPhoto = useCallback(
    (props: ListRenderItemInfo<(typeof profiles)[0]["photos"]["items"][0]>) => {
      const { item } = props;
      return (
        <>
          <Image source={{ uri: item }} key={item} style={styles.image} />
        </>
      );
    },
    []
  );

  const renderItemVideo = useCallback(
    (props: ListRenderItemInfo<(typeof profiles)[0]["videos"]["items"][0]>) => {
      const { item } = props;

      return (
        <View
          style={[
            styles.image,
            {
              overflow: "hidden",
            },
          ]}
        >
          <Image
            source={{ uri: item.thumbUrl }}
            key={item.thumbUrl}
            style={{ flex: 1 }}
          />
          <LinearGradient
            colors={[`${colors.gray[600]}40`, `${colors.gray[800]}80`]}
            style={styles.linearGradient}
          >
            <View style={styles.cardTime}>
              <TextLocal variant="caption" color={colors.white}>
                {item.time}
              </TextLocal>
            </View>
            <View style={styles.cardPlayIcon}>
              <Ionicons
                name="play"
                size={typography.sizes["lg"]}
                color={colors.gray[300]}
              />
            </View>
          </LinearGradient>
        </View>
      );
    },
    []
  );
  return (
    <Section>
      <View style={styles.header}>
        <TextLocal variant="titleMd">Gallery</TextLocal>

        <View style={styles.tab}>{tabs.map((tab) => renderItemTab(tab))}</View>
      </View>

      {galleryTabSelected === "Photos" && (
        <FlatList
          data={profile.photos.items}
          renderItem={renderItemPhoto}
          numColumns={2}
          keyExtractor={(item) => item}
          columnWrapperStyle={{ gap: spacing[2] }}
          contentContainerStyle={{ gap: spacing[2] }}
          scrollEnabled={false}
        />
      )}

      {galleryTabSelected === "Videos" && (
        <FlatList
          data={profile.videos.items}
          ItemSeparatorComponent={() => (
            <View style={{ margin: spacing[1] }}></View>
          )}
          renderItem={renderItemVideo}
          numColumns={2}
          keyExtractor={(item) => item.thumbUrl}
          columnWrapperStyle={{ gap: spacing[2] }}
          scrollEnabled={false}
        />
      )}
    </Section>
  );
}
