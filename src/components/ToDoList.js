import React from 'react';

const ToDoList = (props) => {
  return(
    <div>
      <table>
        <tbody>
          <tr><th>Date</th><th>Description</th></tr>
          {props.toDoList.map((toDo, index) =>
            <tr key={index}>
              <td>{toDo.date}</td>
              <td>{toDo.description}</td>
              <td>{toDo.priority}</td>
              <td><button onClick={() => props.deleteToDo(toDo, index)}>Delete</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;