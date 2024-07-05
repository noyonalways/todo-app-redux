import "./App.css";
import ThemeProvider from "./components/theme-provider";
import Todo from "./pages/todo";

function App() {
  return (
    <ThemeProvider>
      <Todo />
    </ThemeProvider>
  );
}

export default App;
