import React from "react";

const Product = (props) => {

    const imgSrc = `url(data:image/jpeg;base64,${props.image})`;

    return (
        <div>
            <h2>{ props.name }</h2>
            <img src={imgSrc} placeholder="visuel produit"/>
            <a href="https://google.com">+ Ajouter un objet à comparer</a>
            <h3>{ props.price } €</h3>
        </div>
    );
}

export default Product;