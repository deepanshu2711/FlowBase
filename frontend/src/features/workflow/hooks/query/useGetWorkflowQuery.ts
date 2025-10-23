import { useQuery } from "@tanstack/react-query";
import { workflowService } from "../../services/workflowSerivce";

export const useGetWorkflowQuery = () => {
  return useQuery({
    queryKey: ["workflows"],
    queryFn: workflowService.get,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
