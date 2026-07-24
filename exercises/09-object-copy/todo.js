/**
 * @typedef {{ name: string, age: number, address: { city: string } }} User
 */

/**
 * user の浅いコピーを返します（スプレッド構文を使用）。
 *
 * @param {User} user
 * @returns {User}
 */
export function shallowCopyUser(user) {
    // TODO: ここを実装してください
}

/**
 * user の深いコピーを返します（structuredClone を使用）。
 *
 * @param {User} user
 * @returns {User}
 */
export function deepCopyUser(user) {
    // TODO: ここを実装してください
}

/**
 * user を直接変更せず、age だけを newAge に置き換えた新しいオブジェクトを返します。
 *
 * @param {User} user
 * @param {number} newAge
 * @returns {User}
 */
export function updateAge(user, newAge) {
    // TODO: ここを実装してください
}
