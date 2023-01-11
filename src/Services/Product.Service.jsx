import React from "react";

const url = `http://185.212.226.160/products`; 

export const getProducts = async () => {
    return await fetch(url);
}

export const getProduct = async(id) => {
    return await fetch(url + `?${id}`);
}

export const createProduct = async (name, price, description, categoryId) => {
    return await fetch(url+`/create`,
        {
           
            method:'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: 
            JSON.stringify({
                name,
                price,
                description,
                characteristics: characteristics
            }),
        });
}

export const deleteProduct = async (id) => {
    return await fetch(
        url + `?${id}`,
        {
            method:'POST',
        });
}