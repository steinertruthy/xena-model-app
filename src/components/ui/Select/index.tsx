import { colors } from "@/src/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
} from "react-native";
import Separator from "../Separator";
import TextLocal from "../Text";
import { styles } from "./styles";

export interface IOption {
  value: string;
  label: string;
}

interface ISelect {
  options: IOption[];
  placeholder?: string;
  maxShowVisible?: number;
  enabledDefault?: boolean;
  onSelected: (option: IOption | undefined) => void;
}

export default function Select({
  options,
  placeholder = "Select",
  maxShowVisible = 5,
  enabledDefault = true,
  onSelected,
}: ISelect) {
  const [optionsList, setOptionsList] = useState<IOption[]>([]);
  const [showList, setShowList] = useState(false);
  const [optionSelected, setOptionSelected] = useState<IOption>();

  const itemHeight = 38.1;
  const lineHeight = Math.min(
    options.length * itemHeight,
    itemHeight * maxShowVisible
  );

  useEffect(() => {
    if (enabledDefault) {
      return setOptionsList([
        {
          value: "",
          label: placeholder,
        },
        ...options,
      ]);
    } else {
      setOptionsList(options);
    }
  }, []);

  const Item = (item: { option: IOption }) => {
    const { option } = item;

    const isDefault = option.value === "" && option.label === placeholder;

    return (
      <TouchableOpacity style={styles.listItem} onPress={() => onPress(option)}>
        <TextLocal color={isDefault ? colors.gray[500] : undefined}>
          {option.label}
        </TextLocal>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }: ListRenderItemInfo<IOption>) => {
    return <Item option={item} key={item.value} />;
  };

  const onPress = (option: IOption) => {
    setOptionSelected(option);
    setShowList(false);
    if (!option.value && option.label === placeholder) {
      onSelected(undefined);
    } else {
      onSelected(option);
    }
  };

  return (
    <View style={styles.select}>
      <TouchableOpacity
        style={[
          styles.selectControl,
          ...(showList
            ? [{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }]
            : []),
        ]}
        onPress={() => setShowList((prev) => !prev)}
        activeOpacity={0.8}
      >
        <TextLocal
          variant="bodyMd"
          color={optionSelected ? colors.gray[900] : colors.gray[600]}
        >
          {optionSelected ? optionSelected.label : placeholder}
        </TextLocal>

        {showList ? (
          <Ionicons name="chevron-up" size={16} />
        ) : (
          <Ionicons name="chevron-down" size={16} />
        )}
      </TouchableOpacity>

      {showList && (
        <FlatList
          ItemSeparatorComponent={() => <Separator />}
          data={optionsList.length ? optionsList : options}
          renderItem={renderItem}
          keyExtractor={(item) => item.value}
          style={[{ height: lineHeight }, styles.flatList]}
          extraData={optionSelected?.value}
          scrollEnabled={options.length > maxShowVisible}
        />
      )}
    </View>
  );
}
