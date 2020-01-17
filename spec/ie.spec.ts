import 'jasmine'
import { IE } from '../src/ts/index'

describe('IE', () => {
    it('Must be defined', () => {
        expect(IE).toBeDefined()
        expect(IE).not.toBeUndefined()
    })

    it('IE Validations', () => {
        expect(IE.validate('072.255.334.991', IE.STATES.SAO_PAULO)).toBe(true)
        expect(IE.validate('16783284-0', IE.STATES.CEARA)).toBe(true)
        expect(IE.validate('11111111111', IE.STATES.SAO_PAULO)).toBe(false)
        expect(() => {
            IE.validate('', IE.STATES.SAO_PAULO)
        }).toThrowError('ieNumber must be informed')
        expect(() => {
            IE.validate('072.255.334.991')
        }).toThrowError('Invalid state')
        expect(IE.getValidState('072.255.334.991')).toBe(IE.STATES.SAO_PAULO)
        expect(IE.hasValidState('072.255.334.991')).toBe(true)
        expect(IE.hasValidState('11111111111')).toBe(false)
    })
})
