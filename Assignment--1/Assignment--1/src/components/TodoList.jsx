import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addTask() {
    if (text.trim() === "") return;

    setTasks([
      ...tasks,
      { id: Date.now(), title: text, done: false },
    ]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  }

  function editTask(id, newTitle) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      )
    );
  }

  return (
    <div className="todo-list">
      <h2>My Todo List</h2>

      <div className="add-task">
        <input
          type="text"
          placeholder="Add new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 && (
        <p className="empty">No tasks yet.....</p>
      )}

      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onToggle={toggleTask}
          onEdit={editTask}
        />
      ))}
    </div>
  );
}
