import React,{useState} from 'react';
import Todo from './Todo';
import {Routes, Route} from "react-router-dom";

import "./Style.css"
import SearcherApp from './SearcherApp';



const App = () => {
  
  return (

    <Routes>
            <Route path='/' element={<Todo/>}/>
            <Route path='/search' element={<SearcherApp/>}/>
      

    </Routes>
  );
}

export default App;
