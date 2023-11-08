import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h3>To-Do List</h3> {/* To-Do List başlığı eklendi */}
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <input 
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ marginRight: '5px' }}
        />
        <button 
          onClick={addTask} 
          type="button" 
          className="btn btn-outline-success"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} 
            <button 
              type="button" 
              className="btn btn-outline-danger"
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