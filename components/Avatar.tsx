import { getImageUrl } from "@/utils";
import React from "react";
import { Image } from "react-native";

type Props = {
  path: string;
  width: number;
  height: number;
  objectFit: "cover" | "contain" | "fill" | "scale-down";
};
const Avatar = (props: Props) => {
  return (
    <Image
      source={{
        uri: getImageUrl(props.path),
      }}
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.width / 2,
        objectFit: props.objectFit,
      }}
    />
  );
};

export default Avatar;
