import React from 'react';
import { ReactComponent as Check } from './../../public/icons/check.svg';
import { ReactComponent as Cross } from './../../public/icons/cross.svg';

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