import React, { useState } from 'react';
import ToDos from './ToDos'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const AppTabs = () => {
  const [value, setValue] = useState('one');

  const handleTabChange = (event, value) => {
    setValue(value);
  };

  return (
    <div>
      <AppBar position='static' color='transparent'>
          <Tabs 
            value={value} 
            onChange={handleTabChange} 
            textColor='primary'
            indicatorColor='primary'
          >
            <Tab value='one' label='About the App'/>
            <Tab value='two' label='My To-Dos'/>
          </Tabs>
      </AppBar>
    {value === 'one' && 
      <div style={{marginTop: 20, marginBottom: 20}}>
        <h1>Welcome!</h1>
        <h3>This is my To-Dos web application.</h3>
      </div>}
    {value === 'two' && <ToDos />}
    </div>
  );
};

export default AppTabs;