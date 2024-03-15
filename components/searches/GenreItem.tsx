import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { ThemedText } from "../Themed";
import Space from "@/constants/Space";
import type { GenreType, MovieType } from "@/types/MovieType";
import { getImageUrl } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { IconSize } from "@/constants/Size";
import { AppSubTitle, AppText, AppTitle, MonoText } from "../StyledText";
import Colors from "@/constants/Colors";

type Props = {
  item: GenreType;
  genreId: number;
  onPress: (id: number) => void;
};
const GenreItem = (props: Props) => {
  const isActived = props.genreId === props.item.id;

  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => props.onPress(props.item.id)}
        style={styles.button_wrap}
      >
        <AppSubTitle style={isActived ? styles.actived_title : styles.title}>
          {props.item.name}
        </AppSubTitle>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: Space.ItemMarginRight,
    textAlign: "center",
  },

  title: {},

  actived_title: {
    color: Colors.Orange,
    fontWeight: "bold",
    opacity: 1,

    textShadowColor: Colors.Orange,
    textShadowRadius: 40,
  },

  button_wrap: {
    gap: Space.ItemVerticalGap,
    width: "auto",
    paddingHorizontal: Space.HorizontalPadding.M,
    paddingVertical: Space.VerticalPadding.S,
    display: "flex",
    alignItems: "center",
  },
});

export default GenreItem;
