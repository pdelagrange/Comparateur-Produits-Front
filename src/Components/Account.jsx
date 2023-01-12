import React from 'react';
import { useToken } from '../Utils/Token';
import { useNavigate } from "react-router-dom";

function Account() {

    const token = useToken();
    const user = token.getUserConnected();

    console.log(user)
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            {user && <p className='fs-4 text-white mx-4'>Bienvenue {user.username} !</p>}
            {user && user.admin && <p className='fs-5 text-white mx-4'>Vous êtes Administrateur</p>}

            {user && user.admin &&
                <div className='fs-6 text-white mx-4'>

                    <p>Vous pouvez :</p>
                    <ul >
                        <li>ajouter/modifier/supprimer des catégories</li>
                        <li>ajouter/supprimer des produits</li>
                    </ul>
                </div>
            }

            {!user && <a href="/login" className='text-primary mx-4 mt-1'>Se connecter</a>}
            {user && <a href="/logout" className='text-primary mx-4 mt-1'>Se déconnecter</a>}
        </div>
    );
}

export default Account;