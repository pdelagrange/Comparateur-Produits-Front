import React from "react";
import { Card, Buttons } from "react-bootstrap";
import { BufferToUri } from "../Utils/Utils";
import Details from "./Details";

const Product = (props) => {
  const product = props.product;

  let img;
  if (!product.image) {
    img = "/icons/no-photo.png";
  } else {
    img = BufferToUri(product.image.data);
  }

  return (
    <div>
      <div className="product-card">
        <div className="product-title">
          <h4 className="product-title text-primary">{product.name}</h4>
        </div>
        <div className="product-card-image">
          <img src={img} alt="Image du produit" />
          <div className="product-description">
            <div className="product-price bg-primary h4">{product.price} €</div>
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
