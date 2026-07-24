export function createUser(name) {
    return {
        name,
        greet() {
            return `Hello, I'm ${this.name}`
        }
    }
}

export function detachedGreetUsing(user) {
    return user.greet.call(user)
}

export function createBoundGreeter(user) {
    return user.greet.bind(user)
}
