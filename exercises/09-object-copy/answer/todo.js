export function shallowCopyUser(user) {
    return { ...user }
}

export function deepCopyUser(user) {
    return structuredClone(user)
}

export function updateAge(user, newAge) {
    return { ...user, age: newAge }
}
