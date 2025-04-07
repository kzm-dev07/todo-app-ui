const logoutUrl = `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/logout?client_id=${process.env.KEYCLOAK_ID}&logout_uri=${process.env.LOGOUT_URI}`;
export async function GET() {
  return Response.json({ logoutUrl })
}
