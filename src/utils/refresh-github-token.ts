import { JWT } from "next-auth/jwt";
import { env } from "../env/server.mjs";

export const refreshGithubToken = async (token: JWT) => {
  const params = new URLSearchParams({
    refresh_token: token.refreshToken,
    grant_type: "refresh_token",
    client_id: env.GITHUB_CLIENT_ID,
    client_secret: env.GITHUB_CLIENT_SECRET,
  });

  try {
    const res = await fetch(`https://github.com/login/oauth/access_token?${params}`, {
      method: "POST",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) throw res;

    const json = await res.json();

    return {
      ...token,
      accessToken: json.access_token,
      accessTokenExpiresIn: json.expires_at,
      refreshToken: json.refresh_token,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "RefreshTokenError",
      ...token,
    };
  }
};
