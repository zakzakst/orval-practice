export const getSchedulesMockFetcher = <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  console.log(`get: ${url}`);
  return Promise.resolve({ message: "getSchedulesMockFetcher成功" } as T);
  return Promise.reject({ message: "getSchedulesMockFetcher失敗" } as T);
};
