import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ThemedText } from "../Themed";
import type { MovieType } from "@/types/MovieType";
import { useRouter } from "expo-router";
import GenreItem from "./GenreItem";
import RelatedItem from "./RelatedItem";
import { AppSubTitle } from "../StyledText";
import Space from "@/constants/Space";
import { TextSize } from "@/constants/Size";

type Props = {
  data: MovieType[];
};
const RelatedList = (props: Props) => {
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
    return <RelatedItem item={item} onPress={goToMovieScreen} />;
  };

  return (
    <View style={styles.container}>
      <AppSubTitle size={TextSize.L}>Related</AppSubTitle>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item: MovieType) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: Space.VerticalGap.M,
    display: "flex",
    flexDirection: "column",
  },
});

export default RelatedList;
