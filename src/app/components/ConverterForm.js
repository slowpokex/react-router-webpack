import React, { Component } from 'react';
import { connect } from 'react-redux'

class ConverterForm extends Component {

    constructor() {
        super();
        this.state = {
            isReverse: false
        };
        this.changeReverse = this.changeReverse.bind(this);
    }

    changeReverse() {
        this.setState({
            isReverse: !this.state.isReverse
        });
    }

    renderSelect(elements) {
        return (<select>
                    { elements.map((item) => (
                        <option key={item.id} value={item.value}>
                            {item.name}
                        </option>))
                    }
                </select>);
    }

    render() {
        return (
            <div>
               <input disabled={this.state.isReverse}/>
               <button className="reverse-button" onClick={this.changeReverse}>{!this.state.isReverse ? '->' : '<-'}</button>
               <input disabled={!this.state.isReverse}/>
               {this.renderSelect(this.props.values)}
               {this.renderSelect(this.props.values)}
            </div>
        );
    }
}

export default ConverterForm;