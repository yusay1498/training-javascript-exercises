/**
 * 配列の要素をランダムに並び替えた「新しい配列」を返します（元の配列は変更しないこと）。
 * Fisher-Yatesアルゴリズムを使用してください。
 *
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
export function shuffle(array) {
    // TODO: ここを実装してください
}

/**
 * symbols（絵柄の配列）から、各絵柄を2枚ずつ含むカードの配列を作成します。
 * 各カードは { id, symbol, isMatched: false } の形にし、shuffleでシャッフルしてから返してください。
 *
 * @param {string[]} symbols
 * @returns {{id: number, symbol: string, isMatched: boolean}[]}
 */
export function createDeck(symbols) {
    // TODO: ここを実装してください
}

/**
 * 2枚のカードが「異なるカードで、かつsymbolが一致する」場合に true を返します。
 *
 * @param {{id: number, symbol: string, isMatched: boolean}} cardA
 * @param {{id: number, symbol: string, isMatched: boolean}} cardB
 * @returns {boolean}
 */
export function isMatch(cardA, cardB) {
    // TODO: ここを実装してください
}

/**
 * すべてのカードのisMatchedがtrueかどうかを判定します。
 *
 * @param {{id: number, symbol: string, isMatched: boolean}[]} cards
 * @returns {boolean}
 */
export function isGameComplete(cards) {
    // TODO: ここを実装してください
}
