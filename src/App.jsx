import "./App.css";
import TodoList from "./components/TodoList";

export default function App() {
  const tasks = []; 

  return (
    <div className="app"> {}
      <TodoList tasks={tasks} />
    </div>
  );
}
