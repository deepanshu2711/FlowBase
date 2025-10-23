"use client";
import { PageHeader } from "@/components/Header";
import { WorkflowList } from "./WorkflowList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CreateWorkflowDialog } from "./CreateWorkflowDialog";
import { useDialog } from "@/hooks/useDialog";
import { useCreateWorkflowMutation } from "../hooks/mutation/useCreateWorkflowMutation";
import { useGetWorkflowQuery } from "../hooks/query/useGetWorkflowQuery";
import { useDeleteWorkflowMutation } from "../hooks/mutation/useDeleteWorkflowMutation";

interface Workflow {
  id: string;
  name: string;
  status: "active" | "inactive";
  lastExecution: string;
  executionCount: number;
}

const Workflow = () => {
  const { open, toggleDialog, setOpen } = useDialog();
  const { data: workflows } = useGetWorkflowQuery();
  const { mutate: createWorkflow, isPending } = useCreateWorkflowMutation();
  const { mutate: deleteWorkflow } = useDeleteWorkflowMutation();

  return (
    <div className="flex flex-col gap-10 w-[100%]">
      <div className="flex items-center justify-between">
        <PageHeader
          heading="Workflows"
          description="Manage, edit, and run your automation workflows."
        />
        <Button onClick={toggleDialog} className="cursor-pointer">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Create Workflow</span>
          <span className="sm:hidden">Create</span>
        </Button>
      </div>

      <WorkflowList
        workflows={workflows?.data || []}
        onRun={() => {}}
        onEdit={() => {}}
        onDelete={deleteWorkflow}
      />
      <CreateWorkflowDialog
        open={open}
        setOpen={setOpen}
        onSubmit={createWorkflow}
        isLoading={isPending}
      />
    </div>
  );
};

export default Workflow;
