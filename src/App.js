import { DivideSignCircleIcon } from '@hugeicons/react-pro';
import './App.css';
// import Loginsignup from './Components/Loginsignup/Loginsignup';
import React from 'react';
import Navigation from './Components/Nav/Navigation'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';

function App (){
  return (
  <div>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </div>

   
      
);
};

export default App;



