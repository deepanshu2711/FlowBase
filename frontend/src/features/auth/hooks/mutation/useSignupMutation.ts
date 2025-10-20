import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { AuthService } from "../../services/authService";

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: AuthService.SignUp,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (data) => {
      if (data instanceof AxiosError) {
        return toast.error(data.response?.data.message);
      }
    },
  });
};
