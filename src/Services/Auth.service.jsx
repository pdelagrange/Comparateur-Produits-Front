import React from "react"
import bcrypt from "bcryptjs-react";

const url = `http://185.212.226.160/login`; 

export const getToken = async (username, password) => {

    hashedPassword = bcrypt.hashSync(password, 10);

    return await fetch(url, {
        method: "post",
        body: {
            username,
            hashedPassword
        }
    });
}