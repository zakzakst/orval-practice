// import { NextRequest, NextResponse } from "next/server";
// // import {
// //   GetTodoResponse,
// //   GetTodoErrorBody,
// // } from "@/app/practice/api/todo/type";
// // import { GetTodoResponseMock, GetTodoError404Mock } from "@/mocks/todo";

// // import {
// //   GetTodoResponse,
// //   GetTodoErrorCode,
// // } from "@/app/practice/api/todo/type";
// // import { ApiErrorBody } from "@/app/practice/api";

// // import { Todo } from "@/types/todo";
// // import { ApiErrorBody } from "@/lib/apiError";
// export type ApiErrorBody<ErrorCode> = {
//   message: string;
//   code: ErrorCode;
//   status?: number;
//   details?: unknown;
// };

// export type TodoDoneState = "done" | "wip";

// export type Todo = {
//   id: string;
//   text: string;
//   // 清書の時はstatusにしたい
//   state: TodoDoneState;
//   createdAt: Date;
//   updatedAt: Date | null;
// };

// export type GetTodoParams = {
//   doneState?: boolean;
//   keyword?: string;
//   page?: number;
// };

// export type GetTodoResponse = {
//   // items: TodoItem[];
//   todos: Todo[];
// };

// export const GetTodoErrorCodes = ["GET_TODO_NOT_FOUND"] as const;

// export type GetTodoErrorCode = (typeof GetTodoErrorCodes)[number];

// export type GetTodoErrorBody = ApiErrorBody<GetTodoErrorCode>;

// // export type ApiErrorBody<ErrorCode> = {
// //   message: string;
// //   code: ErrorCode;
// //   status?: number;
// //   details?: unknown;
// // };

// export const GetTodoResponseMock: GetTodoResponse = {
//   todos: [
//     {
//       id: "1",
//       text: "タスク1",
//       state: "done",
//       createdAt: new Date("2024/1/1"),
//       updatedAt: new Date("2024/1/4"),
//     },
//     {
//       id: "2",
//       text: "タスク2",
//       state: "wip",
//       createdAt: new Date("2024/1/1"),
//       updatedAt: null,
//     },
//   ],
// };

// export const GetTodoError404Mock: ApiErrorBody<GetTodoErrorCode> = {
//   code: "GET_TODO_NOT_FOUND",
//   message: "該当するタスクが見つかりませんでした",
// };

// export const GET = async (
//   request: NextRequest
// ): Promise<NextResponse<GetTodoResponse | GetTodoErrorBody>> => {
//   const searchParams = request.nextUrl.searchParams;
//   // NOTE: モックサーバー作る時に便利そうなのでメモしておく
//   // https://shanabrian.com/web/javascript/urlsearchparams.php
//   const keyword = searchParams.get("keyword");
//   if (keyword === "404") {
//     return NextResponse.json(GetTodoError404Mock, { status: 404 });
//   }

//   return NextResponse.json(GetTodoResponseMock);
// };

// import { NextResponse } from 'next/server'
// import type { NextApiRequest, NextApiResponse } from 'next'
// import { getGetTodosResponseMock, GetTodos200 } from '@/orval/todos'

// type ResponseData = {
//   message: string
// }

// export const GET = async (
//   req: NextApiRequest
// ): Promise<NextResponse<GetTodos200>> => {
//   // res.status(200).json({ message: 'Hello from Next.js!' })
//   // return new Response({ test: 'Hello from Next.js!' }, {
//   //   status: 200,
//   //   // headers: { 'Set-Cookie': `token=${token.value}` },
//   // })
//   return NextResponse.json(getGetTodosResponseMock())
// }
