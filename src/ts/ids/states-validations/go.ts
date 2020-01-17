import * as helpers from '../helpers'

export default class GO {
    constructor() {}

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value)) {
            return false
        }

        if (['10', '11', '15'].indexOf(value.substring(0, 2)) === -1) {
            return false
        }

        let base = helpers.getFirstXDigits(value)

        if (base === '11094402') {
            return value.substr(8) === '1' || value.substr(8) === '0'
        }

        let rest = helpers.getModule(base)
        let digit

        if (rest === 0) {
            digit = 0
        } else if (rest === 1) {
            if (helpers.IsBetween(parseInt(base), 10103105, 10119997)) {
                digit = 1
            } else {
                digit = 0
            }
        } else {
            digit = 11 - rest
        }

        return value === base + digit
    }
}
