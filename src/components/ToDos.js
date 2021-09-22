import React, {useState} from 'react';
import ToDoList from './ToDoList';

const ToDos = () => {
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

  const deleteToDo = (toDo, row) => {
    if (window.confirm(`Delete ${toDo.description}?`)) {
      window.alert(`${toDo.description} successfully removed from list.`);
      setToDoList(toDoList.filter((toDo, index) => index !== row));
    }
  };

  return (
    <div>
      <div className='App-header'>
        <h1>Simple To-do List</h1>
      </div>
      <div className='App'>
        <h2>Add task:</h2>
        <label htmlFor='date'>Date: </label>
        <input type='date' id='date' name='date' value={toDoList.date} onChange={handleInputChange} />
        <label htmlFor='desc'>Description: </label>
        <input id='desc' name='description' value={toDoList.description} onChange={handleInputChange} />
        <button onClick={addToDo}>Add</button>
      </div>
      <ToDoList toDoList={toDoList} deleteToDo={deleteToDo}/>
    </div>
  );
};

export default ToDos;