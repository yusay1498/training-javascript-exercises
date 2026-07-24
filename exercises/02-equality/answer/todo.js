export function isStrictlyEqual(a, b) {
    return a === b
}

export function describeEquality(a, b) {
    return {
        loose: a == b,
        strict: a === b
    }
}
