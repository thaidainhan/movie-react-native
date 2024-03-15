import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { AppTitle } from "./StyledText";
import Colors from "@/constants/Colors";

const Empty = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-8867280-7265556.png?f=webp",
        }}
      />
      <AppTitle lightColor={Colors.Orange}>List Empty</AppTitle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10,
  },
  image: {
    width: 400,
    height: 200,
    objectFit: "contain",
  },
});

export default Empty;
