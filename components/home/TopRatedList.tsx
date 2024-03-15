import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TopRatedItem from "./TopRatedItem";
import { ThemedText } from "../Themed";
import type { MovieType } from "@/types/MovieType";
import {  router } from "expo-router";

type Props = {
  data: MovieType[];
};
const TopRatedList = (props: Props) => {
  const goToMovieScreen = (id: string) => {
    router.navigate({
      pathname: "movie/[id]",
      params: {
        id,
      }
    })
   
  };
  const renderItem = ({ item }: { item: MovieType }) => {
    return <TopRatedItem item={item} onPress={goToMovieScreen} />;
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item: MovieType) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default TopRatedList;
