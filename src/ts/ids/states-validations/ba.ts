import * as helpers from '../helpers'

export default class BA {
    constructor() {}

    static validate(value: string): boolean {
        if (
            helpers.isDifferentFrom(value, 8) &&
            helpers.isDifferentFrom(value)
        ) {
            return false
        }

        let base = helpers.getFirstXDigits(value, value.length - 2)
        let first, second

        let secondMultiplyer = helpers.arrayFromTo(2, 7)
        let firstMultiplyer = helpers.arrayFromTo(2, 8)

        let firstRest, secondRest
        let digitoComparacao = value.substring(0, 1)

        if (helpers.isEqualTo(value, 9)) {
            secondMultiplyer.push(8)
            firstMultiplyer.push(9)
            digitoComparacao = value.substring(1, 2)
        }

        if ('0123458'.split('').indexOf(digitoComparacao) !== -1) {
            secondRest = helpers.getModule(base, secondMultiplyer, 10)
            second = secondRest === 0 ? 0 : 10 - secondRest

            firstRest = helpers.getModule(base + second, firstMultiplyer, 10)
            first = firstRest === 0 ? 0 : 10 - firstRest
        } else {
            secondRest = helpers.getModule(base, secondMultiplyer)
            second = helpers.getSubtractionDigit(secondRest)

            firstRest = helpers.getModule(base + second, firstMultiplyer)
            first = helpers.getSubtractionDigit(firstRest)
        }

        return value === base + first + second
    }
}
