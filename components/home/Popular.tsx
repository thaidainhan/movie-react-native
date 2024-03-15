import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import PopularList from "./PopularList";
import { AppTitle } from "../StyledText";
import { useQuery } from "@tanstack/react-query";
import MovieService from "@/services/MovieService";
import Space from "@/constants/Space";
import Colors from "@/constants/Colors";
import { ReactQueryConfig } from "@/constants/Config";
import Loading from "../Loading";
import Empty from "../Empty";

const Popular = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getListPopular"],
    queryFn: MovieService.getListPopular,
    staleTime: ReactQueryConfig.staleTime * 10,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {data ? (
        <>
          <AppTitle>Popular</AppTitle>
          <PopularList data={data.results} />
        </>
      ) : (
        <Empty />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: Space.VerticalGap.M,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default Popular;
