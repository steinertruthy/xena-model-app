import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";
import Select, { IOption } from "@/src/components/ui/Select";
import Separator from "@/src/components/ui/Separator";
import { genders } from "@/src/mocks/genders";
import { View } from "react-native";
import { styles } from "./styles";

export default function Search() {
  const onSelected = (data?: IOption) => {
    console.log("onSelected", data);
  };

  const onSearch = () => {
    console.log("onSearch");
  };

  return (
    <View style={styles.search}>
      <Input placeholder="Search by name, category or services..." />
      <Select
        options={genders.map((gender) => {
          return {
            value: gender.id,
            label: gender.name,
          };
        })}
        maxShowVisible={5}
        placeholder="Gender"
        onSelected={onSelected}
      />
      <Select
        options={genders.map((gender) => {
          return {
            value: gender.id,
            label: gender.name,
          };
        })}
        maxShowVisible={5}
        placeholder="Gender"
        onSelected={onSelected}
      />
      <Select
        options={genders.map((gender) => {
          return {
            value: gender.id,
            label: gender.name,
          };
        })}
        maxShowVisible={5}
        placeholder="Gender"
        onSelected={onSelected}
      />

      <Separator />

      <Button leftIcon="search" title="Find Now" onPress={onSearch} />
    </View>
  );
}
