"use client";

import type { RequestHandler } from "msw";
import { getPostBigSiteMockHandler } from "@/orval/big-site";
import { PostBigSiteResponseMock } from "../mock/big-site";
// import { getApiMock as getTodosApiMock } from "@/orval/todos";
// import { getApiMock as getUsersApiMock } from "@/orval/users";
// import { getApiMock as getSchedulesApiMock } from "@/orval/schedules";

export const handlers: RequestHandler[] = [
  // ...getTodosApiMock(),
  // ...getUsersApiMock(),
  // ...getSchedulesApiMock(),
  // getPostBigSiteMockHandler(PostBigSiteResponseMock),
];
