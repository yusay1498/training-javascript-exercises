export function formatCurrency(amount) {
    return `¥${amount.toLocaleString("ja-JP")}`
}

export default function formatPercentage(ratio) {
    return `${Math.round(ratio * 100)}%`
}
