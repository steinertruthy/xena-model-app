import Section from "@/src/components/ui/Section";
import TextLocal from "@/src/components/ui/Text";
import { profiles } from "@/src/mocks/profiles";
import { spacing } from "@/src/styles/spacing";
import { useCallback } from "react";
import { View } from "react-native";
import { style } from "./style";

interface IService {
  profile: (typeof profiles)[0];
}

export default function Service({ profile }: IService) {
  const { services } = profile;

  const renderItem = useCallback((service: (typeof services)[0]) => {
    return (
      <View style={style.serviceItem} key={service}>
        <TextLocal variant="bodySm">{service}</TextLocal>
      </View>
    );
  }, []);

  return (
    <Section title="Services">
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: spacing[2] }}>
        {services.length && services.map((service) => renderItem(service))}
      </View>
    </Section>
  );
}
