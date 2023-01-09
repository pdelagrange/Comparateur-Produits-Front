import React, {useState} from "react"
import LoginForm from "../Components/LoginForm";
import bcrypt from "bcryptjs-react";
import PropTypes from 'prop-types';

const Login = ({setUser}) => {

    const [username, setUsername] = useState('');

    const compare = (password, hashedPassword) => {
        return bcrypt.compare(password, hashedPassword);
    }

    const hash = (username, password) => {
        return bcrypt.hashSync(password, 10);

    }

    const handleClick = (username, password) => {
        // comparer avec utilisateur bd
        // établir le userContext
        setUser("caca");
        // rediriger

    };

    return (
        <div>
            <h1>Login form</h1>
            <LoginForm onClick={handleClick}/>
        </div> 
    )
}

export default Login;

Login.propTypes = {
    userContext: PropTypes.func
}

Login.defaultProps = {
    setUser: () => { },
}