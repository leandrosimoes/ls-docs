import * as helpers from '../helpers';

export default class PI {
    constructor() { }

    static validate(value: string): boolean {
        return helpers.baseCalc(value, '', false);
    }
}