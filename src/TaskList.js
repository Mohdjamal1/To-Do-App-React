import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  const [text, setText] = useState("");
  const [editableIndex, setEditableIndex] = useState(null);

  function editTask(index) {
    setText("");
    setEditableIndex(index);
  }
  function saveTask(task) {
    task.text = text;
    onChangeTask(task);
    setEditableIndex(null);
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {editableIndex === index ? (
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
            />
          ) : (
            <span>{task.text}</span>
          )}
          {editableIndex === index ? (
            <button onClick={() => saveTask(task)}>Save</button>
          ) : (
            <button onClick={() => editTask(index)}>Edit</button>
          )}

          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
