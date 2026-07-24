/**
 * 0〜9の中から重複なくlength個の数字を選び、配列で返します。
 *
 * @param {number} length
 * @returns {number[]}
 */
export function generateSecretDigits(length) {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let i = digits.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[digits[i], digits[j]] = [digits[j], digits[i]]
    }

    return digits.slice(0, length)
}

/**
 * ユーザーの入力文字列を検証し、数字の配列に変換します。
 *
 * @param {string} input
 * @param {number} length
 * @returns {number[] | null}
 */
export function parseGuess(input, length) {
    if (!/^\d+$/.test(input)) {
        return null
    }
    if (input.length !== length) {
        return null
    }

    const digits = input.split("").map(Number)
    if (new Set(digits).size !== digits.length) {
        return null
    }

    return digits
}

/**
 * secret（正解）とguess（予想）を比較し、{ hit, blow } を返します。
 *
 * @param {number[]} secret
 * @param {number[]} guess
 * @returns {{hit: number, blow: number}}
 */
export function judgeHitAndBlow(secret, guess) {
    const hit = secret.filter((digit, i) => digit === guess[i]).length
    const overlap = secret.filter((digit) => guess.includes(digit)).length
    return { hit, blow: overlap - hit }
}
