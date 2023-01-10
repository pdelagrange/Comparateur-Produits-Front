import React from 'react';
import useToken from '../Utils.jsx/UseToken';


function Header() {

  const {token} = useToken();

  return (
    
<header>
    <div id='logo'>
        <h1>CardSelector</h1>
    </div>
    <a href="/login">Se connecter</a>
    {token && <a href="category/add">Ajouter Catégorie</a>}
</header>  );
}

export default Header;