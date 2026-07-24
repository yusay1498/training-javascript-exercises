import { check, assert } from "../../exercises/_shared/check-helpers.js"
import { HANDS, pickComputerHand, judgeJanken, updateScore } from "./logic.js"

check("pickComputerHand は HANDS の中から1つを返す", () => {
    for (let i = 0; i < 50; i++) {
        assert.ok(HANDS.includes(pickComputerHand()))
    }
})

check("judgeJanken: rock vs scissors は win", () => {
    assert.equal(judgeJanken("rock", "scissors"), "win")
})

check("judgeJanken: rock vs paper は lose", () => {
    assert.equal(judgeJanken("rock", "paper"), "lose")
})

check("judgeJanken: rock vs rock は draw", () => {
    assert.equal(judgeJanken("rock", "rock"), "draw")
})

check("judgeJanken: scissors vs paper は win", () => {
    assert.equal(judgeJanken("scissors", "paper"), "win")
})

check("judgeJanken: paper vs rock は win", () => {
    assert.equal(judgeJanken("paper", "rock"), "win")
})

check("updateScore は resultに応じたプロパティだけを+1した新しいオブジェクトを返す", () => {
    const original = { win: 1, lose: 2, draw: 3 }
    const updated = updateScore(original, "win")

    assert.deepEqual(updated, { win: 2, lose: 2, draw: 3 })
    assert.deepEqual(original, { win: 1, lose: 2, draw: 3 }, "元のオブジェクトが変更されています")
    assert.notEqual(updated, original, "新しいオブジェクトを返してください")
})
