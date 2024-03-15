import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { ThemedText } from "../Themed";
import Space from "@/constants/Space";
import type { ActorType, GenreType, MovieType } from "@/types/MovieType";
import { getImageUrl } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { IconSize } from "@/constants/Size";
import { AppSubTitle, AppText, MonoText } from "../StyledText";
import Colors from "@/constants/Colors";
import Avatar from "../Avatar";

type Props = {
  item: ActorType;
  onPress: Function;
};
const ActorItem = (props: Props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        // onPress={() => props.onPress(props.item.id)}
        style={styles.button_wrap}
      >
        <Avatar
          path={props.item.profile_path}
          width={84}
          height={124}
          objectFit="cover"
        />
        <AppText>{props.item.original_name || props.item.name}</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: Space.ItemMarginRight,
    textAlign: "center",
  },

  button_wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: Space.VerticalGap.S,
  },
});

export default ActorItem;
