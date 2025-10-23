import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Edit, Play, Trash2 } from "lucide-react";

interface Workflow {
  id: string;
  name: string;
  status: "active" | "inactive";
  lastExecution: string;
  executionCount: number;
}
export const WorkflowCard: React.FC<{
  workflow: Workflow;
  onRun: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}> = ({ workflow, onRun, onEdit, onDelete }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {workflow.name}
            </h3>
            <div className="flex items-center gap-2">
              <Badge
                variant={workflow.status === "active" ? "default" : "secondary"}
                className={
                  workflow.status === "active"
                    ? "bg-green-500 hover:bg-green-600"
                    : ""
                }
              >
                {workflow.status === "active" ? "Active" : "Inactive"}
              </Badge>
              <span className="text-sm text-slate-500">
                {workflow.executionCount} executions
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-600">
            Last run:{" "}
            <span className="font-medium">{workflow.lastExecution}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => onRun(workflow.id)}
              className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
            >
              <Play className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onEdit(workflow.id)}
              className="hover:bg-slate-50"
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onDelete(workflow.id)}
              className="hover:bg-red-50 hover:text-red-600 hover:border-red-300"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
