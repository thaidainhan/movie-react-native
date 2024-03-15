import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ThemedText } from "../Themed";
import { useRouter } from "expo-router";
import { AppSubTitle } from "../StyledText";
import Space from "@/constants/Space";
import { TextSize } from "@/constants/Size";
import type { ProductionCountryType } from "@/types/MovieType";
import CountryItem from "./CountryItem";

type Props = {
  data: ProductionCountryType[];
};
const CountryList = (props: Props) => {
  const router = useRouter();

  const goToMovieScreen = (id: string) => {
    router.navigate({
      pathname: "movie/[id]",
      params: {
        id,
      },
    });
  };

  const renderItem = ({ item }: { item: ProductionCountryType }) => {
    return <CountryItem item={item} onPress={goToMovieScreen} />;
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item: ProductionCountryType) =>
        item.name.toString() + Date.now()
      }
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CountryList;
