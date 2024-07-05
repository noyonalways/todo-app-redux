import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Trash2 } from "lucide-react";

const TodoCard = () => {
  return (
    <div className="flex items-center justify-between p-3 dark:bg-slate-800 bg-slate-200 rounded-lg">
      <Checkbox />
      <h3 className="font-semibold">Todo Title</h3>
      <p>Description</p>
      <div className="flex space-x-3">
        <Button variant={"destructive"}>
          <Trash2 size={16} />
        </Button>
        <Button className="bg-[#5c53fe] dark:text-white">
          <Edit size={16} />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
