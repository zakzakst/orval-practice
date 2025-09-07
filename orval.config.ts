import { defineConfig } from "orval";

// TODO: https://orval.dev/reference/configuration/hooks

export default defineConfig({
  usersApi: {
    input: "./openapi/users.yaml",
    output: {
      target: "./src/api/users.ts",
      client: "swr",
      baseUrl: "/api",
      // mock: true,
    },
  },
  todosApi: {
    input: "./openapi/todos.yaml",
    output: {
      target: "./src/api/todos.ts",
      client: "swr",
      baseUrl: "/api",
      // mock: true,
    },
  },
});
