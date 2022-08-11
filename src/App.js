
import './App.css';

import React,{} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/home.js'
import Login from './components/login/login.js'
import Order from './components/orders/orders.js'
import Header from './components/header/header.js'
import RequireAuth from './components/RequireAuth/RequireAuth.js';



function App() {
  return(
    
      <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/orders"
              element={
                <RequireAuth>
                  <Order />
                </RequireAuth>
            }
          />
        
          </Routes>
          
      </div>
    
    
  );


}

export default App;
