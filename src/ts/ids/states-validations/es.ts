import * as helpers from '../helpers';

export default class ES {
    constructor() { }

    static validate(value: string): boolean {
        return helpers.baseCalc(value, '', false);
    }
}