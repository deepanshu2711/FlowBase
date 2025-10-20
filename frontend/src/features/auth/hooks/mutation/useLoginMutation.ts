import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { AuthService } from "../../services/authService";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: AuthService.Login,
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
