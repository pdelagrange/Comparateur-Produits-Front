import React from 'react';
import useToken from '../Utils.jsx/UseToken';
import { useNavigate, useNavigation } from "react-router-dom";


function Header() {

  const { token } = useToken();

  const navigate = useNavigate();

  return (
    <header className='mb-3'>
      <div id='logo'>
        <h1>CardSelector</h1>
      </div>
      {!token && <a href="/login">Se connecter</a>}
      {token
        && <a href="category/add">Ajouter Catégorie</a>
        && <a href="/logout" >Se déconnecter</a>}

    </header>
  );
}

export default Header;