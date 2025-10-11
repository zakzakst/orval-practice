import type { AxiosResponse } from "axios";

// export const getSchedulesMockFetcher = <T>(
//   url: string,
//   options?: RequestInit
// ): Promise<T> => {
//   console.log(`get: ${url}`);
//   return Promise.resolve({ message: "getSchedulesMockFetcher成功" } as T);
//   return Promise.reject({ message: "getSchedulesMockFetcher失敗" } as T);
// };

export const getSchedulesMockFetcher = <T>(
  url: string,
  _options?: RequestInit,
): Promise<AxiosResponse<T>> => {
  console.log(`get: ${url}`);
  return Promise.resolve({
    data: { message: "getSchedulesMockFetcher成功" },
  } as AxiosResponse<T>);
  return Promise.reject({
    data: { message: "getSchedulesMockFetcher失敗" },
  } as AxiosResponse<T>);
};
