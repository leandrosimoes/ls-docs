import * as helpers from '../helpers'

export default class PE {
    constructor() {}

    static validate(value: string): boolean {
        let base = value.substring(0, value.length - 2)

        let firstRest = helpers.getModule(base)
        let first = 11 - firstRest >= 10 ? 0 : 11 - firstRest

        let secondRest = helpers.getModule(base + first)
        let second = 11 - secondRest >= 10 ? 0 : 11 - secondRest

        return value === base + first + second
    }
}
