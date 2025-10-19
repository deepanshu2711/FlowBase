import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../../services/authService";
import { toast } from "sonner";

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: AuthService.SignUp,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });
};
