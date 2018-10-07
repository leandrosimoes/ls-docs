import "jasmine";
import { CC } from '../src/ts/index';

describe("CC", () => {
    let _CC: CC;

    beforeAll(() => {
        _CC = new CC()
    })

    it('Must be defined', () => {
        expect(_CC).toBeDefined()
        expect(_CC).not.toBeUndefined()
    })

    it('CC Validations', () => {
        expect(_CC.validate('4648.3346.8759.7842', _CC.BRANDS.VISA)).toBe(true)
        expect(_CC.validate('5330.0415.5812.6714', _CC.BRANDS.MASTERCARD)).toBe(true)
        expect(_CC.validate('344.9749.7216.3514', _CC.BRANDS.AMEX)).toBe(true)
        expect(_CC.validate('6011.7043.1264.5667', _CC.BRANDS.DISCOVER)).toBe(true)
        expect(_CC.validate('36.1898.4198.5640', _CC.BRANDS.DINERSCLUB)).toBe(true)
        expect(_CC.validate('3557.9913.5740.8674', _CC.BRANDS.JCB)).toBe(true)
        expect(_CC.validate('3557.9913.5740.8674', _CC.BRANDS.VISA)).toBe(false)
        expect(_CC.validate('1111111111111111')).toBe(false)
        expect(_CC.getValidCard('4648.3346.8759.7842')).toBe(_CC.BRANDS.VISA)
        expect(_CC.hasValidCard('4648.3346.8759.7842')).toBe(true)
        expect(_CC.hasValidCard('1111111111111111')).toBe(false)
        expect(_CC.validate('')).toBe(false)
    })
})