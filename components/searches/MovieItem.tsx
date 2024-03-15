import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { ThemedText } from "../Themed";
import Space from "@/constants/Space";
import type { GenreType, MovieType } from "@/types/MovieType";
import { getImageUrl, getYearByFullDate } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { IconSize } from "@/constants/Size";
import { AppSubTitle, AppText, AppTitle, MonoText } from "../StyledText";
import Colors from "@/constants/Colors";

type Props = {
  item: MovieType;
  onPress: (id: number) => void;
};
const MovieItem = (props: Props) => {
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
        <View style={styles.row}>
          <AppSubTitle>{props.item.title}</AppSubTitle>
          <AppText>({getYearByFullDate(props.item.release_date)})</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: Space.ItemMarginRight,
    textAlign: "center",
    display: "flex",
    width: "100%",
    flex: 1 / 2,
  },
  image: {
    width: "100%",
    height: 170,
    borderRadius: 16,
    objectFit: "cover",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    flexWrap: "wrap",
    gap: Space.HorizontalGap.S
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

export default MovieItem;
