// NOTE: サーバーサイドでorvalのモックを利用しようとするとエラーが出る。サーバーサイドで利用したいAPIはorvalでmockをtrueにせず、レスポンス型などはimportして作成する
import type { RequestHandler } from "msw";

export const handlers: RequestHandler[] = [];
