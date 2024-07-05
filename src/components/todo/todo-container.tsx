import TodoCard from "@/components/todo/todo-card";
import AddTodoModal from "./add-todo-modal";
import { FilterTodo } from "./filter-todo";

const TodoContainer = () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between px-1 md:px-0">
        <AddTodoModal />
        <FilterTodo />
      </div>
      <div className="bg-primary-gradient p-1 rounded-xl">
        {/* <p className="text-center font-bold text-lg py-3">
          There is no task pending
        </p> */}
        <div className="bg-slate-50  p-1 md:p-3 rounded-lg dark:bg-slate-900 space-y-1 md:space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
