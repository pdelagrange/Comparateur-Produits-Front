import React from "react";
const SimpleProduct = (props) => {

    console.log(props.name);

    const imgSrc = `url(data:image/jpeg;base64,${props.image})`;

    return (
        <a href={"products/"+props.id}>
        <div key={props.id}>
            <p>{props.name}</p>
            <img src={imgSrc} alt="product_img" />
        </div>
        </a>
    )
}

export default SimpleProduct;