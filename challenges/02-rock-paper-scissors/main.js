import { pickComputerHand, judgeJanken, updateScore } from "./logic.js"

const HAND_LABELS = { rock: "✊ グー", scissors: "✌️ チョキ", paper: "🖐 パー" }
const RESULT_LABELS = { win: "あなたの勝ち！", lose: "あなたの負け…", draw: "あいこ" }

const resultEl = document.querySelector("#result")
const scoreEl = document.querySelector("#score")
const buttons = document.querySelectorAll("[data-hand]")

let score = { win: 0, lose: 0, draw: 0 }

function renderScore() {
    scoreEl.textContent = `${score.win}勝 ${score.lose}敗 ${score.draw}分け`
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerHand = button.dataset.hand
        const computerHand = pickComputerHand()
        const result = judgeJanken(playerHand, computerHand)

        score = updateScore(score, result)

        resultEl.textContent =
            `あなた: ${HAND_LABELS[playerHand]} / コンピューター: ${HAND_LABELS[computerHand]} → ${RESULT_LABELS[result]}`
        renderScore()
    })
})

renderScore()
