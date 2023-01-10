import React from "react";

export const getCategories = async () => {
    return await fetch(`api-url`);
}

export const getCategory = async(id) => {
    return await fetch(`api-url?${id}`);
}

export const createCategory = async (name, characteristics) => {
    return await fetch(
        `api-url?${name, characteristics}`,
        {
            method:'POST',
        });
}

export const deleteCategory = async (id) => {
    return await fetch(
        `api-url?${id}`,
        {
            method:'POST',
        });
}

export const getCategoryCharacteristics = async (id) => {
    return await fetch(`api-url/${id}/characteristic`)
}