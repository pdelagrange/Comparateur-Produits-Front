import React from 'react';
import Header from '../Components/Header';
import List from '../Components/CategoriesList';
import Banner from '../Components/Banner';

const Categories = () => {
    return (
        <div className="bg-secondary" id='vue'>
            <Header />
            <Banner section="Categories"/>
            <List />
        </div>
    )
}

export default Categories;