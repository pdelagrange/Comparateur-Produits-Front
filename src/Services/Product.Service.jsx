import React from "react";

const url = `http://185.212.226.160/products`; 

export const getProducts = async () => {
    return await fetch(url);
}

export const getProduct = async(id) => {
    return await fetch(url + `?${id}`);
}

export const createProduct = async (name, description, categoryId) => {
    return await fetch(
        url + `?${name, description, categoryId}`,
        {
            method:'POST',
        });
}

export const deleteProduct = async (id) => {
    return await fetch(
        url + `?${id}`,
        {
            method:'POST',
        });
}