import { BRAZIL_STATES } from './enums';
export default class ieNumber {
    STATES: typeof BRAZIL_STATES;
    constructor();
    validate(ieNumber: string, state?: BRAZIL_STATES): boolean;
    hasValidState(ieNumber: string): Boolean;
    getValidState(ieNumber: string): BRAZIL_STATES;
}
