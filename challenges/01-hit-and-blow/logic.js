/**
 * 0〜9の中から重複なくlength個の数字を選び、配列で返します。
 *
 * @param {number} length
 * @returns {number[]}
 */
export function generateSecretDigits(length) {
    // TODO: ここを実装してください
}

/**
 * ユーザーの入力文字列を検証し、数字の配列に変換します。
 * 桁数が違う・数字以外を含む・重複がある場合は null を返してください。
 *
 * @param {string} input
 * @param {number} length
 * @returns {number[] | null}
 */
export function parseGuess(input, length) {
    // TODO: ここを実装してください
}

/**
 * secret（正解）とguess（予想）を比較し、{ hit, blow } を返します。
 * - hit: 位置・数字ともに一致している数
 * - blow: 数字はsecretに含まれているが、位置が違う数
 *
 * @param {number[]} secret
 * @param {number[]} guess
 * @returns {{hit: number, blow: number}}
 */
export function judgeHitAndBlow(secret, guess) {
    // TODO: ここを実装してください
}
