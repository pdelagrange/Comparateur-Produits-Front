import './../src/Styles/App.scss';
import './../src/Styles/App.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Login from './Views/Login';
import Home from './Views/Home';
import ProductCreation from './Views/ProductCreation';
import CategorieCreation from './Views/CategorieCreation';
import Categories from './Views/Categories'
import SignIn from './Views/SignIn';
import Products from './Views/Products';
import ProductDetails from './Views/ProductDetails';
import {useEffect} from "react";
import Account from "./Views/Account";
import ProductCompare from './Views/ProductCompare';

function App() {
    function Logout(){
        const navigate = useNavigate();
        sessionStorage.removeItem('token');
        useEffect(() => {
            navigate('/');
        });
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>} />
          <Route path='/account' element={<Account/>}/>
          <Route path='/category/add' element={<CategorieCreation/>}/>
          <Route path='/product/add' element={<ProductCreation/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/category' element={<Categories/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/category/:id' element={<Products/>}/>
          <Route path='/products/compare/:id' element={<ProductCompare/>}/>
      </Routes>
    </BrowserRouter>
  );

}


export default App;
