import React, { useState } from "react";
import PropTypes from 'prop-types';


const LoginForm = ({onClick}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        onClick(username, password);
    }

    return (
        <div>
        <label>
            User:
            <input onChange={(e)=>setUsername(e.target.value)} type="text" />
        </label>
        <label>
            Password:
            <input onChange={(e)=>setPassword(e.target.value)} type="password" />
        </label>
        <button onClick={submit}>Sumbit</button>
        </div>
    )
}

export default LoginForm;

LoginForm.propTypes = {
    onClick: PropTypes.func,
}

LoginForm.defaultProps = {
    onClick: () => { },
}