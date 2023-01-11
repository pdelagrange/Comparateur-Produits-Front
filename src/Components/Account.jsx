import React from 'react';
import { useToken } from '../Utils/Token';
import { useNavigate } from "react-router-dom";

function Account() {

    const token = useToken();
    const user = token.getUserConnected();

    return (
        <div>
            {user && <p className='fs-4 text-white mx-4'>Bienvenue {user.username} !</p>}
            
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