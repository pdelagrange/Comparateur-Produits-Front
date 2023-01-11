import React from 'react';

function Header() {

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
    </nav>
  );
}

export default Header;