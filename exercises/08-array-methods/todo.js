/**
 * @typedef {{ name: string, score: number }} Member
 */

/**
 * score が passingScore 以上のメンバーだけを返します。
 *
 * @param {Member[]} members
 * @param {number} passingScore
 * @returns {Member[]}
 */
export function filterPassed(members, passingScore) {
    // TODO: filter を使って実装してください
}

/**
 * メンバーの名前だけを取り出した配列を返します。
 *
 * @param {Member[]} members
 * @returns {string[]}
 */
export function toNameList(members) {
    // TODO: map を使って実装してください
}

/**
 * 全メンバーの score の合計を返します。
 *
 * @param {Member[]} members
 * @returns {number}
 */
export function sumScores(members) {
    // TODO: reduce を使って実装してください
}

/**
 * score が passingScore 未満のメンバーが1人でもいるかどうかを返します。
 *
 * @param {Member[]} members
 * @param {number} passingScore
 * @returns {boolean}
 */
export function hasAnyFailed(members, passingScore) {
    // TODO: some を使って実装してください
}
