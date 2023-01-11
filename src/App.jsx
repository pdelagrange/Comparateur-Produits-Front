import {useEffect, useState} from 'react';
import './../src/Styles/App.css';
import {BrowserRouter, Routes, Route, Outlet, useNavigate} from "react-router-dom";

import Login from './Views/Login';
import Home from './Views/Home';
import ProductCreation from './Views/ProductCreation';
import CategorieCreation from './Views/CategorieCreation';
import Categories from './Views/Categories'

import useToken from "./Utils.jsx/UseToken";
import SignInForm from './Components/SignInForm';
import Products from './Views/Products';

function App() {
    const { token, setToken } = useToken();

    function Logout(){
        const navigate = useNavigate();
        sessionStorage.removeItem('token');
        useEffect(() =>{
            navigate('/');
        })
    }

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path='/login' element={<Login setToken={setToken}/>}/>
          <Route path='/logout' element={<Logout/>} />
          <Route path='/category/add' element={<CategorieCreation/>}/>
          <Route path='/signIn' element={<SignInForm/>}/>
          <Route path='/category' element={<Categories/>}/>
          <Route path='/products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
