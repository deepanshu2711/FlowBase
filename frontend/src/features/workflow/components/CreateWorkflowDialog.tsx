import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Zap } from "lucide-react";

interface WorkflowFormData {
  name: string;
  description: string;
}

interface CreateWorkflowDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (data: WorkflowFormData) => void;
  isLoading: boolean;
}
export const CreateWorkflowDialog = ({
  setOpen,
  open,
  onSubmit,
  isLoading,
}: CreateWorkflowDialogProps) => {
  const [formData, setFormData] = useState<WorkflowFormData>({
    name: "",
    description: "",
  });
  const [errors, setErrors] = useState<{ name?: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { name?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Workflow name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
      setOpen(false);
      setFormData({ name: "", description: "" });
      setErrors({});
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setFormData({ name: "", description: "" });
    setErrors({});
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[540px] p-0 gap-0 bg-white">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl font-semibold text-gray-900">
                Create New Workflow
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-500 mt-1">
                Set up your workflow automation in seconds
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="px-6 py-5 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Workflow Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="e.g., Send welcome email to new users"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className={`${errors.name ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300"}`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Describe what this workflow does..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="min-h-[90px] resize-none border-gray-300"
            />
          </div>
        </div>

        <DialogFooter className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex gap-3 justify-end w-full">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              className="bg-primary text-white shadow-sm"
              disabled={isLoading}
            >
              Create Workflow
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
