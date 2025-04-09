import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const getAccessToken = async () => {
  const session = await getServerSession(authOptions);
  return session ? session.accessToken : '';
};

export const checkSession = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
};

export const getUserInformation = async () => {
  const session = await getServerSession(authOptions);
  return {
    name: session?.user?.name,
    email: session?.user?.email,
  };
};
