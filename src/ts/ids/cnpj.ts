export default class CNPJ {
    private COMMON = [
        '00000000000000',
        '11111111111111',
        '22222222222222',
        '33333333333333',
        '44444444444444',
        '55555555555555',
        '66666666666666',
        '77777777777777',
        '88888888888888',
        '99999999999999',
    ]

    private getVerifyDigit(numbers: string): string {
        var index = 2,
            reverse = numbers
                .split('')
                .reverse()
                .map(n => parseInt(n)),
            total = reverse.reduce(function(atual: number, prox: number) {
                atual += prox * index
                index = index === 9 ? 2 : index + 1
                return atual
            }, 0)

        var mod = total % 11
        return (mod < 2 ? 0 : 11 - mod).toString()
    }

    constructor() {}

    validate(cnpj: string): boolean {
        cnpj = (cnpj || '').toString().replace(/[^\d]/g, '')

        // CNPJ must be defined
        if (!cnpj) {
            return false
        }

        // CNPJ must have 14 chars
        if (cnpj.length !== 14) {
            return false
        }

        // CNPJ can't be comunsed
        if (this.COMMON.indexOf(cnpj) >= 0) {
            return false
        }

        let numbers = cnpj.substr(0, 12)
        numbers += this.getVerifyDigit(numbers)
        numbers += this.getVerifyDigit(numbers)

        return numbers.substr(-2) === cnpj.substr(-2)
    }
}
