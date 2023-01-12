import React from "react";
import { Card } from "react-bootstrap";
import Gauge from "./Gauge.jsx";

const Details = (props) => {

    return (
        <Card className="m-3 mt-0 p-b-3 text bg-info text-white">
            <Card.Body className= "row" style={{display: "flex"}}>
                    <Card className="text-uppercase bg-info border-0 p-2 w-100 m-2">
                        <h3>Caractéristiques</h3>
                        {
                            props.char.map((item, index) => (
                                <Card.Text key={item.characteristic_value.characteristicTypeId} className="text-white text-capitalize fs-5">{item.name}: {item.characteristic_value.value} <Gauge value={item.characteristic_value.value}></Gauge></Card.Text>
                            ))
                        }
                    </Card>   
            </Card.Body>
        </Card>
    );
}

export default Details;