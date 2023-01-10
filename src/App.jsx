import { useState } from 'react';
import './../src/Styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Views/Login';
import Home from './Views/Home';
import ProductCreation from './Views/ProductCreation';
import CategorieCreation from './Views/CategorieCreation';
import useToken from "./Utils.jsx/UseToken";
import SignInForm from './Components/SignInForm';

function App() {
    const { token, setToken } = useToken();


  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path='/login' element={<Login setToken={setToken}/>}/>
          <Route path='/category/add' element={<CategorieCreation/>}/>
          <Route path='/signIn' element={<SignInForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
