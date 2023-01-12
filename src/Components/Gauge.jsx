import React from 'react';

const Gauge = (props) => {

    return (
        <div className="progress">
            <div className="progress-bar bg-primary border-secondary progress-bar-animated" role="progressbar" style="width: 75%" aria-valuenow={props.value} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    )

}

export default Gauge;