import * as helpers from '../helpers'

export default class MS {
    constructor() {}

    static validate(value: string): boolean {
        if (!value.startsWith('28')) {
            return false
        }

        return helpers.baseCalc(value, '', false)
    }
}
