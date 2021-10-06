import React from 'react';
import AppTabs from './components/AppTabs'
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  
  return (
    <div className='App'>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6'>
            Simple To-do List
          </Typography>
        </Toolbar>
      </AppBar>
      
      <AppTabs />
    </div>
  )
}

export default App;
