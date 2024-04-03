import getHeaders from "../utils/getHeaders";
import { axiosInstance } from "./axios";

export const linkApi = {
  getAll: async (token: string) => {
    const { data } = await axiosInstance.get("/link", getHeaders(token));

    return data;
  },
  getByShortLink: async (shortLink: string) => {
    const { data } = await axiosInstance.get(`/link/${shortLink}`);

    return data;
  },
  update: async (token: string, linkId: string, longLink: string) => {
    const { data } = await axiosInstance.patch(
      `/link/${linkId}`,
      {
        longLink,
      },
      getHeaders(token)
    );

    return data;
  },
  create: async (token: string, longLink: string) => {
    const { data } = await axiosInstance.post(
      "/link",
      {
        longLink,
      },
      getHeaders(token)
    );

    return data;
  },
  remove: async (token: string, linkId: string) => {
    const { data } = await axiosInstance.delete(
      `/link/${linkId}`,
      getHeaders(token)
    );

    return data;
  },
};
