import "jasmine";
import { CNPJ } from '../src/ts/index';

describe("CNPJ", () => {
    it('Must be defined', () => {
        expect(CNPJ).toBeDefined()
        expect(CNPJ).not.toBeUndefined()
    })

    it('CNPJ Validations', () => {
        expect(CNPJ.validate('82.286.375/0001-24')).toBe(true)
        expect(CNPJ.validate('33338084000127')).toBe(true)
        expect(CNPJ.validate('11111111111111')).toBe(false)
        expect(CNPJ.validate('')).toBe(false)
    })
})