import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ThemedText } from "../Themed";
import type { GenreType, MovieType } from "@/types/MovieType";
import { useRouter } from "expo-router";
import GenreItem from "./GenreItem";

type Props = {
  data: GenreType[];
};
const GenreList = (props: Props) => {
  const router = useRouter();

  const goToMovieScreen = (id: string) => {
    router.navigate({
      pathname: "searches/[id]",
      params: {
        id,
      },
    });
  };

  const renderItem = ({ item }: { item: GenreType }) => {
    return <GenreItem item={item} onPress={goToMovieScreen} />;
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

export default GenreList;
