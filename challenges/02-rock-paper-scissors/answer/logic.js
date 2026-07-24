export const HANDS = ["rock", "scissors", "paper"]

const BEATS = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
}

/**
 * HANDSの中からランダムに1つ選んで返します。
 *
 * @returns {"rock" | "scissors" | "paper"}
 */
export function pickComputerHand() {
    const index = Math.floor(Math.random() * HANDS.length)
    return HANDS[index]
}

/**
 * playerHandから見た勝敗を判定します。
 *
 * @param {"rock" | "scissors" | "paper"} playerHand
 * @param {"rock" | "scissors" | "paper"} computerHand
 * @returns {"win" | "lose" | "draw"}
 */
export function judgeJanken(playerHand, computerHand) {
    if (playerHand === computerHand) {
        return "draw"
    }
    return BEATS[playerHand] === computerHand ? "win" : "lose"
}

/**
 * スコア {win, lose, draw} を、resultに応じて更新した「新しいオブジェクト」を返します。
 *
 * @param {{win: number, lose: number, draw: number}} score
 * @param {"win" | "lose" | "draw"} result
 * @returns {{win: number, lose: number, draw: number}}
 */
export function updateScore(score, result) {
    return {
        ...score,
        [result]: score[result] + 1
    }
}
