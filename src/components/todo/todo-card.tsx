import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import { Trash2 } from "lucide-react";
import UpdateTodoModal from "./update-todo-modal";

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
  // for local state
  // const dispatch = useAppDispatch();

  // for server state
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const toggleState = () => {
    const updatedTodo = {
      title,
      description,
      priority,
      isCompleted: !isCompleted,
    };

    updateTodo({ id: _id, data: updatedTodo });
  };

  const handleDelete = () => {
    deleteTodo(_id);
  };

  return (
    <div className="flex items-center justify-between p-3 dark:bg-slate-800 bg-slate-200 rounded-lg">
      <Checkbox
        className="mr-3"
        onCheckedChange={toggleState}
        checked={isCompleted}
      />
      <h3 className="font-semibold md:flex-1">{title}</h3>
      <div className="flex items-center gap-x-2 md:flex-1">
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
        <p className="text-green-500 md:flex-1">Done</p>
      ) : (
        <p className="text-red-500 md:flex-1">Pending</p>
      )}
      <p className="flex-[2]">{description}</p>
      <div className="flex space-x-3">
        <Button
          onClick={handleDelete}
          variant={"destructive"}
          className="hover:bg-red-800"
        >
          <Trash2 size={16} />
        </Button>
        <UpdateTodoModal
          id={_id}
          isCompleted={isCompleted}
          title={title}
          description={description}
          priority={priority}
        />
      </div>
    </div>
  );
};

export default TodoCard;
