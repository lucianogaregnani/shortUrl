/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "../services/axios";
import getHeaders from "../utils/getHeaders";

interface AxiosHookResponse<T> {
  data: T | undefined;
  error: string;
  isLoading: boolean;
}

function useFetch<T>(params: AxiosRequestConfig): AxiosHookResponse<T> {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<T | undefined>(undefined);
  const { accesToken } = useAuth();

  useEffect(() => {
    if (accesToken) {
      axiosInstance
        .request({
          ...params,
          ...getHeaders(accesToken),
        })
        .then((res) => setData(res.data))
        .catch((err) => setError(err.response.data))
        .finally(() => setIsLoading(false));
    }
  }, [accesToken]);

  return { isLoading, error, data };
}

export default useFetch;
