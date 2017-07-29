import React, { Component } from 'react';
import { connect } from 'react-redux'
import Current from '../actions/Current';

const MAP_STATE_TO_PROPS = (state) => {
    return {
        current : state.current
    };
};

const MAP_DISPATCH_TO_PROPS = (dispatch) => {
    return {
        changeReverse: (value) => dispatch(Current.getSwitchAction(value)),
        changeFirst: (value) => dispatch(Current.getFirstValueAction(value)),
        changeSecond: (value) => dispatch(Current.getSecondValueAction(value)),
    };
};

class ConverterForm extends Component {
    constructor() {
        super();
        this.firstSelector = null;
        this.secondSelector = null;
        this.changeReverse = this.changeReverse.bind(this);
        this.changeFirstValue = this.changeFirstValue.bind(this);
        this.changeSecondValue = this.changeSecondValue.bind(this);
    }

    changeReverse() {
        this.props.changeReverse(!this.props.current.onReverse);
    }

    changeFirstValue(e){
        this.props.changeFirst(e.target.value);
    }

    changeSecondValue(e){
        this.props.changeSecond(e.target.value);
    }
/*
    changeSelectors(link){

    }*/

    renderSelect(elements, link) {
        return (<select ref={(select) => link = select}>
                    { elements.map((item) => (<option key={item.id} value={item.value}>{item.name}</option>)) }
                </select>);
    }

    render() {
        return (
            <div>
               <input disabled={this.props.current.onReverse}
                      onChange={this.changeFirstValue}/>
               <button className='reverse-button' onClick={this.changeReverse}>{!this.props.current.onReverse ? '->' : '<-'}</button>
               <input disabled={!this.props.current.onReverse}
                      onChange={this.changeSecondValue}/>
               {this.renderSelect(this.props.values, this.firstSelector)}
               {this.renderSelect(this.props.values, this.secondSelector)}
            </div>
        );
    }
}

export default connect(MAP_STATE_TO_PROPS, MAP_DISPATCH_TO_PROPS)(ConverterForm);