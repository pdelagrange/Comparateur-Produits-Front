import React from 'react';
import { ReactComponent as Check } from './../Utils/check.svg';
import { ReactComponent as Cross } from './../Utils/cross.svg';

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


}

export default StatusIcons;

