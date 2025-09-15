"use client";

import type { RequestHandler } from "msw";
import { getApiMock as getTodosApiMock } from "@/orval/todos";
import { getApiMock as getUsersApiMock } from "@/orval/users";
import { getApiMock as getSchedulesApiMock } from "@/orval/schedules";

export const handlers: RequestHandler[] = [
  ...getTodosApiMock(),
  ...getUsersApiMock(),
  ...getSchedulesApiMock(),
];
