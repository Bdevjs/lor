
import './App.css';

import React,{} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/home.js'
import Login from './components/login/login.js'
import Header from './components/header/header.js'



function App() {
  return(
    
      <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          
      </div>
    
    
  );


}

export default App;
