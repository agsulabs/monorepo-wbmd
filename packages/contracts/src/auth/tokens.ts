export type AuthTokensDTO = {
  accessToken: string;
  accessTokenExpiresAt: string; // ISO
};

export type RefreshTokenDTO = {
  refreshToken: string;
  refreshTokenExpiresAt: string; // ISO
};
