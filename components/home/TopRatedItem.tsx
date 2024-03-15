import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { ThemedText } from "../Themed";
import Space from "@/constants/Space";
import type { MovieType } from "@/types/MovieType";
import { getImageUrl } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { IconSize, TextSize } from "@/constants/Size";
import { MonoText } from "../StyledText";

type Props = {
  item: MovieType;
  onPress: Function;
};
const UpcomingItem = (props: Props) => {
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

        <View>
          <ThemedText
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.title}
          >
            {props.item.title}
          </ThemedText>
          <View style={styles.vote_wrap}>
            <Ionicons name="star" color={"orange"} size={IconSize.M} />
            <MonoText>{props.item.vote_average} / 10</MonoText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: Space.ItemMarginRight,
    width: 140,
    textAlign: "center",
  },

  button_wrap: {
    gap: Space.ItemVerticalGap,
  },
  vote_wrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: Space.IconHorizontalGap,
  },

  title: {
    fontWeight: "600",
  },

  image: {
    width: "auto",
    height: 240,
    objectFit: "cover",
    borderRadius: 8,
  },
});

export default UpcomingItem;
