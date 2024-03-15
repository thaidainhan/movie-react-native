import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { ThemedText } from "../Themed";
import Space from "@/constants/Space";
import type { GenreType, MovieType, ReviewType } from "@/types/MovieType";
import { getImageUrl } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { IconSize, TextSize } from "@/constants/Size";
import { AppSubTitle, AppText, AppTitle, MonoText } from "../StyledText";
import Colors from "@/constants/Colors";
import Avatar from "../Avatar";
import ReadMore from "react-native-read-more-text";
import moment from "moment";

type Props = {
  item: ReviewType;
  onPress: Function;
};
const ReviewItem = (props: Props) => {
  const renderTruncatedFooter = (handlePress) => {
    return (
      <TouchableOpacity onPress={handlePress}>
        <AppSubTitle lightColor={Colors.Orange}>Read more</AppSubTitle>
      </TouchableOpacity>
    );
  };

  const renderRevealedFooter = (handlePress) => {
    return (
      <TouchableOpacity onPress={handlePress}>
        <AppSubTitle lightColor={Colors.Blue}>Show less</AppSubTitle>
      </TouchableOpacity>
    );
  };

  const handleTextReady = () => {
    // ...
  };

  var UPDATE_AT = moment(props.item.updated_at).format("YYYY-MM-DD");

  return (
    <View style={styles.button_wrap}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => props.onPress(props.item.url)}
      >
        {props.item.author_details.avatar_path && (
          <Avatar
            path={props.item.author_details.avatar_path}
            width={24}
            height={24}
            objectFit={"cover"}
          />
        )}

        <AppSubTitle size={TextSize.M} style={styles.title}>
          {props.item.author} ({UPDATE_AT})
        </AppSubTitle>
      </TouchableOpacity>
      <ReadMore
        numberOfLines={4}
        renderTruncatedFooter={renderTruncatedFooter}
        renderRevealedFooter={renderRevealedFooter}
        onReady={handleTextReady}
      >
        <AppText ellipsizeMode="tail" style={styles.text}>
          {props.item.content}
        </AppText>
      </ReadMore>
    </View>
  );
};

const styles = StyleSheet.create({
  button_wrap: {
    gap: Space.VerticalGap.S,
    marginBottom: Space.ItemMarginBottom,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: Space.HorizontalGap.M,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: Space.HorizontalGap.L,
  },

  title: {
    fontWeight: "400",
  },

  text: {
    fontStyle: "italic",
    width: "auto",
  },
});

export default ReviewItem;
