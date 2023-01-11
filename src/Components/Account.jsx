import React from 'react';
import { useToken } from '../Utils/Token';
import { useNavigate } from "react-router-dom";

function Account() {

    const token = useToken();
    const user = token.getUserConnected();

    console.log(user)
    return (
        <div>
            {user && <p className='fs-4 text-white mx-4'>Bienvenue {user.username} !</p>}
            {user && user.admin && <p className='fs-5 text-white mx-4'>Vous êtes Administrateur</p>}
            
            <ul className='text-white mx-4 mt-5'>
                <li>
                    comparaisons sauvegardées (TODO)
                </li>
            </ul>

            {!user && <a href="/login" className='text-primary mx-4 mt-1'>Se connecter</a>}
            {user && <a href="/logout" className='text-primary mx-4 mt-1'>Se déconnecter</a>}
        </div>
    );
}

export default Account;