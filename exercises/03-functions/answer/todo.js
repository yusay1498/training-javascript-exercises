export function add(a, b) {
    return a + b
}

export const multiply = function (a, b) {
    return a * b
}

export const square = (x) => x * x

export function makeGreeter(greeting) {
    return (name) => `${greeting}, ${name}!`
}
