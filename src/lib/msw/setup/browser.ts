import { setupWorker } from "msw/browser";
import { getUsersAPIMock } from "@/orval/users";

export const worker = setupWorker(...getUsersAPIMock())