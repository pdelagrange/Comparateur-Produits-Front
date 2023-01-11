import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as categoriy_service from '../Services/Category.Service';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoriy_service.getCategories()
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Grid container spacing={2}>
                {categories.map((item,index) => (
                    <Grid item xs={8} key={index}>
                        <Button variant="contained">{item.name}</Button>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default CategoriesList;

