import TodoCard from "@/components/todo/todo-card";
import { Button } from "@/components/ui/button";

const TodoContainer = () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <Button>Add Todo</Button>
        <Button>Filter</Button>
      </div>
      <div className="space-y-3">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
