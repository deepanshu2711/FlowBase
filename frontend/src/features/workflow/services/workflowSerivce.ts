import { api } from "@/utils/api";

export const workflowService = {
  get: async () => {
    const response = await api.get("/workflows");
    return response.data;
  },
  create: async (data: { name: string; description: string }) => {
    const response = await api.post("/workflows/create", data);
    return response.data;
  },
  delete: async (workflowId: string) => {
    const response = await api.delete(`/workflows/${workflowId}`);
    return response.data;
  },
};
