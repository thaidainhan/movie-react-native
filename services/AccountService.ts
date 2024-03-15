import AxiosInstance from "@/lib/AxiosInstance";
import { retrieveDeviceId } from "@/lib/Storage";
import { AccountType, FavoriteType } from "@/types/AccountType";
import type { ResponseListFavoriteType } from "@/types/ApiType";
import { AxiosResponse } from "axios";

export default {
  //  createRequestToken: async () => {
  //   const url = `https://api.themoviedb.org/3/authentication/session/new`;

  //   const response: AxiosResponse = await AxiosInstance.post(url, {});

  //   const data = response.data;
  //   return data;
  // },
  // createSession: async () => {
  //   const url = `https://api.themoviedb.org/3/authentication/session/new`;

  //   const response: AxiosResponse = await AxiosInstance.post(url, {});

  //   const data = response.data;
  //   return data;
  // },

  getAccount: async () => {
    const response: AxiosResponse = await AxiosInstance.get(
      `https://api.themoviedb.org/3/account`
    );

    const data: AccountType = response.data;

    return data;
  },

  //   getListFavorite: async (account_id: string | number) => {
  //     const page = 1;
  //     const language = "en-US";
  //     const sort_by = "created_at.asc";
  //     const response: AxiosResponse = await AxiosInstance.get(
  //       `https://api.themoviedb.org/3/account/${account_id}/favorite/movies?language=${language}&page=${page}&sort_by=${sort_by}`
  //     );
  //     const data: ResponseListFavoriteType = response.data;

  //     return data;
  //   },

  //   addFavorite: async (account_id: string | number) => {
  //     const response: AxiosResponse = await AxiosInstance.post(
  //       `https://api.themoviedb.org/3/account/${account_id}/favorite`
  //     );

  //     const data: FavoriteType = response.data;

  //     return data;
  //   },
};
