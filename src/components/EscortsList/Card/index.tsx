import { colors } from "@/src/styles/colors";
import { typography } from "@/src/styles/typography";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { TEscort } from "..";
import Badges from "../../ui/Badges";
import Button from "../../ui/Button";
import TextLocal from "../../ui/Text";
import { styles } from "./styles";

interface ICard {
  item: TEscort;
}

export default function Card({ item }: ICard) {
  const onSelected = () => {
    router.navigate(`/profile/${item.id}`);
  };

  return (
    <TouchableOpacity
      onPress={onSelected}
      activeOpacity={0.7}
      style={styles.card}
    >
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: item.avatar }}
        contentFit="cover"
        transition={1000}
        accessibilityLabel={item.name}
        accessible
        enforceEarlyResizing
      >
        <LinearGradient
          colors={[`${colors.gray[600]}` + "30", `${colors.gray[800]}` + "80"]}
          style={styles.linearGradient}
        >
          <View style={styles.badgesContainer}>
            {item.isNew && <Badges text="NEW" color={colors.blue[500]} />}
            {item.isVip && (
              <Badges
                text="VIP"
                color={[colors.amber[500], colors.amber[600]]}
              />
            )}
            {item.isVerified && (
              <Badges
                text="Verified"
                color={colors.primary}
                icon="shield-checkmark-outline"
              />
            )}
          </View>

          <View style={styles.primaryInfoContainer}>
            <View>
              <TextLocal variant="titleMd" color={colors.white}>
                {item.name}, {item.age}
              </TextLocal>

              <View style={styles.primaryInfo}>
                <Ionicons
                  name="location-outline"
                  color={colors.white}
                  size={typography.sizes.sm}
                />
                <TextLocal variant="bodySm" color={colors.gray[200]}>
                  {item.location}
                </TextLocal>
              </View>
            </View>

            <View style={styles.primaryInfoRating}>
              <Ionicons
                name="star"
                size={typography.sizes.sm}
                color={colors.yellow[400]}
              />
              <TextLocal variant="bodySm" bold color={colors.gray[200]}>
                {item.rating}
              </TextLocal>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.secondaryInfo}>
        <View style={styles.secondaryInfoHour}>
          <TextLocal variant="bodySm" color={colors.gray[600]}>
            Hourly Rate
          </TextLocal>
          <TextLocal variant="titleMd">${item.hourlyRate}</TextLocal>
        </View>

        <Button
          title="View Profile"
          variant="outline"
          accessibilityLabel="View Profile"
          onPress={onSelected}
        ></Button>
      </View>
    </TouchableOpacity>
  );
}
