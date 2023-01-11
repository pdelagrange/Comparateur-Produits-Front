import React from "react";

const url = `http://185.212.226.160/products`; 

export const getProducts = async () => {
    return await fetch(url);
}

export const getProduct = async(id) => {
    return await fetch(url + `?${id}`);
}

export const createProduct = async (name, description, price, categoryId, characteristics) => {
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
                characteristics
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