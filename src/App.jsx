import React from 'react';
import { useState } from 'react'
import './App.css'
import UseContext from './Components/UseContext';
export const theme = React.createContext()

function UseState(){
  const [State,setState] = useState(true);
  
  const handleToddle = ()=>{
    setState(State=>!State);
  }


  return (
    <theme.Provider value={State}> 
    <div>
    <button onClick={handleToddle}>Toddle</button>
    </div>
    
    <UseContext/>
  </theme.Provider>
    
  );
}



export default UseState
