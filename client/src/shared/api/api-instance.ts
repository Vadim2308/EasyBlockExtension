import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createInstance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const r = await apiInstance({
    ...config,
    ...options,
  });
  return r.data;
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
