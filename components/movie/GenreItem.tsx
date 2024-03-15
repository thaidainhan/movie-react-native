import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { ThemedText } from "../Themed";
import Space from "@/constants/Space";
import type { GenreType, MovieType } from "@/types/MovieType";
import { getImageUrl } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { IconSize } from "@/constants/Size";
import { AppSubTitle, AppText, MonoText } from "../StyledText";
import Colors from "@/constants/Colors";

type Props = {
  item: GenreType;
  onPress: Function;
};
const GenreItem = (props: Props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => props.onPress(props.item.id)}
        style={styles.button_wrap}
      >
        <AppText>{props.item.name}</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: Space.ItemMarginRight,
    textAlign: "center",
  },

  button_wrap: {
    gap: Space.ItemVerticalGap,
    borderWidth: 0.5,
    borderRadius: 8,
    width: "auto",
    paddingHorizontal: Space.HorizontalPadding.M,
    paddingVertical: Space.VerticalPadding.S,
    display: "flex",
    alignItems: "center",
  },
});

export default GenreItem;
