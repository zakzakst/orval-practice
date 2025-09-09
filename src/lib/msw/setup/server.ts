import { setupServer } from 'msw/node';
import { getUsersAPIMock } from "@/orval/users";

export const server = setupServer(...getUsersAPIMock())