import TodoCard from "@/components/todo/todo-card";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";
import { Button } from "../ui/button";
import AddTodoModal from "./add-todo-modal";
import { FilterTodo } from "./filter-todo";

const TodoContainer = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  const [priority, setPriority] = useState("");

  // from api
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  if (isError) {
    return <p className="text-center font-bold text-lg py-3">Error Occurred</p>;
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-between px-1 md:px-0">
        <AddTodoModal />
        <div className="space-x-3">
          <FilterTodo priority={priority} setPriority={setPriority} />
          <Button
            onClick={() => setPriority("")}
            className="bg-primary-gradient dark:text-white"
          >
            Clear Filter
          </Button>
        </div>
      </div>
      <div className="bg-primary-gradient p-1 rounded-xl">
        <div className="bg-slate-50 p-1 md:p-3 rounded-lg dark:bg-slate-900 space-y-1 md:space-y-3">
          {todos?.data?.map((todo) => (
            <TodoCard key={todo._id} {...todo} />
          ))}
          {todos?.data?.length === 0 && (
            <p className="text-center font-bold text-lg py-3">
              There is no task pending
            </p>
          )}
          {isLoading && (
            <p className="text-center font-bold text-lg py-3">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
