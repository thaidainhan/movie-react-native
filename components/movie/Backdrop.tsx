import Colors from "@/constants/Colors";
import { IconSize } from "@/constants/Size";
import Space from "@/constants/Space";
import { getImageUrl } from "@/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useRef } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";

type Props = {
  image_url: string;
  home_url: string;
  youtube_key: string;
};
const Backdrop = (props: Props) => {
  const goToExternalLink = () => {
    if (props.home_url) {
      WebBrowser.openBrowserAsync(props.home_url);
    }
    if (props.youtube_key) {
      const ytb_url = `https://www.youtube.com/watch?v=${props.youtube_key}`;
      WebBrowser.openBrowserAsync(ytb_url);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: getImageUrl(props.image_url),
        }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button_wrap} onPress={goToExternalLink}>
        <Ionicons name="play" size={IconSize.XXXL} style={styles.icon_play} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 400,
    objectFit: "cover",
  },
  button_wrap: {
    alignSelf: "center",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    zIndex: 1,
    backgroundColor: Colors.Orange,
  },
  icon_play: {
    color: Colors.White,
  },
  hidden: {
    display: "none",
  },
});

export default Backdrop;
