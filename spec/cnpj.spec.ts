import "jasmine";
import { CNPJ } from '../src/ts/index';

describe("CNPJ", () => {
    let _CNPJ: CNPJ;

    beforeAll(() => {
        _CNPJ = new CNPJ()
    })

    it('Must be defined', () => {
        expect(_CNPJ).toBeDefined()
        expect(_CNPJ).not.toBeUndefined()
    })

    it('CNPJ Validations', () => {
        expect(_CNPJ.validate('82.286.375/0001-24')).toBe(true)
        expect(_CNPJ.validate('33338084000127')).toBe(true)
        expect(_CNPJ.validate('11111111111111')).toBe(false)
        expect(_CNPJ.validate('')).toBe(false)
    })
})