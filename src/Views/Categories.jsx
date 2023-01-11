import React from 'react';
import Header from '../Components/Header';
import List from '../Components/CategoriesList';
import Banner from '../Components/Banner';
import { Button, NavLink } from 'react-bootstrap';
import { Link } from '@mui/material';

const Categories = () => {
    return (
        <div className="bg-secondary" id='vue'>
            <Header />
            <Banner section="Categories" link="/category/add" buttonText="+ Ajouter une catégorie"/>
            <List />
        </div>
    )
}

export default Categories;