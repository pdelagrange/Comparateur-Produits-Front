import React from "react";
import { Card } from "react-bootstrap";

const Details = (props) => {

    return (
        <Card className="m-3 p-b-3 text bg-info text-white">
            <Card.Body style={{display: "flex"}}>
                <div>
                    <Card className="bg-info text-white m-b-2 fs-4 border-0">
                        <h3>Description : </h3>
                        <Card.Text className="text-white fs-5">{props.desc}</Card.Text>
                    </Card>
                    <br></br>
                    <Card className="bg-info w-auto border-0">
                        <h3>Caractéristiques : </h3>
                        {props.char.map((item, index) => (
                            <Card.Text key={item.characteristic_value.characteristicTypeId} className="text-white fs-5">{item.name}: {item.characteristic_value.value}</Card.Text>
                        ))
                        }
                    </Card>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Details;