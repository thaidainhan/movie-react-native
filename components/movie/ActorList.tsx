import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ThemedText } from "../Themed";
import type { ActorType, MovieType } from "@/types/MovieType";
import { useRouter } from "expo-router";
import GenreItem from "./GenreItem";
import ActorItem from "./ActorItem";

type Props = {
  data: ActorType[];
};
const ActorList = (props: Props) => {
  const router = useRouter();

  const goToMovieScreen = (id: string) => {
    router.navigate({
      pathname: "movie/[id]",
      params: {
        id,
      },
    });
  };

  const renderItem = ({ item }: { item: ActorType }) => {
    return <ActorItem item={item} onPress={goToMovieScreen} />;
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item: ActorType) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ActorList;
