import { combineReducers } from 'redux';

const DEFAULT_PREVIOUS = [];
const DEFAULT_CURRENT_VALUE = {};

function currency(curr = DEFAULT_CURRENT_VALUE, action) {

}

export function previous(state = DEFAULT_PREVIOUS, action) {
    switch (action.type) {
        case 'ADD_TO_RECENT': return [...state, { ...action.payload, date: new Date() }];
        case 'CLEAR_CURRENT_RECENT': return state.filter((item) => item.date !== action.payload.date);
        case 'CLEAR_ALL_RECENT' : return DEFAULT_PREVIOUS;
        default: return state;
    }

}

export function current(curr = DEFAULT_CURRENT_VALUE, action) {
    switch (action.type) {
        case 'DEFAULT_CURRENT' : return { ...DEFAULT_CURRENT_VALUE };
        case 'SWITCH_REVERSE' : return { ...curr, onReverse: action.payload };
        case 'UPDATE_CURRENT' : return { ...action.payload };
        case 'UPDATE_FIRST_PROPORTION' : return { ...curr, firstProportion: action.payload };
        case 'UPDATE_SECOND_PROPORTION' : return { ...curr, secondProportion: action.payload };
        case 'UPDATE_FIRST_VALUE' : return { ...curr, first: action.payload };
        case 'UPDATE_SECOND_VALUE' : return { ...curr, second: action.payload };
        case 'UPDATE_TYPE' : return { ...curr, type: action.payload };
        default: return curr;
    }
}

export default combineReducers({
    previous, current
});
