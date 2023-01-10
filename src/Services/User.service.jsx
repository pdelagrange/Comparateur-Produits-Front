import React from "react";

export const getUser = async (username) => {
    return await fetch(`api-url?${username}`);
}