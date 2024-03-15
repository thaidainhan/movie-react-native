import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ThemedText } from "../Themed";
import { useRouter } from "expo-router";
import { AppSubTitle } from "../StyledText";
import Space from "@/constants/Space";
import { TextSize } from "@/constants/Size";
import type { ReviewType } from "@/types/MovieType";
import ReviewItem from "./ReviewItem";
import { openBrowserAsync } from "expo-web-browser";

type Props = {
  data: ReviewType[];
};
const ReviewList = (props: Props) => {
  const router = useRouter();

  const goToReview = (url: string) => {
    openBrowserAsync(url);
  };

  const renderItem = ({ item }: { item: ReviewType }) => {
    return <ReviewItem item={item} onPress={goToReview} />;
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item: ReviewType) => item.id.toString()}
      showsVerticalScrollIndicator
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({});

export default ReviewList;
