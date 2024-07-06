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
};

const TodoCard = ({ _id, title, description, isCompleted }: TTodoProps) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(_id));
  };

  return (
    <div className="flex items-center justify-between p-3 dark:bg-slate-800 bg-slate-200 rounded-lg">
      <Checkbox onCheckedChange={toggleState} />
      <h3 className="font-semibold">{title}</h3>
      {isCompleted ? (
        <p className="text-green-500">Done</p>
      ) : (
        <p className="text-red-500">Pending</p>
      )}
      <p>{description}</p>
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
