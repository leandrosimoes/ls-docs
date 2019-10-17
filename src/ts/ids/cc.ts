import { CARD_BRANDS } from './enums';

export default class CC {
    BRANDS: typeof CARD_BRANDS;

    private cardsRegex: any = {
        visa: /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard: /^5[1-5][0-9]{14}/,
        amex: /^3[47][0-9]{13}/,
        dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}/
    }

    constructor() {
        this.BRANDS = CARD_BRANDS
    }

    validate(cardNumber: string, cardBrand: CARD_BRANDS = CARD_BRANDS.NONE): boolean {
        cardNumber = cardNumber.replace(/[^\d]+/g, '');

        if (cardBrand === undefined || cardBrand === null || cardBrand === CARD_BRANDS.NONE) return false;

        return cardNumber.match(this.cardsRegex[(<CARD_BRANDS>cardBrand).toString()]) !== null
    }

    hasValidCard(cardNumber: string): boolean {
        cardNumber = cardNumber.replace(/[^\d]+/g, '');

        if (!cardNumber) return false;

        for (var card in CARD_BRANDS) {
            return cardNumber.match(this.cardsRegex[(CARD_BRANDS as any)[card]]) !== null
        }

        return false;
    }

    getValidCard(cardNumber: string): CARD_BRANDS {
        cardNumber = cardNumber.replace(/[^\d]+/g, '');

        if (!cardNumber) return CARD_BRANDS.NONE;

        for (let brand in CARD_BRANDS) {
            let parsedBrand = ((CARD_BRANDS as any)[brand])
            if (cardNumber.match(this.cardsRegex[parsedBrand]) !== null) {
                switch (parsedBrand) {
                    case CARD_BRANDS.VISA:
                        return CARD_BRANDS.VISA
                    case CARD_BRANDS.MASTERCARD:
                        return CARD_BRANDS.MASTERCARD
                    case CARD_BRANDS.JCB:
                        return CARD_BRANDS.JCB
                    case CARD_BRANDS.DISCOVER:
                        return CARD_BRANDS.DISCOVER
                    case CARD_BRANDS.DINERSCLUB:
                        return CARD_BRANDS.DINERSCLUB
                    case CARD_BRANDS.AMEX:
                        return CARD_BRANDS.AMEX
                }
            }
        }

        return CARD_BRANDS.NONE;
    }
}