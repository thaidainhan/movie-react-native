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
  item: MovieType;
  onPress: Function;
};
const RelatedItem = (props: Props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => props.onPress(props.item.id)}
        style={styles.button_wrap}
      >
        <Image
          source={{
            uri: getImageUrl(
              props.item.poster_path || props.item.backdrop_path
            ),
          }}
          style={styles.image}
        />
        <AppSubTitle style={styles.title}>{props.item.title}</AppSubTitle>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: Space.ItemMarginRight,
    textAlign: "auto",
  },

  image: {
    width: 140,
    height: 200,
    borderRadius: 16,
    objectFit: "cover",
  },
  title: {
    width: 140,
    textAlign: "center",
  },

  button_wrap: {
    gap: Space.ItemVerticalGap,
  },
});

export default RelatedItem;
