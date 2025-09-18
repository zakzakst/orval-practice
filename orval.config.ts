import { defineConfig } from "orval";

// TODO:
// https://zenn.dev/teamlab_fe/articles/b895776223a3b2
// https://github.com/orval-labs/orval/blob/master/samples/react-query/custom-fetch/src/custom-fetch.ts

export default defineConfig({
  users: {
    input: "./openapi/users.yaml",
    output: {
      target: "./src/orval/users.ts",
      client: "swr",
      httpClient: "fetch",
      baseUrl: "/api",
      mock: true,
      // clean: true,
      override: {
        operations: {
          getUsers: {
            mutator: {
              path: "./openapi/custom-fetch.ts",
              name: "customFetch",
            },
          },
        },
        // mutator: {
        //   path: "./openapi/custom-fetch.ts",
        //   name: "customFetch",
        // },
      },
    },
    hooks: {
      afterAllFilesWrite: "npm run lint",
    },
  },
  todos: {
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
  schedules: {
    // input: "./openapi/schedules.yaml",
    input: {
      target: "./openapi/schedules.yaml",
      filters: {
        mode: "exclude",
        tags: ["exclude-orval"],
      },
    },
    output: {
      target: "./src/orval/schedules.ts",
      client: "swr",
      httpClient: "fetch",
      baseUrl: "/api",
      mock: true,
      // clean: true,
      override: {
        operations: {
          updateSchedule: {
            // transformer: () => {
            //   return {};
            // },
            // mutator: {
            //   path: "./openapi/custom-fetch2.ts",
            //   name: "customPutFetch",
            // },
          },
        },
      },
    },
    hooks: {
      afterAllFilesWrite: "npm run lint",
    },
  },
});
