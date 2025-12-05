import NextAuth from "next-auth/next";
import { authOptions } from "./authOption";

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);