import React, { useState } from "react";

function Update() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editIndex, setEditIndex] = useState(-1); // Hangi görevin düzenlendiğini takip etmek için

  const addOrUpdateTask = () => {
    if (editIndex === -1) {
      // Yeni bir görev ekle
      setTasks([...tasks, { title, description }]);
    } else {
      // Mevcut görevi güncelle
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? { title, description } : task
      );
      setTasks(updatedTasks);
      setEditIndex(-1); // Düzenleme modunu kapat
    }
    setTitle(''); // Input alanlarını sıfırla
    setDescription('');
  };

  const editTask = (index) => {
    // Düzenlenecek görevin bilgilerini input alanlarına doldur
    setTitle(tasks[index].title);
    setDescription(tasks[index].description);
    setEditIndex(index); // Düzenleme modunu aç
  };

  const deleteTask = (index) => {
    // Seçili görevi sil
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h3 style={{marginTop:'30px'}}>Updated List</h3>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <input 
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          type="text"
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button 
          onClick={addOrUpdateTask} 
          type="button" 
          className="btn btn-outline-success"
        >
          {editIndex === -1 ? 'Ekle' : 'Güncelle'} 
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.title}</strong>: {task.description}
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => deleteTask(index)}
            >
              Sil
            </button>
            <button
              type="button"
              className="btn btn-outline-primary ml-1"
              onClick={() => editTask(index)}
            >
              Düzenle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Update;
