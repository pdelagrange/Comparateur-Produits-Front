import React from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const url = `${BASE_URL}/category`;

export const getCategories = async () => {
    return await fetch(url);
}

export const getCategory = async(id) => {
    return await fetch( url + `/${id}`);
}

export const createCategory = async (name, characteristics) => {
    return await fetch(url+`/create`,
        {
           
            method:'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: 
            JSON.stringify({
                name,
                characteristics: characteristics
            }),
        });
}

export const deleteCategory = async (id) => {
    return await fetch(
        url + `/delete`,
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: 
            JSON.stringify({
                id
            })
        });
}

export const getCategoryCharacteristics = async (id) => {
    return await fetch(url + `/${id}/characteristic`)
}