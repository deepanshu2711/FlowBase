import { api } from "@/utils/api";

export const AuthService = {
  Login: async (data: { email: string; password: string }) => {
    const response = await api.post("/auth/signin", data);
    return response.data;
  },
  SignUp: async (data: { email: string; name: string; password: string }) => {
    const response = await api.post("/auth/signup", data);
    return response.data;
  },
};
