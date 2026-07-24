/**
 * 配列の要素をランダムに並び替えた「新しい配列」を返します。
 *
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
export function shuffle(array) {
    const result = [...array]

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[result[i], result[j]] = [result[j], result[i]]
    }

    return result
}

/**
 * symbols（絵柄の配列）から、各絵柄を2枚ずつ含むカードの配列を作成します。
 *
 * @param {string[]} symbols
 * @returns {{id: number, symbol: string, isMatched: boolean}[]}
 */
export function createDeck(symbols) {
    const pairs = symbols.flatMap((symbol, index) => [
        { id: index * 2, symbol, isMatched: false },
        { id: index * 2 + 1, symbol, isMatched: false }
    ])

    return shuffle(pairs)
}

/**
 * 2枚のカードが「異なるカードで、かつsymbolが一致する」場合に true を返します。
 *
 * @param {{id: number, symbol: string, isMatched: boolean}} cardA
 * @param {{id: number, symbol: string, isMatched: boolean}} cardB
 * @returns {boolean}
 */
export function isMatch(cardA, cardB) {
    return cardA.id !== cardB.id && cardA.symbol === cardB.symbol
}

/**
 * すべてのカードのisMatchedがtrueかどうかを判定します。
 *
 * @param {{id: number, symbol: string, isMatched: boolean}[]} cards
 * @returns {boolean}
 */
export function isGameComplete(cards) {
    return cards.every((card) => card.isMatched)
}
