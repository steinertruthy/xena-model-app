import { escorts } from "@/src/mocks/escorts";
import { colors } from "@/src/styles/colors";
import { spacing } from "@/src/styles/spacing";
import { useState } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import Button from "../ui/Button";
import TextLocal from "../ui/Text";
import Card from "./Card";
import { styles } from "./styles";

export type TEscort = (typeof escorts)[0];

export default function EscortsList() {
  const [page, setPage] = useState(0);
  const onViewMore = () => {
    setPage((prev) => prev + 1);

    console.log("onViewMore", page);
  };

  const renderItem = ({ item }: ListRenderItemInfo<TEscort>) => {
    return <Card item={item} key={item.id} />;
  };

  return (
    <View style={styles.escortsList}>
      <View style={styles.title}>
        <TextLocal variant="titleXl">Featured Companions</TextLocal>

        <TextLocal variant="bodySm" color={colors.gray[600]}>
          Hand-picked profiles for discerning tastes
        </TextLocal>
      </View>

      <FlatList
        data={escorts}
        ItemSeparatorComponent={() => (
          <View style={{ height: spacing[4] }}></View>
        )}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        style={styles.flatList}
      />

      <Button title="View All Companions" rounded="full" onPress={onViewMore} />
    </View>
  );
}
