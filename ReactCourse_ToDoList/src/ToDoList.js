import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) { // Check to avoid adding an empty task
      setTasks([...tasks, task]); // Add the new task to the current task list
      setTask(''); // Clear the input field
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Create a new list excluding the selected task
    setTasks(newTasks); // Update the task list
  };

  return (
    <div className="App">
            <h3>To-Do List</h3>
      <div style={{ display: 'flex', marginBottom: '10px' }}> {/* Use a flex container to align items */}
        <input 
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ marginRight: '5px' }} // Add some margin to the right of the input
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
        {tasks.map((t, index) => (
          <li key={index}>
            {t} 
            <button 
              type="button" 
              className="btn btn-outline-danger" // Change to a danger style for delete
              onClick={() => deleteTask(index)}
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
