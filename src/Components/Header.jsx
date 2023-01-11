import React from 'react';
import { useToken } from '../Utils/Token';
import { useNavigate } from "react-router-dom";


function Header() {


  const token = useToken();
  const user = token.getUserConnected();

  return (
    <nav className='nav p-2 mb-3  d-lg-flex align-items-center bg-secondary fs-4'>
      <div className="me-5" id='logo'>
        <h1><a href="/">CardSelector</a></h1>
      </div>
      <a className='nav-link align-bottom text-white pe-5' href="/category">
        <img src='/icons/grip.svg' className='white'></img>
        Catégories
      </a>

      <a className='nav-link align-bottom text-white pe-5' href="/account">
        <img src='/icons/user.svg' className='white'></img>
        Compte
      </a>

      {!user && <a href="/login">Se connecter  //a laisser jusqu'a ce que /account soit fait</a>}
      {user && <a href="/logout">Se déconnecter //a laisser jusqu'a ce que /account soit fait</a>}
    </nav>
  );
}

export default Header;