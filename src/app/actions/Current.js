export default class Current {
    static getSwitchAction(value) {
        return {
            type: 'SWITCH_REVERSE',
            payload: value
        }
    }

    static getFirstValueAction(value) {
        return {
            type: 'UPDATE_FIRST_VALUE',
            payload: value
        }
    }

    static getSecondValueAction(value) {
        return {
            type: 'UPDATE_SECOND_VALUE',
            payload: value
        }
    }
}