
import './../src/Styles/App.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Login from './Views/Login';
import Home from './Views/Home';
import ProductCreation from './Views/ProductCreation';
import CategorieCreation from './Views/CategorieCreation';
import Categories from './Views/Categories'
import SignInForm from './Components/SignInForm';

function App() {
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
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>} />
          <Route path='/category/add' element={<CategorieCreation/>}/>
          <Route path='/product/add' element={<ProductCreation/>}/>
          <Route path='/signIn' element={<SignInForm/>}/>
          <Route path='/category' element={<Categories/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
