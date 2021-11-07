
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = ()=>(
  <div>
    <h1>Hats</h1>
  </div>
)

function App() {
  return (
    <div >
     { /***********
      **VERSION 6  of react-router-dom uses Routes as the parent of Route
      and user element and not component
     */}
       <Routes>     
      <Route  path='/' element={<HomePage/>} />
      <Route  path='/hats' element={<HatsPage/>} />
      
</Routes>
        
    </div>
  );
}

export default App;
