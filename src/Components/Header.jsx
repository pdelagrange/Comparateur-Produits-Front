import React from 'react';
import { useToken } from '../Utils/Token';
import { useNavigate } from "react-router-dom";



function Header() {


  const token = useToken();
  const user = token.getUserConnected();

  const navigate = useNavigate();

  return (
    <header className='mb-3'>
      <div id='logo'>
        <h1>CardSelector</h1>
      </div>
      {!user && <a href="/login">Se connecter</a>}
      {user &&  <a href="/logout" >Se déconnecter</a> }
      {user?.admin && <p>VOUS ETES ADMIN</p>}
    </header>  );
}

export default Header;