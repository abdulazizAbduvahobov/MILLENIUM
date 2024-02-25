import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Sections from './Components/Sections'
import Footer from './Components/Footer'
import Prices from './Components/Prices'
import Cases from './Components/Cases'
import Contacts from './Components/Contacts'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path='/' element={<Sections/>}/>
            <Route path='/prices' element={<Prices/>}/>
            <Route path='/cases' element={<Cases/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
