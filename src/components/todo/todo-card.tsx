import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Edit, Trash2 } from "lucide-react";

type TTodoProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: "low" | "medium" | "high";
};

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoProps) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(_id));
  };

  return (
    <div className="flex items-center justify-between p-3 dark:bg-slate-800 bg-slate-200 rounded-lg">
      <Checkbox className="mr-3" onCheckedChange={toggleState} />
      <h3 className="font-semibold flex-1">{title}</h3>
      <div className="flex items-center gap-x-2 flex-1">
        <div
          className={`size-3 rounded-full 
          ${priority === "high" && "bg-red-500"}
          ${priority === "medium" && "bg-yellow-500"}
          ${priority === "low" && "bg-green-500"}
          `}
        ></div>
        <p>{priority}</p>
      </div>
      {isCompleted ? (
        <p className="text-green-500 flex-1">Done</p>
      ) : (
        <p className="text-red-500 flex-1">Pending</p>
      )}
      <p className="flex-[2]">{description}</p>
      <div className="flex space-x-3">
        <Button
          onClick={() => dispatch(removeTodo(_id))}
          variant={"destructive"}
        >
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
