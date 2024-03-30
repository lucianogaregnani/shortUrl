import { UserLogin } from "../types/User";
import { axiosInstance } from "./axios";

export const authApi = {
  login: async ({ email, password }: UserLogin) => {
    const { data } = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    return data;
  },
  register: async ({ email, password }: UserLogin) => {
    const { data } = await axiosInstance.post("/auth/register", {
      email,
      password,
    });

    return data;
  },
  refreshToken: async () => {
    const { data } = await axiosInstance.get("/auth/refresh");

    return data;
  },
};
