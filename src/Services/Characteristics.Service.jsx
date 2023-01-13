import React from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const url = `${BASE_URL}/characteristics`;

export const getMax = async (id) => {
    return await fetch(url + `/${id}`);
}

