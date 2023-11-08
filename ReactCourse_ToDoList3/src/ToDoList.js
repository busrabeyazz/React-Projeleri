import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    // Check to avoid adding an empty task
    if (title && description) {
      // Add the new task with title and description to the current task list
      const newTask = { title, description };
      setTasks([...tasks, newTask]);
      // Clear the input fields
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="App">
      <h3 style={{marginTop:'30px'}}>To-Do List</h3>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Title" // Added a placeholder for better UX
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "5px" }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Description" // Added a placeholder for better UX
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: "5px" }}
        />
        <button
          onClick={addTask}
          type="button"
          className="btn btn-outline-success"
        >
          Ekle
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.title}</strong>: {task.description}
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
