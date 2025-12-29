import EscortsList from "@/src/components/EscortsList";
import { ScrollView, View } from "react-native";
import ExploreCategories from "./components/ExploreCategories";
import ExploreVideos from "./components/ExploreVideos";
import HeroSearch from "./components/HeroSearch";
import { styles } from "./styles";

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      {/* <Header /> */}

      <ScrollView>
        <HeroSearch />
        <ExploreCategories />
        <EscortsList />
        <ExploreVideos />
      </ScrollView>
    </View>
  );
}
