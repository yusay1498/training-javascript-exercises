/**
 * typeof null が "object" になってしまう歴史的なバグを修正した版のtypeofです。
 * value が null の場合は "null" を、それ以外は typeof value の結果を返してください。
 *
 * @param {unknown} value
 * @returns {string}
 */
export function safeTypeOf(value) {
    // TODO: ここを実装してください
}

/**
 * value を明示的に数値へ変換します。
 * 変換結果が NaN になった場合は 0 を返してください。
 *
 * @param {unknown} value
 * @returns {number}
 */
export function toNumberOrZero(value) {
    // TODO: ここを実装してください
}

/**
 * value が本当に NaN かどうかを正しく判定します。
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isActuallyNaN(value) {
    // TODO: ここを実装してください
}
