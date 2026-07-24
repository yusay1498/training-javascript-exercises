export function mergeUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]
}

export function updateUser(user, changes) {
    return { ...user, ...changes }
}

export function getFirstAndRest(arr) {
    const [first, ...rest] = arr
    return { first, rest }
}
