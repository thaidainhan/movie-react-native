import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { ThemedText } from "../Themed";
import Space from "@/constants/Space";
import type {
  GenreType,
  MovieType,
  ProductionCountryType,
} from "@/types/MovieType";
import { getImageUrl } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { IconSize } from "@/constants/Size";
import { AppSubTitle, AppText, AppTitle, MonoText } from "../StyledText";
import Colors from "@/constants/Colors";

type Props = {
  item: ProductionCountryType;
  onPress: Function;
};
const CountryItem = (props: Props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        // onPress={() => props.onPress(props.item.id)}
        style={styles.button_wrap}
      >
        <AppText >{props.item.name}</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: Space.ItemMarginRight,
    textAlign: "auto",
  },

  button_wrap: {
    gap: Space.ItemVerticalGap,
  },
});

export default CountryItem;
