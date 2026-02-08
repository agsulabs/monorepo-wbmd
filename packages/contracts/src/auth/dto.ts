import type { AuthTokensDTO } from './tokens';

export type LoginRequestDTO = {
  email: string;
  password: string;
};

export type LoginResponseDTO = AuthTokensDTO;

export type RefreshRequestDTO = {
  refreshToken: string;
};

export type RefreshResponseDTO = AuthTokensDTO;

export type MeResponseDTO = {
  userId: string;
  activeOrgId: string | null;
};
