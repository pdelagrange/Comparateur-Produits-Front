import './../src/Styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Views/Login';
import Home from './Views/Home';
import CategorieCreation from './Views/CategorieCreation';

function App() {

  const user = {
    name: "unconnected",
    admin: false
  };
  
  const setUser = (u) => {
    /*
    user.name = u.name;
    user.admin = u.admin;
    */
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home {...user}/>} />
          <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path='/create-categorie' element={<CategorieCreation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
