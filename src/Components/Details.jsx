import React from "react";
import { Card } from "react-bootstrap";
import Gauge from "./Gauge.jsx";
import StatusIcons from "./StatusIcons.jsx";

const Details = (props) => {

    return (
        <Card className="m-3 mt-0 p-b-3 text bg-info text-white">
            <Card.Body className= "row" style={{display: "flex"}}>
                    <Card className="bg-white text-black text-uppercase fs-3 border-0 p-2 w-100 h-25 m-2">
                        <h3>Description</h3>
                        <Card.Text className="text-info text-capitalize fs-5 w-100">{props.desc}</Card.Text>
                    </Card>
                    <Card className="text-uppercase bg-info border-0 p-2 w-100 m-2">
                        <h3>Caractéristiques</h3>
                        {
                            props.char.map((item, index) => (
                                <Card.Text key={item.characteristic_value.characteristicTypeId} className="text-white text-capitalize fs-5">{item.name}: {item.characteristic_value.value} <Gauge></Gauge></Card.Text>
                            ))
                        }
                    </Card>   
            </Card.Body>
        </Card>
    );
}

export default Details;