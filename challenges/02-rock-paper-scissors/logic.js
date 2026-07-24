export const HANDS = ["rock", "scissors", "paper"]

/**
 * HANDSの中からランダムに1つ選んで返します。
 *
 * @returns {"rock" | "scissors" | "paper"}
 */
export function pickComputerHand() {
    // TODO: ここを実装してください
}

/**
 * playerHandから見た勝敗を判定します。
 * グーはチョキに勝ち、チョキはパーに勝ち、パーはグーに勝ちます。
 *
 * @param {"rock" | "scissors" | "paper"} playerHand
 * @param {"rock" | "scissors" | "paper"} computerHand
 * @returns {"win" | "lose" | "draw"}
 */
export function judgeJanken(playerHand, computerHand) {
    // TODO: ここを実装してください
}

/**
 * スコア {win, lose, draw} を、resultに応じて更新した「新しいオブジェクト」を返してください。
 * 元のscoreオブジェクトは変更しないこと（不変更新）。
 *
 * @param {{win: number, lose: number, draw: number}} score
 * @param {"win" | "lose" | "draw"} result
 * @returns {{win: number, lose: number, draw: number}}
 */
export function updateScore(score, result) {
    // TODO: ここを実装してください
}
