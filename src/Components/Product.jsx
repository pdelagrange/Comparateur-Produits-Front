import React from "react";
import { Card, Buttons } from "react-bootstrap";
import { BufferToUri } from "../Utils/Utils";
import Details from "./Details";

const Product = (props) => {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const url = `${BASE_URL}`;

  const product = props.product;

  /*
  if (!product.image) {
    img = "/icons/no-photo.png";
  } else {
    img = BufferToUri(product.image.data);
  }*/

  const imgSrc = `${url+"/products/"+product.id+"/image"}`

  return (
    <div>
      <div className="product-card">
        <div className="product-title">
          <h4 className="product-title text-primary">{product.name}</h4>
        </div>
        <div className="product-card-image">
          <img src={imgSrc} alt="Image du produit" />
          <div className="product-description">
            
            <a href={product.link} data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="top" title="Site marchand"><div className="product-price bg-primary h4">{product.price} € </div></a>
            
            <p>
              <span className="h4">Description : </span>
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <Details char={product.characteristic_types} />
    </div>
  );
};

export default Product;
