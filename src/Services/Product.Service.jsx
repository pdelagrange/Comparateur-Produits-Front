import React from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const url = `${BASE_URL}/products`;

export const getProducts = async () => {
    return await fetch(url);
}

export const getLatests = async () => {
    return await fetch(url+"/latests");
}

export const getProduct = async(id) => {
    return await fetch(url + `/${id}`);
}


export const createProduct = async (name, description, price, categoryId, characteristics,link,image) => {
    return await fetch(url+`/create`,
        {
           
            method:'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: 
            JSON.stringify({
                name,
                description,
                price,
                categoryId,
                characteristics,
                link,
                image
            }),
        });
}

export const deleteProduct = async (id) => {
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