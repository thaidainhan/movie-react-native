import Loading from "@/components/Loading";
import AboutMovie from "@/components/movie/AboutMovie";
import Backdrop from "@/components/movie/Backdrop";
import RelatedList from "@/components/movie/RelatedList";

import ScreenProvider from "@/components/providers/ScreenProvider";
import Space from "@/constants/Space";
import AccountService from "@/services/AccountService";
import MovieService from "@/services/MovieService";
import { FavoriteType } from "@/types/AccountType";
import { getErrorMessage } from "@/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useLocalSearchParams } from "expo-router";
import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

type ParamsType = {
  id: string;
};

const MovieScreen = () => {
  const { id } = useLocalSearchParams<ParamsType>();

  const Movie = useQuery({
    queryKey: ["getListPopular", { id }],
    queryFn: () => MovieService.getMovie(id.toString()),
  });

  const Actors = useQuery({
    queryKey: ["getListActor", { id }],
    queryFn: () => MovieService.getListActor(id.toString()),
  });

  const ListRelated = useQuery({
    queryKey: ["getListRelated", { id }],
    queryFn: () => MovieService.getListRelated(id.toString()),
  });

  const ListReview = useQuery({
    queryKey: ["getListReview", { id }],
    queryFn: () => MovieService.getListReview(id.toString()),
  });

  if (Movie.isLoading) {
    return <Loading />;
  }

  return (
    <ScreenProvider isPaddingHorizontal={false}>
      {Movie.data && (
        <>
          <Backdrop
            image_url={Movie.data.backdrop_path || Movie.data.poster_path}
            home_url={Movie.data.homepage}
            youtube_key={Movie.data.videos.results[0].key}
          />
          <View style={styles.wrap}>
            <AboutMovie
              item={Movie.data}
              actors={Actors.data?.cast || []}
              reviews={ListReview.data?.results || []}
            />

            {ListRelated.data && (
              <RelatedList data={ListRelated.data.results} />
            )}
          </View>
        </>
      )}
    </ScreenProvider>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: Space.ScreenPadding.Horizontal,
    gap: Space.VerticalGap.XL,
  },
});

export default MovieScreen;
