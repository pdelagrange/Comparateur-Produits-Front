import React from "react"

const BASE_URL = process.env.REACT_APP_BASE_URL;

const url = `${BASE_URL}`;


export function loginUser(credentials) {
    return fetch(url + `/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    })
};
