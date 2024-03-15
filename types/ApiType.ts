import { AccountType } from "./AccountType";
import { ActorType, GenreType, KeywordType, MovieType, ReviewType } from "./MovieType";

export type ResponseListDataType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
  dates: {
    maximum: string;
    minimum: string;
  };
};

export type ResponseListActorType = {
  id: string;
  cast: ActorType[];
};

export type ResponseListReviewType = {
  id: string;
  page: number;
  results: ReviewType[];
  total_pages: number;
  total_results: number;
};

export type ResponseListFavoriteType = {
  page: number;
  results: MovieType[];
  total_results: number;
  total_pages: number;
};

export type ResponseListGenreType = {
  genres: GenreType[];
};

export type ResponseListSearchByKeyword = {
  page: number;
  results: KeywordType[];
  total_pages: number;
  total_results: number;
};

export type ResponseListSearchByGenre = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};
