export function firstTruthy(...values) {
    return values.find((value) => Boolean(value))
}

export function withDefault(value, defaultValue) {
    return value ?? defaultValue
}

export function isEmptyish(value) {
    return !value
}
