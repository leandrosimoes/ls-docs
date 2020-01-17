import 'jasmine'
import { CC } from '../src/ts/index'

describe('CC', () => {
    it('Must be defined', () => {
        expect(CC).toBeDefined()
        expect(CC).not.toBeUndefined()
    })

    it('CC Validations', () => {
        expect(CC.validate('4648.3346.8759.7842', CC.BRANDS.VISA)).toBe(true)
        expect(CC.validate('5330.0415.5812.6714', CC.BRANDS.MASTERCARD)).toBe(
            true
        )
        expect(CC.validate('344.9749.7216.3514', CC.BRANDS.AMEX)).toBe(true)
        expect(CC.validate('6011.7043.1264.5667', CC.BRANDS.DISCOVER)).toBe(
            true
        )
        expect(CC.validate('36.1898.4198.5640', CC.BRANDS.DINERSCLUB)).toBe(
            true
        )
        expect(CC.validate('3557.9913.5740.8674', CC.BRANDS.JCB)).toBe(true)
        expect(CC.validate('3557.9913.5740.8674', CC.BRANDS.VISA)).toBe(false)
        expect(CC.validate('1111111111111111')).toBe(false)
        expect(CC.getValidCard('4648.3346.8759.7842')).toBe(CC.BRANDS.VISA)
        expect(CC.hasValidCard('4648.3346.8759.7842')).toBe(true)
        expect(CC.hasValidCard('1111111111111111')).toBe(false)
        expect(CC.validate('')).toBe(false)
    })
})
