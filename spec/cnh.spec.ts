import 'jasmine'
import { CNH } from '../src/ts/index'

describe('CNH', () => {
    it('Must be defined', () => {
        expect(CNH).toBeDefined()
        expect(CNH).not.toBeUndefined()
    })

    it('CNH Validations', () => {
        expect(CNH.validate('40231348586')).toBe(true)
        expect(CNH.validate('68850095437')).toBe(true)
        expect(CNH.validate('11111111111')).toBe(false)
        expect(CNH.validate('')).toBe(false)
    })
})
