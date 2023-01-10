import React from "react";

const url = `http://185.212.226.160/category`; 

export const getCategories = async () => {
    return await fetch(url);
}

export const getCategory = async(id) => {
    return await fetch( url + `?${id}`);
}

export const createCategory = async (name, characteristics) => {
    return await fetch(
        url + `?${name, characteristics}`,
        {
            method:'POST',
        });
}

export const deleteCategory = async (id) => {
    return await fetch(
         url + `?${id}`,
        {
            method:'POST',
        });
}

export const getCategoryCharacteristics = async (id) => {
    return await fetch(url + `/${id}/characteristic`)
}