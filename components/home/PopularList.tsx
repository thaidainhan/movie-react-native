import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import NowShowingItem from "./TopRatedItem";
import { ThemedText } from "../Themed";
import type { MovieType } from "@/types/MovieType";
import PopularItem from "./PopularItem";
import { useRouter } from "expo-router";

type Props = {
  data: MovieType[];
};
const PopularList = (props: Props) => {
  const router = useRouter();

  const goToMovieScreen = (id: string) => {
    router.navigate({
      pathname: "movie/[id]",
      params: {
        id,
      },
    });
  };

  const renderItem = ({ item }: { item: MovieType }) => {
    return <PopularItem item={item} onPress={goToMovieScreen} />;
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

export default PopularList;
