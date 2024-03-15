import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { ThemedText } from "../Themed";
import { useRouter } from "expo-router";
import { AppSubTitle } from "../StyledText";
import Space from "@/constants/Space";
import { TextSize } from "@/constants/Size";
import type { GenreType, MovieType } from "@/types/MovieType";
import MovieItem from "./MovieItem";

type Props = {
  data: MovieType[];
};
const MovieList = (props: Props) => {
  const router = useRouter();

  const goToMovieScreen = (id: number) => {
    router.navigate({
      pathname: "movie/[id]",
      params: {
        id,
      },
    });
  };

  const renderItem = ({ item }: { item: MovieType }) => {
    return <MovieItem item={item} onPress={goToMovieScreen} />;
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item: MovieType) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});

export default MovieList;
