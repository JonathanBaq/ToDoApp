import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [toDo, setToDo] = useState({
    date: '',
    description: ''
  })
  const [toDoList, setToDoList] = useState([]);

  const handleInputChange = (event) => {
    setToDo({ ...toDo, [event.target.name]: [event.target.value] });
  };

  const addToDo = () => {
    setToDoList([...toDoList, toDo]);
  };

  return (
    <div>
      <div className='App-header'>
        <h1>Simple To-do List</h1>
      </div>
      <div className='App'>
        <h2>Add task:</h2>
        <label htmlFor='date'>Date: </label>
        <input id='date' name='date' value={toDoList.date} onChange={handleInputChange} />
        <label htmlFor='desc'>Description: </label>
        <input id='desc' name='description' value={toDoList.description} onChange={handleInputChange} />
        <button onClick={addToDo}>Add</button>
      </div>
      <table>
        <tbody>
          <tr><th>Date</th><th>Description</th></tr>
          {toDoList.map((toDo) =>
            <tr key={Math.random()}>
              <td>{toDo.date}</td>
              <td>{toDo.description}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default App;
