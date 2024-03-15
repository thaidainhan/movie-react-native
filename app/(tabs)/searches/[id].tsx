import React from "react";
import { AppSubTitle, AppTitle } from "@/components/StyledText";
import ScreenProvider from "@/components/providers/ScreenProvider";
import SearchBar from "@/components/searches/SearchBar";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Keyboard,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import MovieService from "@/services/MovieService";
import GenreList from "@/components/searches/GenreList";
import MovieList from "@/components/searches/MovieList";
import { GenreType, MovieType } from "@/types/MovieType";
import { ReactQueryConfig } from "@/constants/Config";
import AutocompleteInput from "react-native-autocomplete-input";
import { router, useLocalSearchParams } from "expo-router";
import Space from "@/constants/Space";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Loading from "@/components/Loading";
import Empty from "@/components/Empty";

const DEFAULT_GENRE_ID: number = 28;

type ParamsType = {
  id: string;
};

export default function SearchesScreen() {
  const { id } = useLocalSearchParams<ParamsType>();

  const [searchPhrase, setSearchPhrase] = React.useState("");
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [genreId, setGenreId] = React.useState<number>(DEFAULT_GENRE_ID);

  React.useEffect(() => {
    if (id) {
      setGenreId(Number(id));
    } else {
      setGenreId(DEFAULT_GENRE_ID);
    }
  }, [id]);

  const ListGenre = useQuery({
    queryKey: ["getListGenre"],
    queryFn: MovieService.getListGenre,
    staleTime: ReactQueryConfig.staleTime * 100,
    select: (data) => {
      if (genreId) {
        const index = data.genres.findIndex((item) => item.id === genreId);

        let newData: GenreType[] = [...data.genres];

        let temp = newData[0];
        newData[0] = newData[index];
        newData[index] = temp;

        return (data = {
          ...data,
          genres: newData,
        });
      } else {
        return data;
      }
    },
  });

  const ListSearchByGenre = useQuery({
    queryKey: ["getListSearchByGenre", { genreId }],
    queryFn: () => MovieService.getListSearchByGenre(genreId.toString()),
    staleTime: ReactQueryConfig.staleTime * 2,
  });

  // const ListSearchByKeyword = useQuery({
  //   queryKey: ["getListSearchByKeyword", { searchPhrase }],
  //   queryFn: () => MovieService.getListSearchByKeyword(searchPhrase),
  //   staleTime: ReactQueryConfig.staleTime * 2,
  // });

  if (ListSearchByGenre.isLoading) {
    return <Loading />;
  }

  return (
    <ScreenProvider>
      {/* <AppTitle>Find Movies, Genres And More...</AppTitle> */}
      {/* 
      <SearchBar
        clicked={clicked}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}
        searchPhrase={searchPhrase}
      /> */}

      {/*  */}

      {/* <View style={styles.autocompleteContainer}>
        <AutocompleteInput
          data={ListSearchByKeyword.data?.results || []}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          autoFocus
          flatListProps={{
            keyExtractor: (item) => item.id.toString(),
            renderItem: ({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => goToMovieScreen(item.id.toString())}
                >
                  <AppSubTitle>{item.name}</AppSubTitle>
                </TouchableOpacity>
              );
            },
          }}
        />
      </View> */}

      <GenreList
        data={ListGenre.data?.genres || []}
        setGenreId={setGenreId}
        genreId={genreId}
      />
      {Number(ListSearchByGenre.data?.total_results) > 0 ? (
        <MovieList data={ListSearchByGenre.data?.results || []} />
      ) : (
        <Empty />
      )}
    </ScreenProvider>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    paddingHorizontal: Space.HorizontalPadding.M,
    paddingVertical: Space.VerticalPadding.S,
  },
  autocompleteContainer: {
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  },
});
