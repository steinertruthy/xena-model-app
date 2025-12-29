import Avatar from "@/src/components/ui/Avatar";
import Badges from "@/src/components/ui/Badges";
import Section from "@/src/components/ui/Section";
import Separator from "@/src/components/ui/Separator";
import TextLocal from "@/src/components/ui/Text";
import { profiles } from "@/src/mocks/profiles";
import { colors } from "@/src/styles/colors";
import { typography } from "@/src/styles/typography";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { styles } from "./styles";

interface IProfileSummary {
  profile: (typeof profiles)[0];
}

export default function ProfileSummary({ profile }: IProfileSummary) {
  return (
    <View>
      <View>
        <Image source={{ uri: profile.coverPhoto }} style={styles.coverImage} />
        <LinearGradient
          colors={[`${colors.gray[600]}40`, `${colors.gray[800]}90`]}
          style={styles.linearGradient}
        >
          <View style={styles.badgesContainer}>
            {profile.isNew && <Badges text="NEW" color={colors.blue[500]} />}
            {profile.isVip && (
              <Badges
                text="VIP"
                color={[colors.amber[500], colors.amber[600]]}
              />
            )}
            {profile.isVerified && (
              <Badges
                text="Verified"
                color={colors.primary}
                icon="shield-checkmark-outline"
              />
            )}
          </View>
        </LinearGradient>
      </View>

      <View style={styles.content}>
        <View style={styles.avatar}>
          <Avatar
            source={{ uri: profile.avatar }}
            alt={profile.name}
            size="2xl"
          />
        </View>

        <View style={styles.contentBody}>
          <View style={styles.contentMainInfo}>
            <TextLocal variant="titleLg">{profile.name}</TextLocal>

            <View style={styles.meta}>
              <View style={styles.metaItem}>
                <Ionicons name="flame-outline" size={typography.sizes.sm} />
                <TextLocal variant="bodySm">
                  {profile.age} - {profile.gender}
                </TextLocal>
              </View>
              <TextLocal color={colors.gray[400]}>•</TextLocal>
              <View style={styles.metaItem}>
                <Ionicons name="location-outline" size={typography.sizes.sm} />
                <TextLocal variant="bodySm">{profile.location}</TextLocal>
              </View>
            </View>
          </View>

          <View style={styles.ratingContainer}>
            <View style={styles.rating}>
              <Ionicons
                name="star"
                size={typography.sizes.base}
                color={colors.primary}
              />
              <TextLocal>{profile.review.rating}</TextLocal>
            </View>
            <TextLocal variant="caption" color={colors.gray[500]}>
              {profile.review.total} reviews
            </TextLocal>
          </View>
        </View>
      </View>

      <Section style={styles.about}>
        <TextLocal variant="titleMd">About Me</TextLocal>

        <Separator />

        <TextLocal>{profile.bio}</TextLocal>
      </Section>
    </View>
  );
}
