import { useMutation, useQueryClient } from "@tanstack/react-query";
import { workflowService } from "../../services/workflowSerivce";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useCreateWorkflowMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: workflowService.create,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["workflows"] });
    },
    onError: (data) => {
      if (data instanceof AxiosError) {
        return toast.error(data.response?.data.message);
      }
    },
  });
};
