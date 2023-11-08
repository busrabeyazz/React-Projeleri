import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [editIndex, setEditIndex] = useState(-1); // Düzenlenen görevin indeksi

  const addTask = () => {
    if (firstName && lastName) {
      const newTask = { firstName, lastName };
      setTasks([...tasks, newTask]); // Yeni görevi görev listesine ekle
      setFirstName(""); // İlk isim input alanını temizle
      setLastName(""); // Soy isim input alanını temizle
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setFirstName(tasks[index].firstName);
    setLastName(tasks[index].lastName);
  };

  const saveTask = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === editIndex ? { firstName, lastName } : task
    );
    setTasks(updatedTasks);
    setEditIndex(-1); // Düzenleme modunu kapat
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="App">
        <h3>User List</h3>
      <div className="input-group" style={{marginBottom:'10px'}}>
        <input 
          type="text"
          className="form-control"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
          type="text"
          className="form-control"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="button" className="btn btn-success" onClick={editIndex >= 0 ? saveTask : addTask}>
          {editIndex >= 0 ? 'Save Changes' : 'Add Task'}
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.firstName} {task.lastName}
            <button onClick={() => editTask(index)} className="btn btn-warning">
              Edit
            </button>
            <button onClick={() => deleteTask(index)} className="btn btn-danger">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
