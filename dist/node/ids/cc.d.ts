import { CARD_BRANDS } from './enums';
export default class CC {
    BRANDS: typeof CARD_BRANDS;
    private cardsRegex;
    constructor();
    validate(cardNumber: string, cardBrand?: CARD_BRANDS): boolean;
    hasValidCard(cardNumber: string): boolean;
    getValidCard(cardNumber: string): CARD_BRANDS;
}
