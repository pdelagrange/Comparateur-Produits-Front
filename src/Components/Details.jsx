import React from "react";

const Details = (props) => {

    return (
        <div>
            <div id="desc">
                <h3>Description : </h3>
                <p>{ props.desc }</p>
            </div>
            <div id="char">
                <h3>Charactéristiques : </h3>
                <p>{ props.char }</p>
            </div>
        </div>
    );
}

export default Details;