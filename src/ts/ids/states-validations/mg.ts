import * as helpers from '../helpers'

export default class MG {
    constructor() {}

    static validate(value: string): boolean {
        if (helpers.isDifferentFrom(value, 13)) {
            return false
        }

        let base = helpers.getFirstXDigits(value, 11)

        let baseWithZero = value.substring(0, 3) + '0' + value.substring(3, 11)

        let i = 0
        let literalProduct = baseWithZero
            .split('')
            .reduceRight(function(before, atual) {
                if (i > [2, 1].length - 1) {
                    i = 0
                }

                return (
                    ([2, 1][i++] * parseInt(atual, 10)).toString() +
                    before.toString()
                )
            }, '')
            .split('')
            .reduce(function(before, atual) {
                return before + parseInt(atual)
            }, 0)

        let first =
            (parseInt((literalProduct / 10).toString()) + 1) * 10 -
            literalProduct

        if (first === 10) {
            first = 0
        }

        let second = helpers.getSubtractionDigit(
            helpers.getModule(base + first, helpers.arrayFromTo(2, 11))
        )

        return value === base + first + second
    }
}
