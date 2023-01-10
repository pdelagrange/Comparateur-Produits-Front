import React from "react";

export const getProducts = async () => {
    return await fetch(`api-url`);
}

export const getProduct = async(id) => {
    return await fetch(`api-url?${id}`);
}

export const createProduct = async (name, description, categoryId) => {
    return await fetch(
        `api-url?${name, description, categoryId}`,
        {
            method:'POST',
        });
}

export const deleteProduct = async (id) => {
    return await fetch(
        `api-url?${id}`,
        {
            method:'POST',
        });
}