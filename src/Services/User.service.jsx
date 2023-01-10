import React from "react";

export const getUsers = async () => {
    return await fetch(`api-url`);
}

export const getUser = async(username) => {
    return await fetch(`api-url?${username}`);
}

export const createUser = async (username,password) => {
    return await fetch(
        `api-url?${username,password}`,
        {
            method:'POST',
        });
}

export const deleteUser = async (id) => {
    return await fetch(
        `api-url?${id}`,
        {
            method:'POST',
        });
}

