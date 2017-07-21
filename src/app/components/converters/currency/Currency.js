import React, { Component } from 'react';
import ConverterForm from '../../ConverterForm';

const DESCRIPTION = {
    name: 'CURRENCY',
    values : [
        {
            id: 1,
            name: 'Dollars',
            value: 1
        },
        {
            id: 2,
            name: 'Euros',
            value: 1.25
        },
        {
            id: 3,
            name: 'Pounds',
            value: 1.99
        }
    ]
};


class Currency extends Component {
    render() {
        return (
            <div>
                <h2>Currency:</h2>
                <ConverterForm type={DESCRIPTION.name} values={DESCRIPTION.values}/>
            </div>
        );
    }
}

export default Currency;