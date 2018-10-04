import * as helpers from '../helpers';

export default class CE {
    constructor() { }

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value)) {
            return false;
        }

        return helpers.baseCalc(value, '', false);
    }
}