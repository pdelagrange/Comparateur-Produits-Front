import React from "react";
import { Card, ProgressBar } from "react-bootstrap";

const Details = (props) => {
  let img;
  return (
    <div className="caras">
      {props.char.map((cara, i) => {

        if (cara.type == "text") {
          return (
            <div className="cara bg-secondary">
              <h4 className="text-white">{cara.name}</h4>
              <p className="text-primary">{cara.characteristic_value.value}</p>
            </div>
          );
        } else if (cara.type == "checkbox") {
          if (cara.characteristic_value.value == "Oui") {
            img = "/icons/check.svg";
          } else {
            img = "/icons/cross.svg";
          }
          return (
            <div className="cara cara-check bg-secondary">
              <h4 className="text-white">{cara.name}</h4>
              <img src={img} alt="" />
            </div>
          );
        } else if (cara.type == "number") {
          return (
            <div className="cara-number bg-secondary">
              <h4 className="text-white">{cara.name}</h4>
              <ProgressBar
                striped
                variant="primary"
                label={cara.characteristic_value.value}
                now={cara.characteristic_value.value}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Details;
