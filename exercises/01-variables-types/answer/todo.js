export function safeTypeOf(value) {
    if (value === null) {
        return "null"
    }
    return typeof value
}

export function toNumberOrZero(value) {
    const converted = Number(value)
    return Number.isNaN(converted) ? 0 : converted
}

export function isActuallyNaN(value) {
    return Number.isNaN(value)
}
