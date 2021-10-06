import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const ToDos = () => {
  const [toDo, setToDo] = useState({
    date: '',
    description: '',
    priority: ''
  })
  const [toDoList, setToDoList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const gridRef = useRef();

  const handleInputChange = (event) => {
    setToDo({ ...toDo, [event.target.name]: [event.target.value] });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setToDo({...toDo, date: date.toISOString()});
  };

  const addToDo = () => {
    setToDoList([...toDoList, toDo]);
    setToDo({ date: '', description: '', priority: '' });
  };

  const deleteToDo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
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
      cellStyle: params => params.value == 'High'
        ? { color: 'red' }
        : { color: 'black' }
    }
  ];

  return (
    <div>
      <div style={{marginTop: 20, marginBottom: 20}}>
        <Stack direction='row' spacing={2} justifyContent='center'>
          <TextField size='small' label='Description' id='desc' name='description' value={toDo.description} onChange={handleInputChange} />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              autoOk
              variant="inline"
              inputVariant="outlined"
              label="With keyboard"
              format="MM/dd/yyyy"
              value={selectedDate}
              InputAdornmentProps={{ position: "start" }}
              onChange={date => handleDateChange(date)}
            />
          </MuiPickersUtilsProvider>
          <TextField size='small' label='Priority' placeholder='Low-High' id='priority' name='priority' value={toDo.priority} onChange={handleInputChange} />

          <Button
            onClick={addToDo}
            variant='outlined'
            startIcon={<AddIcon />}
          >Add
          </Button>
          <Tooltip title='Select a row then press delete.'>
            <Button
              onClick={deleteToDo}
              variant='outlined'
              color='error'
              startIcon={<DeleteIcon />}
            >Delete
            </Button>
          </Tooltip>
        </Stack>
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