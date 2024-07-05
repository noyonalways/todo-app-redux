import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const TodoCard = () => {
  return (
    <div className="flex items-center justify-between p-3 dark:bg-slate-900 bg-slate-100 rounded-lg">
      <Checkbox />
      <h3 className="font-semibold">Todo Title</h3>
      <p>Description</p>
      <div className="flex space-x-3">
        <Button variant={"destructive"}>Delete</Button>
        <Button variant={"secondary"}>Edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
