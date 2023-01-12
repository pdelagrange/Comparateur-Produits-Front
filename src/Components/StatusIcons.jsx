import React from 'react';
<<<<<<< HEAD
import { ReactComponent as Check } from './../Utils/check.svg';
import { ReactComponent as Cross } from './../Utils/cross.svg';
=======
import { ReactComponent as Check } from './../../public/icons/check.svg';
import { ReactComponent as Cross } from './../../public/icons/cross.svg';
>>>>>>> f3d029b (jauge et icones caracteristiques v1)

const StatusIcons = (props) => {

    // Boolean : OUI
    if (props.status === 1) {
        return (
            <Check fill="#45EE5B" />
        )
    }

    // Boolean : NON
    if (props.status === 2) {
        return (
            <Cross fill="#FF3838" />
        )
    }  

<<<<<<< HEAD
}

export default StatusIcons;
=======
}
>>>>>>> f3d029b (jauge et icones caracteristiques v1)
