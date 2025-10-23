import { Zap } from "lucide-react";
import { WorkflowCard } from "./WorkflowCard";

interface Workflow {
  id: string;
  name: string;
  status: "active" | "inactive";
  lastExecution: string;
  executionCount: number;
}

export const WorkflowList: React.FC<{
  workflows: Workflow[];
  onRun: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}> = ({ workflows, onRun, onEdit, onDelete }) => {
  if (workflows.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
          <Zap className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          No workflows found{" "}
        </h3>
        <p className="text-slate-600 mb-4">
          Create your first workflow to get started
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
      {workflows.map((workflow) => (
        <WorkflowCard
          key={workflow.id}
          workflow={workflow}
          onRun={onRun}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
