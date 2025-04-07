import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

// https://next-auth.js.org/configuration/initialization#route-handlers-app
export { handler as GET, handler as POST };
