import { profiles } from "@/src/mocks/profiles";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Gallery from "./components/Gallery";
import ProfileSummary from "./components/ProfileSummary";
import Service from "./components/Services";
import { styles } from "./styles";

export default function ProfileScreen() {
  const { id } = useLocalSearchParams();

  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<(typeof profiles)[0]>();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const profile = profiles.find((profile) => profile.id === id);

    setProfile(profile);
  };

  if (!profile) return;

  return (
    <ScrollView>
      <View style={styles.profile}>
        <ProfileSummary profile={profile} />
        <Gallery profile={profile} />
        <Service profile={profile} />
      </View>
    </ScrollView>
  );
}
