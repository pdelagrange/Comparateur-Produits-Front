import React, { useState } from "react";
import * as User from '../Services/User.Service';
import bcrypt from "bcryptjs-react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {

    const navigate = useNavigate();

    const [errorStatus, setErrorStatus] = useState();

    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: ''
      });
     
      const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
      })
     
      const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
      }
     
      const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
     
          switch (name) {
            case "username":
              if (!value) {
                stateObj[name] = "Veuillez entrer un login";
              }
              break;
     
            case "password":
              if (!value) {
                stateObj[name] = "Veuillez entrer un mot de passe";
              } else if (input.confirmPassword && value !== input.confirmPassword) {
                stateObj["confirmPassword"] = "Les mots de passe ne correspondent pas";
              }
              else {
                stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
              }
              break;
     
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Veuillez entrer un mot de passe de confirmation";
              } else if (input.password && value !== input.password) {
                stateObj[name] = "Les mots de passe ne correspondent pas";
              }
              break;
     
            default:
              break;
          }
     
          return stateObj;
        });
      }

      const handleClick = async () => {
        if(error.username === '' && error.confirmPassword === '' && error.password === '' ){
            //call api
            const hashedPassword = await bcrypt.hash(input.password, 10);
            const response = await User.createUser(input.username, hashedPassword);
            if(response.status === 200){
              navigate('/login');
            } else {
              setErrorStatus(response.status);
            }
        }
      }
     
      return (
        <div>
            <div>
            <div>
            {errorStatus && 
            <div>
              <p>Impossible de créer l'utilisateur</p>  
            </div>}
            <input
              type="text"
              name="username"
              placeholder="Identifiant"
              value={input.username}
              onChange={onInputChange}
              onBlur={validateInput}></input>
            {error.username && <span className='err'>{error.username}</span>}
            </div>
            <div>
            <input
              type="password"
              name="password"
              placeholder="mot de passe"
              value={input.password}
              onChange={onInputChange}
              onBlur={validateInput}></input>
            {error.password && <span className='err'>{error.password}</span>}
            </div>
            <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="validez le mot de passe"
              value={input.confirmPassword}
              onChange={onInputChange}
              onBlur={validateInput}></input>
            {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
            </div>
            <button onClick={handleClick}>S'inscrire</button>
            </div>
        </div>
      );
}

export  default SignInForm;