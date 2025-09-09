// import { NextRequest, NextResponse } from "next/server";
// import {
//   GetUsersParams,
//   GetUsers200,
//   User,
//   UserInput,
//   ErrorResponse,
//   getGetUsersResponseMock,
//   getPostUsersResponseMock,
// } from "../../../orval/users";

// export const GET = async (
//   request: NextRequest
// ): Promise<NextResponse<GetUsers200 | ErrorResponse>> => {
//   const searchParams = request.nextUrl.searchParams;
//   const params: GetUsersParams = {
//     page: searchParams.get("page")
//       ? Number(searchParams.get("page"))
//       : undefined,
//     pageSize: searchParams.get("pageSize")
//       ? Number(searchParams.get("pageSize"))
//       : undefined,
//   };
//   console.log(params);

//   return NextResponse.json({}, {status: 200});
//   // return NextResponse.json(getGetUsersResponseMock());
// };

// export const POST = async (
//   request: NextRequest
// ): Promise<NextResponse<User>> => {
//   const requestData: UserInput = await request.json();
//   console.log(requestData);

//   return NextResponse.json(getPostUsersResponseMock());
// };

// export const DELETE = async (
//   request: NextRequest
// ): Promise<NextResponse<{ message: string }>> => {
//   return NextResponse.json({ message: "Delete all users" });
// };
