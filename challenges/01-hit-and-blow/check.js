import { check, assert } from "../../exercises/_shared/check-helpers.js"
import { generateSecretDigits, parseGuess, judgeHitAndBlow } from "./logic.js"

check("generateSecretDigits は重複のないlength個の数字を返す", () => {
    for (let i = 0; i < 50; i++) {
        const digits = generateSecretDigits(4)
        assert.equal(digits.length, 4)
        digits.forEach((d) => assert.ok(Number.isInteger(d) && d >= 0 && d <= 9))
        assert.equal(new Set(digits).size, 4, "数字が重複しています")
    }
})

check("parseGuess は数字文字列を配列に変換する", () => {
    assert.deepEqual(parseGuess("1234", 4), [1, 2, 3, 4])
})

check("parseGuess は桁数が違う場合 null を返す", () => {
    assert.equal(parseGuess("123", 4), null)
    assert.equal(parseGuess("12345", 4), null)
})

check("parseGuess は数字以外を含む場合 null を返す", () => {
    assert.equal(parseGuess("12a4", 4), null)
})

check("parseGuess は重複がある場合 null を返す", () => {
    assert.equal(parseGuess("1123", 4), null)
})

check("judgeHitAndBlow: 完全一致は hit=4, blow=0", () => {
    assert.deepEqual(judgeHitAndBlow([1, 2, 3, 4], [1, 2, 3, 4]), { hit: 4, blow: 0 })
})

check("judgeHitAndBlow: 完全に逆順は hit=0, blow=4", () => {
    assert.deepEqual(judgeHitAndBlow([1, 2, 3, 4], [4, 3, 2, 1]), { hit: 0, blow: 4 })
})

check("judgeHitAndBlow: 一部一致", () => {
    assert.deepEqual(judgeHitAndBlow([1, 2, 3, 4], [1, 3, 2, 5]), { hit: 1, blow: 2 })
})

check("judgeHitAndBlow: 共通の数字が無い場合は hit=0, blow=0", () => {
    assert.deepEqual(judgeHitAndBlow([1, 2, 3, 4], [5, 6, 7, 8]), { hit: 0, blow: 0 })
})
