import AxiosInstance from "@/lib/AxiosInstance";
import type {
  ResponseListActorType,
  ResponseListDataType,
  ResponseListGenreType,
  ResponseListReviewType,
  ResponseListSearchByGenre,
  ResponseListSearchByKeyword,
} from "@/types/ApiType";
import { MovieDetailsType } from "@/types/MovieType";
import { AxiosResponse } from "axios";

export default {
  getMovie: async (id: string | number) => {
    const response: AxiosResponse = await AxiosInstance.get(
      `/movie/${id}?append_to_response=videos`
    );

    const data: MovieDetailsType = response.data;
    return data;
  },
  getListTopRated: async () => {
    const page = 1;
    const language = "en-US";
    const response: AxiosResponse = await AxiosInstance.get(
      `/movie/top_rated?language=${language}&page=${page}&include_video=true`
    );
    const data: ResponseListDataType = response.data;
    return data;
  },
  getListPopular: async () => {
    const page = 1;
    const language = "en-US";
    const response: AxiosResponse = await AxiosInstance.get(
      `/movie/popular?language=${language}&page=${page}&include_video=true`
    );
    const data: ResponseListDataType = response.data;
    return data;
  },
  getListRelated: async (id: string | number) => {
    const page = 1;
    const language = "en-US";
    const response: AxiosResponse = await AxiosInstance.get(
      `/movie/${id}/similar?language=${language}&page=${page}`
    );
    const data: ResponseListDataType = response.data;
    return data;
  },
  getListActor: async (id: string | number) => {
    const response: AxiosResponse = await AxiosInstance.get(
      `/movie/${id}/casts`
    );
    const data: ResponseListActorType = response.data;

    return data;
  },
  getListReview: async (id: string | number) => {
    const response: AxiosResponse = await AxiosInstance.get(
      `/movie/${id}/reviews`
    );
    const data: ResponseListReviewType = response.data;

    return data;
  },

  getListGenre: async () => {
    const response: AxiosResponse = await AxiosInstance.get(
      `https://api.themoviedb.org/3/genre/movie/list`
    );
    const data: ResponseListGenreType = response.data;

    return data;
  },
  getListSearchByGenre: async (genreId: string) => {
    if (!genreId) return null;

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;

    const response: AxiosResponse = await AxiosInstance.get(url);

    const data: ResponseListSearchByGenre = response.data;

    return data;
  },
  getListSearchByKeyword: async (query: string) => {
    const page = 1;

    if (!query) return null;

    const response: AxiosResponse = await AxiosInstance.get(
      `https://api.themoviedb.org/3/search/keyword?query=${query}&page=${page}`
    );
   
    const data: ResponseListSearchByKeyword = response.data;

    return data;
  },
};
