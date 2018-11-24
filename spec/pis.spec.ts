import "jasmine";
import { PIS } from '../src/ts/index';

describe("PIS", () => {
    it('Must be defined', () => {
        expect(PIS).toBeDefined()
        expect(PIS).not.toBeUndefined()
    })

    it('PIS Validations', () => {
        expect(PIS.validate('120.4797.827-2')).toBe(true)
        expect(PIS.validate('12021262326')).toBe(true)
        expect(PIS.validate('11111111111')).toBe(false)
        expect(PIS.validate('')).toBe(false)
    })
})