import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bcrypt from "bcryptjs-react";

async function loginUser(credentials) {
 return fetch('http://185.212.226.160/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => {
     console.log(data);
     return data.json();

   })
}

export default function Login({ setToken }) {
  const [login, setlogin] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {

    const hashedPassword = bcrypt.hashSync(password, 10);

    e.preventDefault();
    const token = await loginUser({
      login,
      password: password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};