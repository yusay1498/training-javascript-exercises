import { check, assert } from "../../exercises/_shared/check-helpers.js"
import { shuffle, createDeck, isMatch, isGameComplete } from "./logic.js"

check("shuffle は元の配列を変更せず、同じ要素を持つ新しい配列を返す", () => {
    const original = [1, 2, 3, 4, 5, 6, 7, 8]
    const originalCopy = [...original]
    const result = shuffle(original)

    assert.deepEqual(original, originalCopy, "元の配列が変更されています")
    assert.notEqual(result, original, "新しい配列を返してください")
    assert.deepEqual([...result].sort(), [...original].sort())
})

check("createDeck は各symbolを2枚ずつ含み、idが一意なカード配列を返す", () => {
    const symbols = ["🍎", "🍌", "🍇"]
    const deck = createDeck(symbols)

    assert.equal(deck.length, 6)
    deck.forEach((card) => {
        assert.equal(card.isMatched, false)
    })

    const ids = deck.map((card) => card.id)
    assert.equal(new Set(ids).size, deck.length, "idが重複しています")

    symbols.forEach((symbol) => {
        const count = deck.filter((card) => card.symbol === symbol).length
        assert.equal(count, 2, `${symbol} が2枚ずつ含まれていません`)
    })
})

check("isMatch は異なるカードでsymbolが一致する場合 true を返す", () => {
    const cardA = { id: 1, symbol: "🍎", isMatched: false }
    const cardB = { id: 2, symbol: "🍎", isMatched: false }
    assert.equal(isMatch(cardA, cardB), true)
})

check("isMatch はsymbolが異なる場合 false を返す", () => {
    const cardA = { id: 1, symbol: "🍎", isMatched: false }
    const cardB = { id: 2, symbol: "🍌", isMatched: false }
    assert.equal(isMatch(cardA, cardB), false)
})

check("isGameComplete はすべてisMatchedがtrueの場合のみ true を返す", () => {
    const complete = [
        { id: 1, symbol: "🍎", isMatched: true },
        { id: 2, symbol: "🍎", isMatched: true }
    ]
    const incomplete = [
        { id: 1, symbol: "🍎", isMatched: true },
        { id: 2, symbol: "🍎", isMatched: false }
    ]

    assert.equal(isGameComplete(complete), true)
    assert.equal(isGameComplete(incomplete), false)
})
