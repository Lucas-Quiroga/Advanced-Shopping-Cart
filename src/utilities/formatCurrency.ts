/**
 * El objecto Intl.NumberFormat habilita el formato numérico de acuerdo al lenguaje.
 */
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency:"USD", style:"currency"})


export function formatCurrency (number:number) {
    return CURRENCY_FORMATTER.format(number)
}