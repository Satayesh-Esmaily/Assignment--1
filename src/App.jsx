import "./App.css";
import Badge from "./components/Badge";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="app">
      {/* Week 1 Assignment - reusable Badge component */}
      <div className="badges">
        <Badge label="Course" value="React" />
        <Badge label="Week" value="1" />
        <Badge label="Topic" value="Props" />
        <Badge label="Student" value="Satayesh" />
      </div>

      {/* Existing todo list app */}
      <TodoList />
    </div>
  );
}
