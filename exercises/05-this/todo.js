/**
 * { name, greet() {...} } という形のオブジェクトを返します。
 * greet は通常の関数（アロー関数ではない）として実装してください。
 *
 * @param {string} name
 * @returns {{ name: string, greet: () => string }}
 */
export function createUser(name) {
    // TODO: ここを実装してください
    return {
        name,
        greet() {
            // TODO: this.name を使って "Hello, I'm ${name}" を返す
        }
    }
}

/**
 * user.greet を call を使って明示的に user を this として呼び出します。
 *
 * @param {{ name: string, greet: () => string }} user
 * @returns {string}
 */
export function detachedGreetUsing(user) {
    // TODO: ここを実装してください
}

/**
 * user.greet を bind で user に固定した、単体で呼び出せる関数を返します。
 *
 * @param {{ name: string, greet: () => string }} user
 * @returns {() => string}
 */
export function createBoundGreeter(user) {
    // TODO: ここを実装してください
}
