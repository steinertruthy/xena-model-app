import TextLocal from "@/src/components/ui/Text";
import { exploreCategories } from "@/src/mocks/explore-categories";
import { colors } from "@/src/styles/colors";
import { spacing } from "@/src/styles/spacing";
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

type TExploreCategory = (typeof exploreCategories)[0];

export default function ExploreCategories() {
  const onSelected = (categoryId: string) => {
    console.log("onSelected", categoryId);
  };

  const renderItem = ({ item }: ListRenderItemInfo<TExploreCategory>) => {
    const { id, icon, name, description } = item;
    return (
      <TouchableOpacity
        onPress={() => onSelected(id)}
        activeOpacity={0.5}
        style={styles.card}
      >
        <View style={styles.cardIcon}>
          <Ionicons name={icon} size={22} color={colors.primary} />
        </View>
        <View style={styles.cardTextContainer}>
          <TextLocal variant="titleSm">{name}</TextLocal>
          <TextLocal variant="bodySm" color={colors.gray[600]}>
            {description}
          </TextLocal>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.exploreCategories}>
      <TextLocal variant="titleLg" enabledTag>
        Explore Categories
      </TextLocal>

      <FlatList
        data={exploreCategories}
        ItemSeparatorComponent={() => (
          <View style={styles.flatListSeparator}></View>
        )}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: spacing[2] }}
        numColumns={2}
        style={styles.flatList}
        scrollEnabled={false}
      />
    </View>
  );
}
