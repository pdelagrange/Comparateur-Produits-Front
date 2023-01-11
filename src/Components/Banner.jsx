import React from 'react';

function Banner(props) {

  return (
    
    <div>
        <h3 className='mx-4 text-white'>
            {props.section}
        </h3>
    </div>
  );
}

export default Banner;