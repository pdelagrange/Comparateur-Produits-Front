import React from "react";

const url = `http://185.212.226.160/users`; 

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

