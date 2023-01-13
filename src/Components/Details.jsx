import React, { useEffect, useState } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { getMax } from "../Services/Characteristics.Service";

const Details = (props) => {


  let img;
  let caraList = [];




  function Bar({ cara }) {
    const [num,setNum] = useState(0);
    useEffect(() => {
      getMax(cara.characteristic_value.characteristicTypeId)
      .then((response) => response.json())
      .then((res) => {
        setNum(res);
      });
    }, []);
    return <ProgressBar
    striped
    max={num.max}
    min={num.min -1}
    variant="primary"
    label={cara.characteristic_value.value}
    now={cara.characteristic_value.value}
  />;
  }

  
  props.char.map((cara, i) => {
    if (cara.type == "text") {
      caraList.push(
        <div key={i} className="cara bg-secondary">
          <h4 className="text-white">{cara.name}</h4>
          <p className="text-primary">{cara.characteristic_value.value}</p>
        </div>
      );
    } else if (cara.type == "checkbox") {
      if (cara.characteristic_value.value == "1") {
        img = "/icons/check.svg";
      } else {
        img = "/icons/cross.svg";
      }
      caraList.push(
        <div key={i} className="cara cara-check bg-secondary">
          <h4 className="text-white">{cara.name}</h4>
          <img src={img} alt="" />
        </div>
      );
    } else if (cara.type == "number") {


      caraList.push(
        <div key={i} className="cara-number bg-secondary">
          <h4 className="text-white">{cara.name}</h4>
              <Bar cara={cara}/>
        </div>
      );
    }
  });

  return <div className="caras">{caraList}</div>;
};

export default Details;
