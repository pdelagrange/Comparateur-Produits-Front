import  React, { useEffect, useState } from "react";
import SimpleProduct from "../Components/SimpleProduct";
import * as category from "../Services/Category.Service"

const Products = () => {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        category.getCategories()
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, []);

    console.log(categories);
    //console.log(categories[0].products[0].name)

    return (
        <div>
        <h1>Products</h1>
        {categories.map((category) => {
            return <div>
                <h2>{category.name}</h2>
                {category.products.map((product) => {
                return <SimpleProduct image={product.image} name={product.name} id={product.id}/>
            })}
            </div>
        })}
        </div>
    )
}

export default Products