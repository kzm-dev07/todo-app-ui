
"use client";
import { signOut } from "next-auth/react";

export const SignOut = () => {
  const handleClick = async () => {
    await signOut({
      // リロードを無効する https://next-auth.js.org/getting-started/client#using-the-redirect-false-option-1
      redirect: false,
    });
    // ログアウトエンドポイント
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/logout/keycloak`);
    const data = await res.json();
    window.location.replace(data.logoutUrl);
  };
  return (
    <button
      onClick={handleClick}
    >
      sign out
    </button>
  );
};
