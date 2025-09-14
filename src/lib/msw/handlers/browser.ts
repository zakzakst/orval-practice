"use client";

import type { RequestHandler } from "msw";
import { getTodosAPIMock } from "@/orval/todos";
import { getUsersAPIMock } from "@/orval/users";

export const handlers: RequestHandler[] = [
  ...getTodosAPIMock(),
  ...getUsersAPIMock(),
];
