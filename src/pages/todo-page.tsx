import ModeToggle from "@/components/mode-toggle";
import TodoContainer from "@/components/todo/todo-container";
import Container from "@/components/ui/container";

const Todo = () => {
  return (
    <Container>
      <div className="relative">
        <div className="absolute right-3 md:right-0 top-6">
          <ModeToggle />
        </div>
        <h1 className="text-3xl text-center font-bold py-5 mb-8">
          Todo Application
        </h1>
        <TodoContainer />
      </div>
    </Container>
  );
};

export default Todo;
