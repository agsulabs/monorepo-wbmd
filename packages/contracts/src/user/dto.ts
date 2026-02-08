export type UserDTO = {
  id: string;
  email: string;
  createdAt: string; // ISO
  updatedAt: string; // ISO
};

export type UpdateUserRequestDTO = {
  email?: string;
};
