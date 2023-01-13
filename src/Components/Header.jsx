import React, { useState } from 'react';

function Header() {

  function handleClick() {
    let burger_menu = document.querySelector('#burger-menu');

    var body = document.body,
      html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    burger_menu.style.height = height + 'px';

    if (burger_menu.style.display == "block")
      burger_menu.style.display = "none";
    else
      burger_menu.style.display = 'block';
  }

  return (
    <nav className='nav p-2 mb-3  d-lg-flex align-items-center bg-secondary fs-4 header'>

      <div className="me-5 large" id='logo'>
        <h1><a href="/">CardSelector</a></h1>
      </div>
      <a className='nav-link align-bottom text-white pe-5 large' href="/category">
        <img src='/icons/grip.svg' className='white'></img>
        Catégories
      </a>

      <a className='nav-link align-bottom text-white pe-5 large' href="/account">
        <img src='/icons/user.svg' className='white'></img>
        Compte
      </a>

      <div className='nav-link align-bottom pe-5 small' onClick={handleClick}>
        <img src='/icons/menu.svg' className='white'></img>
      </div>

      
      <div id='burger-menu' className='bg-secondary position-absolute'>
        <a className='nav-link align-bottom text-white p-2 ms-3 small' href="/">
          <img src='/icons/house.svg' className='white'></img>
          Home
        </a>

        <a className='nav-link align-bottom text-white p-2 ms-3 small' href="/category">
          <img src='/icons/grip.svg' className='white'></img>
          Catégories
        </a>

        <a className='nav-link align-bottom text-white p-2 ms-3 small' href="/account">
          <img src='/icons/user.svg' className='white'></img>
          Compte
        </a>
      </div>
    </nav>

  );
}

export default Header;