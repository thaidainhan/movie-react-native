import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Button,
} from "react-native";
import { AppSubTitle, AppText, AppTitle } from "../StyledText";
import { ActorType, MovieDetailsType, ReviewType } from "@/types/MovieType";
import { ThemedText } from "../Themed";
import Space from "@/constants/Space";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { IconSize } from "@/constants/Size";
import ThemeContext from "@/context/ThemeContext";
import { ThemeEnum } from "@/enums/ThemeEnum";
import Divider from "../Divider";
import GenreList from "./GenreList";
import ActorList from "./ActorList";
import CountryList from "./CountryList";
import ReviewList from "./ReviewList";
import { MaterialIcons } from "@expo/vector-icons";
import { FavoriteType } from "@/types/AccountType";
import { useMutation } from "@tanstack/react-query";
import AccountService from "@/services/AccountService";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import { AxiosError } from "axios";
import { getErrorMessage } from "@/utils";
import AccountContext from "@/context/AccountContext";

type Props = {
  item: MovieDetailsType;
  actors: ActorType[];
  reviews: ReviewType[];
};

const AboutMovie = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const color = theme === ThemeEnum.Dark ? Colors.White : Colors.Grey;

  const { account } = useContext(AccountContext);

  // const AddFavorite = useMutation({
  //   mutationKey: ["addFavorite"],
  //   mutationFn: (account_id: string | number) =>
  //     AccountService.addFavorite(account_id), // account_id the same as device_id
  //   onSuccess: (data: FavoriteType) => {

  //     Toast.show({
  //       type: ALERT_TYPE.SUCCESS,
  //       title: "Success",
  //       textBody: "Added this movie to your favorites list!",
  //     });
  //   },
  //   onError: (error) => {

  //     Toast.show({
  //       type: ALERT_TYPE.DANGER,
  //       title: "Error",
  //       textBody: getErrorMessage(error),
  //     });
  //   },
  //   retry: 0,
  // });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AppTitle>{props.item.original_title}</AppTitle>
        {/* <View style={styles.status_wrap}>
          <ThemedText  lightColor={Colors.Green}>
            {props.item.status}
          </ThemedText>
        </View> */}
      </View>

      <View style={styles.wrap}>
        <View style={styles.row}>
          <Ionicons name="time-sharp" size={IconSize.S} color={color} />
          <AppText>{props.item.runtime} minutes</AppText>
        </View>
        <View style={styles.row}>
          <Ionicons name="star-sharp" size={IconSize.S} color={color} />
          <AppText>{props.item.vote_average} (IMDb)</AppText>
        </View>
        {/* {account?.id && (
          <TouchableOpacity
            style={styles.row}
            onPress={() => AddFavorite.mutate(account?.id)}
            disabled={AddFavorite.isPending}
          >
            <Ionicons name="heart" size={IconSize.L} color={Colors.Red} />
            <AppText>Favorite</AppText>
          </TouchableOpacity>
        )} */}
      </View>
      <Divider />

      <View style={styles.wrap}>
        <View style={styles.column}>
          <AppSubTitle style={styles.title}>Release date:</AppSubTitle>
          <AppText>{props.item.release_date}</AppText>
        </View>
        <View style={styles.column}>
          <AppSubTitle style={styles.title}>Genre:</AppSubTitle>
          <GenreList data={props.item.genres} />
        </View>
      </View>
      <View style={styles.column}>
        <AppSubTitle style={styles.title}>
          {props.item.production_countries.length > 1
            ? "Countries:"
            : "Country:"}
        </AppSubTitle>
        <CountryList data={props.item.production_countries} />
      </View>
      <View style={styles.column}>
        <AppSubTitle style={styles.title}>Actors:</AppSubTitle>
        <ActorList data={props.actors} />
      </View>
      <Divider />
      <View style={styles.column}>
        <AppSubTitle style={styles.title}>Overview:</AppSubTitle>
        <AppText numberOfLines={8} ellipsizeMode="tail">
          {props.item.overview}
        </AppText>
      </View>

      <View style={styles.column}>
        <View style={styles.row}>
          <MaterialIcons name="reviews" size={IconSize.M} color="black" />
          <AppSubTitle style={styles.title}>Reviews:</AppSubTitle>
        </View>

        <ReviewList data={props.reviews} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: Space.VerticalGap.M,
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
  },
  wrap: {
    gap: Space.HorizontalGap.XL,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: Space.HorizontalGap.S,
  },

  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: Space.HorizontalGap.L,
  },
  status_wrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderColor: Colors.Grey,
    borderStyle: "solid",
    borderWidth: 0.1,
  },
  title: {
    fontWeight: "500",
  },
});
export default AboutMovie;
