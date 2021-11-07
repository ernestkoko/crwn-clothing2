
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';




function App() {
  return (
    <div >
      <Header/>
     { /***********
      **VERSION 6  of react-router-dom uses Routes as the parent of Route
      and user element and not component
     */}
       <Routes>     
      <Route  path='/' element={<HomePage/>} />
      <Route  path='/shop' element={<ShopPage/>} />
      
</Routes>
        
    </div>
  );
}

export default App;
