import { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
  providers: [
    /** @see https://next-auth.js.org/providers/keycloak#options */
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID ?? "",
      clientSecret: process.env.KEYCLOAK_SECRET ?? "",
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  session: {
    maxAge: 1 * 1 * 5 * 60,
  },
  callbacks: {
    /** @see https://next-auth.js.org/getting-started/example#extensibility */
    async jwt({ token, account }) {
      if (account) {
        // next authのjwtを作成時に実行
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token
    },
    async session({ session, token }) {
      // getServerSessionで取得できるようにする
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      return session;
    },
  },
  logger: {
    // error(code, metadata) {
    //   console.error(code, metadata);
    // },
    // warn(code) {
    //   console.warn(code);
    // },
    // debug(code, metadata) {
    //   console.debug(code, metadata);
    // },
  },
};
