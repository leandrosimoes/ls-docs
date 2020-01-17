import 'jasmine'
import { CPF } from '../src/ts/index'

describe('CPF', () => {
    it('Must be defined', () => {
        expect(CPF).toBeDefined()
        expect(CPF).not.toBeUndefined()
    })

    it('CPF Validations', () => {
        expect(CPF.validate('776.948.954-70')).toBe(true)
        expect(CPF.validate('41572466758')).toBe(true)
        expect(CPF.validate('11111111111')).toBe(false)
        expect(CPF.validate('')).toBe(false)
    })
})
