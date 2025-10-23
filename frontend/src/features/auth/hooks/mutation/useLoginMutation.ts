import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { AuthService } from "../../services/authService";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: AuthService.Login,
    onSuccess: (data) => {
      toast.success(data.message);
      if (data?.data?.token) {
        window.localStorage.setItem("token", data.data.token);
      }
      toast.success(data.message || "Logged in successfully!");
    },
    onError: (data) => {
      if (data instanceof AxiosError) {
        return toast.error(data.response?.data.message);
      }
    },
  });
};
