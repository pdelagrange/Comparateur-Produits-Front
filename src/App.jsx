import './../src/Styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Views/Login';
import Home from './Views/Home';
import CreateProduct from './Views/CreateProduct';

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
<<<<<<< HEAD
      <Route index element={<Home {...user}/>} />
      <Route path='/login' element={<Login setUser={setUser}/>}/>
=======
          <Route index element={<Home/>} />
          <Route path="/createProduct" element={<CreateProduct />} />
>>>>>>> 7ae0586 (test)
      </Routes>
    </BrowserRouter>
  );
}

export default App;
