/**
 * 引数の中から、最初に見つかったTruthyな値を返します。
 * 全てFalsyだった場合は undefined を返します。
 *
 * @param {...unknown} values
 * @returns {unknown}
 */
export function firstTruthy(...values) {
    // TODO: ここを実装してください
}

/**
 * value が Nullish（null または undefined）の場合のみ defaultValue を返します。
 * それ以外の場合は value をそのまま返します。
 *
 * @param {unknown} value
 * @param {unknown} defaultValue
 * @returns {unknown}
 */
export function withDefault(value, defaultValue) {
    // TODO: ここを実装してください（?? を使う）
}

/**
 * value が Falsy かどうかを判定します。
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isEmptyish(value) {
    // TODO: ここを実装してください
}
