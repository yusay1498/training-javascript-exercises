import { formatCurrency } from "./formatters.js"
import formatPercentage from "./formatters.js"

export function describeDiscount(amount, discountRatio) {
    return `${formatCurrency(amount)} (${formatPercentage(discountRatio)}引き)`
}
