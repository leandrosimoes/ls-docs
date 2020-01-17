import * as helpers from '../helpers'

export default class PR {
    constructor() {}

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value, 10)) {
            return false
        }

        let base = helpers.getFirstXDigits(value)

        let firstRest = helpers.getModule(base, helpers.arrayFromTo(2, 7))
        let first = 11 - firstRest >= 10 ? 0 : 11 - firstRest

        let secondRest = helpers.getModule(
            base + first,
            helpers.arrayFromTo(2, 7)
        )
        let second = 11 - secondRest >= 10 ? 0 : 11 - secondRest

        return value === base + first + second
    }
}
