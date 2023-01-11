import { useState } from 'react';
import './../src/Styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Views/Login';
import Home from './Views/Home';
import ProductCreation from './Views/ProductCreation';
import CategorieCreation from './Views/CategorieCreation';
import Categories from './Views/Categories'

import useToken from "./Utils.jsx/UseToken";

function App() {
    const { token, setToken } = useToken();


  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path='/login' element={<Login setToken={setToken}/>}/>
          <Route path='/category/add' element={<CategorieCreation/>}/>
          <Route path='/category' element={<Categories/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
