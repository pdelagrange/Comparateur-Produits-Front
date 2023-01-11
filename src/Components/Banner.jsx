import React from 'react';

function Banner(props) {

  return (
    
    <div className='d-flex justify-content-between'>
        <h3 className='mx-4 text-white'>
            {props.section}
        </h3>
        <a href={props.link} className="add-button me-4">{props.buttonText}</a>
    </div>
  );
}

export default Banner;