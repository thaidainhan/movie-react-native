import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ThemedText } from "../Themed";
import { useRouter } from "expo-router";
import { AppSubTitle } from "../StyledText";
import Space from "@/constants/Space";
import { TextSize } from "@/constants/Size";
import type { GenreType } from "@/types/MovieType";
import { openBrowserAsync } from "expo-web-browser";
import GenreItem from "./GenreItem";

type Props = {
  data: GenreType[];
  genreId: number;
  setGenreId: (id: number) => void;
};
const GenreList = (props: Props) => {
  const router = useRouter();

  const renderItem = ({ item }: { item: GenreType }) => {
    return <GenreItem genreId={props.genreId} item={item} onPress={props.setGenreId} />;
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item: GenreType) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({});

export default GenreList;
