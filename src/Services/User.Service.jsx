import React from "react";


const BASE_URL = process.env.REACT_APP_BASE_URL;

const url = `${BASE_URL}/users`;

export const getUsers = async () => {
    return await fetch(url);
}

export const getUser = async(id) => {
    return await fetch(url + `/${id}`);
}

export const createUser = async (login,password) => {
    return await fetch(
        url+'/create',
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify({
                login,
                password
            }),
        });
}

export const deleteUser = async (id) => {
    return await fetch(
        url + `?${id}`,
        {
            method:'POST',
        });
}

