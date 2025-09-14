import { defineConfig } from "orval";

// TODO:
// https://zenn.dev/teamlab_fe/articles/b895776223a3b2
// https://github.com/orval-labs/orval/blob/master/samples/react-query/custom-fetch/src/custom-fetch.ts

export default defineConfig({
  usersApi: {
    input: "./openapi/users.yaml",
    output: {
      target: "./src/orval/users.ts",
      client: "swr",
      httpClient: "fetch",
      baseUrl: "/api",
      mock: true,
      // clean: true,
    },
    hooks: {
      afterAllFilesWrite: "npm run lint",
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
      // clean: true,
    },
    hooks: {
      afterAllFilesWrite: "npm run lint",
    },
  },
});
