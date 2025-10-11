export type FetcherOptions<TBody = unknown> = {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: TBody;
  headers: Record<string, string>;
  signal?: AbortSignal; // SWR の AbortController に対応
};

export async function customPutFetch<TResponse, TBody = unknown>(
  url: string,
  { method, body, headers = {}, signal }: FetcherOptions<TBody>,
): Promise<TResponse> {
  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    signal,
  });

  if (!res.ok) {
    // エラーレスポンスをパースして投げる
    let error: any;
    try {
      error = await res.json();
    } catch {
      error = { message: res.statusText };
    }
    throw Object.assign(new Error("API Error"), {
      status: res.status,
      data: error,
    });
  }

  // 成功時レスポンスをパース
  return res.json() as Promise<TResponse>;
}
