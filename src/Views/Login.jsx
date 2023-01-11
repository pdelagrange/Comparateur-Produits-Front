import React, { useState } from "react";
import bcrypt from "bcryptjs-react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../Utils/Token";
import { alreadyConnectedRescriction } from "../Utils/AdminPageRestriction";
import Error from "../Components/Error";

async function loginUser(credentials) {
  return fetch("http://185.212.226.160/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
}

export default function Login() {
  alreadyConnectedRestriction();
  const [login, setlogin] = useState();
  const [password, setPassword] = useState();

  const [errMessage, setErrMessage] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = useToken();

    loginUser({
      login,
      password
    }).then((resp) => {
        if (resp.status !== 200) {
          return Promise.reject("ERREUR");
        }
        return resp.json();
      })
      .then((data) => {
        if (data) {
          token.setToken(data);
          navigate("/");
        }
      })
      .catch((err) => {
        setErrMessage(err);
      });
  };

  return (
    <div className="bg-secondary" id="vue">
      <div id="logo">
        <h1>CardSelector</h1>
      </div>
      <h2 className="text-primary">Connexion</h2>
      <form onSubmit={handleSubmit}>
        {errMessage && (
          <Error message="Le mot de passe ou l'identifiant est incorrect" />
        )}
        <div className="inputDiv">
          <label>login</label>
          <input type="text" onChange={(e) => setlogin(e.target.value)} />
        </div>
        <div className="inputDiv">
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <a href="/signIn">S'inscrire</a>
        </div>
      </form>
    </div>
  );
}
