export type ApiErrorCode =
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "VALIDATION_ERROR"
  | "CONFLICT"
  | "RATE_LIMITED"
  | "INTERNAL_ERROR";

export type ApiErrorDTO = {
  code: ApiErrorCode;
  message: string;
  requestId?: string;
  details?: Record<string, unknown>;
};
