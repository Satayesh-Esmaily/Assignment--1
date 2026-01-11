import { useState } from "react";

export default function TodoItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.title);

  function saveEdit() {
    onEdit(task.id, value);
    setIsEditing(false);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />

      {isEditing ? (
        <input
          className="edit-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <span className={task.done ? "done" : ""}>
          {task.title}
        </span>
      )}

      <div className="actions">
        {isEditing ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
