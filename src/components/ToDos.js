import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const ToDos = () => {
  const [toDo, setToDo] = useState({
    date: '',
    description: '',
    priority: ''
  })
  const [toDoList, setToDoList] = useState([]);
  const gridRef = useRef();

  const handleInputChange = (event) => {
    setToDo({ ...toDo, [event.target.name]: [event.target.value] });
  };

  const addToDo = () => {
    setToDoList([...toDoList, toDo]);
    setToDo({date: '', description: '', priority: ''});
  };

  const deleteToDo = () => {
      if(gridRef.current.getSelectedNodes().length > 0) {
        setToDoList(toDoList.filter((toDo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
      } else {
        alert('Select item first!');
      }
      
    };

  const columns = [
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    { headerName: 'Description', field: 'description', sortable: true, filter: true },
    {
      headerName: 'Priority', field: 'priority', sortable: true, filter: true,
      cellStyle: params => params.value === 'High'
        ? { color: 'red' }
        : { color: 'black' }
    }
  ];

  return (
    <div>
      <h1>Simple To-do List</h1>
      <div>
        <h2>Add task:</h2>
        <label htmlFor='desc'>Description: </label>
        <input id='desc' name='description' value={toDo.description} onChange={handleInputChange} />
        <label htmlFor='date'>Date: </label>
        <input type='date' id='date' name='date' value={toDo.date} onChange={handleInputChange} />
        <label htmlFor='priority'>Priority: </label>
        <select placeholder='Low-High' id='priority' name='priority' value={toDo.priority} onChange={handleInputChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button onClick={addToDo}>Add</button>
        <button onClick={deleteToDo}>Delete</button>
      </div>
      <div className="ag-theme-material" style={{ height: 400, width: 600, margin: 'auto' }}>
        <AgGridReact
          rowData={toDoList}
          columnDefs={columns}
          rowSelection='single'
          ref={gridRef}
          onGridReady={params => gridRef.current = params.api}
        />
      </div>
    </div>
  );
};

export default ToDos;