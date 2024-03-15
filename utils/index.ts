import { AxiosError } from "axios";

export const getImageUrl = (path: string) => {
  const url = process.env.EXPO_PUBLIC_IMAGE_URL + path;
  return url;
};

export const getErrorMessage = (error: AxiosError | any) => {
  const message =
    error.response?.data?.status_message ||
    error.response?.data?.message ||
    "Something went wrong, please try again";

  return message;
};

export const getYearByFullDate = (date: string) => {
  const year = date.substring(0, 4);
  return year;
};
