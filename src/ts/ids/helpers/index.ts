export function getModule(
    value: string,
    multipliers?: Array<number>,
    divisor: number = 11
): number {
    if (!multipliers) {
        multipliers = arrayFromTo(2, 9)
    }

    let i = 0

    return (
        value.split('').reduceRight(function(before, atual) {
            if (multipliers !== undefined && i > multipliers.length - 1) {
                i = 0
            }

            return multipliers !== undefined
                ? multipliers[i++] * parseInt(atual, 10) + before
                : 0
        }, 0) % divisor
    )
}

export function isDifferentFrom(string: string, tamanho: any = 9): boolean {
    return string.length !== tamanho
}

export function isEqualTo(string: string, tamanho: any) {
    return !isDifferentFrom(string, tamanho)
}

export function arrayFromTo(from: number, to: number): Array<number> {
    let result = []

    while (from <= to) {
        result.push(from++)
    }

    return result
}

export function getFirstXDigits(
    string: string,
    quantidade: number = 8
): string {
    return string.substring(0, quantidade)
}

export function getSubtractionDigit(value: number): number {
    return value < 2 ? 0 : 11 - value
}

export function baseCalc(
    value: string,
    base: string,
    validateSize: boolean
): boolean {
    if (!validateSize && isDifferentFrom(value)) {
        return false
    }

    if (!base) {
        base = getFirstXDigits(value)
    }

    let digit = getSubtractionDigit(getModule(base))

    return value === base + digit
}

export function IsBetween(
    value: number,
    minValue: number,
    maxValue: number
): boolean {
    return value >= minValue && value <= maxValue
}
