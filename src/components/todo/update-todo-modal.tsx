import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateTodoMutation } from "@/redux/api/api";
import { Edit } from "lucide-react";
import { FormEvent, useState } from "react";

type TUpdateTodoModalProps = {
  id: string;
  isCompleted: boolean;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
};

export default function UpdateTodoModal({
  id,
  title,
  description,
  priority,
  isCompleted,
}: TUpdateTodoModalProps) {
  const [updateTask, setUpdateTask] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updatePriority, setUpdatePriority] = useState("");

  const [updateTodo] = useUpdateTodoMutation();

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();

    const updatedTodo = {
      title: updateTask || title,
      description: updateDescription || description,
      priority: (updatePriority as "high" | "medium" | "low") || priority,
      isCompleted,
    };

    updateTodo({ id, data: updatedTodo });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#5c53fe]">
          <Edit size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleUpdate}>
          <DialogHeader>
            <DialogTitle>Update Todo</DialogTitle>
            <DialogDescription>Update your task</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Title
              </Label>
              <Input
                onBlur={(e) => setUpdateTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setUpdateDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Priority</Label>
              <Select onValueChange={(value) => setUpdatePriority(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Update Todo</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
