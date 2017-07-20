import React, { Component } from 'react';
import ConverterForm from "../../ConverterForm";

const DESCRIPTION = {
    name: 'LENGTH',
    values : [
        {
            id: 1,
            name: 'Meter',
            value: 1
        },
        {
            id: 2,
            name: 'Kilometer',
            value: 1000
        },
        {
            id: 3,
            name: 'Millimeter',
            value: 0.001
        }
    ]
};

class Length extends Component {
    render() {
        return (
            <div>
                Length
                <ConverterForm type={DESCRIPTION.name} values={DESCRIPTION.values}/>
            </div>
        );
    }
}

export default Length;