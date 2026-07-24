import { check, assert } from "../_shared/check-helpers.js"
import { filterPassed, toNameList, sumScores, hasAnyFailed } from "./todo.js"

const members = [
    { name: "Alice", score: 74 },
    { name: "Bob", score: 35 },
    { name: "Carol", score: 41 },
    { name: "Dave", score: 39 }
]

check("filterPassed は合格者のみを返す", () => {
    assert.deepEqual(filterPassed(members, 40), [
        { name: "Alice", score: 74 },
        { name: "Carol", score: 41 }
    ])
})

check("toNameList は名前だけの配列を返す", () => {
    assert.deepEqual(toNameList(members), ["Alice", "Bob", "Carol", "Dave"])
})

check("sumScores は合計点を返す", () => {
    assert.equal(sumScores(members), 74 + 35 + 41 + 39)
})

check("hasAnyFailed(members, 40) は true（Bob, Daveが不合格）", () => {
    assert.equal(hasAnyFailed(members, 40), true)
})

check("hasAnyFailed(members, 0) は false（全員合格）", () => {
    assert.equal(hasAnyFailed(members, 0), false)
})
