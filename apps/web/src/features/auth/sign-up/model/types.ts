export type SignUpFormValues = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export const initialSignUpFormValues: SignUpFormValues = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};
