import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Study React" },
    { id: 3, text: "Do jogging" },
  ]);
  const [value, setValue] = useState('')



  const addTask = () => {
    if (value.trim() === '') return; //used to prevent the empty task

    const newTask = {
      id: Date.now(),
      text: value.trim(),
    };

    setTasks([...tasks, newTask]);
    setValue('');
  };


  const clearTask = () => {
    setTasks([]) //clear all tasks
  }


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Simple To-Do List </h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      /><hr />
      <button onClick={addTask}>Add Task</button>
       <button onClick={() => clearTask()}>Clear ALL</button>
        
      <br /><br />



      <ul>
        {tasks.length === 0 && <p>No tasks availabe</p>}
        {tasks.map(task => (
          <li key={task.id}>
              {task.text}
          </li>

        ))}
      </ul>
    </div>
  );
}

export default App;
