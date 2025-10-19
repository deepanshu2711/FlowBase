import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { AuthService } from "../../services/authService";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: AuthService.Login,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });
};
