import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { AppTitle } from "../StyledText";
import MovieService from "@/services/MovieService";
import { useQuery } from "@tanstack/react-query";
import Space from "@/constants/Space";
import TopRatedList from "./TopRatedList";

import Colors from "@/constants/Colors";
import { ReactQueryConfig } from "@/constants/Config";
import Loading from "../Loading";
import Empty from "../Empty";

const TopRated = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getListTopRated"],
    queryFn: MovieService.getListTopRated,
    staleTime: ReactQueryConfig.staleTime * 10,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {data ? (
        <>
          <AppTitle>Top Rated</AppTitle>
          <TopRatedList data={data.results} />
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

export default TopRated;
