// NOTE: サーバーサイドでorvalのモックを利用しようとするとエラーが出る。サーバーサイドで利用したいAPIはorvalでmockをtrueにせず、レスポンス型などはimportして作成する
import type { RequestHandler } from "msw";
import { getPostBigSiteMockHandler } from "@/orval/big-site";
import { PostBigSiteResponseMock } from "../../../../openapi/mock/big-site";

export const handlers: RequestHandler[] = [
  getPostBigSiteMockHandler(PostBigSiteResponseMock),
];
