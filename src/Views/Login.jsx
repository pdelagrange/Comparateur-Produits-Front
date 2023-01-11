import React, { useState } from 'react';
import bcrypt from "bcryptjs-react";
import { useNavigate } from "react-router-dom";
import {useToken} from "../Utils/Token";
import {alreadyConnectedRescriction} from "../Utils/AdminPageRestriction";

async function loginUser(credentials) {
 return fetch('http://185.212.226.160/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
}

export default function Login() {
  alreadyConnectedRescriction();
  const [login, setlogin] = useState();
  const [password, setPassword] = useState();

  const [errMessage, setErrMessage] = useState();

  const navigate = useNavigate();

  const handleSubmit = async e => {

    const token = useToken();

    const hashedPassword = bcrypt.hashSync(password, 10);

    e.preventDefault();
    loginUser({
      login,
      password: password
    }).then((resp) => {
      if(resp.status !== 200) {
        return Promise.reject("ERREUR");
      }
      return resp.json();
    }).then((data) => {
      if(data){
        token.setToken(data);
        navigate('/');
      }
    })
        .catch((err) => {
          setErrMessage(err);
        })
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        {errMessage && <p>MAUVAIS MOT DE PASSE</p>}
        <label>
          <p>login</p>
          <input type="text" onChange={e => setlogin(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <a href="/signIn">S'inscrire</a>
        </div>
      </form>
    </div>
  )
}