import { defineConfig } from "orval";

// TODO:
// https://orval.dev/reference/configuration/hooks
// https://qiita.com/yassii_dev/items/619b5d7542e4b78d786a

export default defineConfig({
  usersApi: {
    input: "./openapi/users.yaml",
    output: {
      target: "./src/orval/users.ts",
      client: "swr",
      httpClient: "fetch",
      baseUrl: "/api",
      mock: true,
      clean: true,
    },
  },
  todosApi: {
    input: "./openapi/todos.yaml",
    output: {
      target: "./src/orval/todos.ts",
      client: "swr",
      httpClient: "fetch",
      baseUrl: "/api",
      mock: true,
      clean: true,
    },
  },
});
