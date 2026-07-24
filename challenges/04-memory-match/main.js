import { createDeck, isMatch, isGameComplete } from "./logic.js"

const SYMBOLS = ["🍎", "🍌", "🍇", "🍓", "🍒", "🍋", "🍑", "🥝"]

const boardEl = document.querySelector("#board")
const movesEl = document.querySelector("#moves")
const messageEl = document.querySelector("#message")
const resetButton = document.querySelector("#reset-button")

let cards = []
let flippedIds = []
let moves = 0
let isBusy = false // 2枚めくって判定中は操作をロックする
let pendingTimeoutId = null // 不一致時に「表を戻す」ためのsetTimeoutのID

function render() {
    boardEl.textContent = ""

    cards.forEach((card) => {
        const button = document.createElement("button")
        const isFaceUp = card.isMatched || flippedIds.includes(card.id)
        button.textContent = isFaceUp ? card.symbol : "?"
        button.disabled = isFaceUp || isBusy
        button.addEventListener("click", () => handleCardClick(card.id))
        boardEl.appendChild(button)
    })

    movesEl.textContent = `手数: ${moves}`
}

function handleCardClick(id) {
    if (isBusy || flippedIds.includes(id)) {
        return
    }

    flippedIds = [...flippedIds, id]

    if (flippedIds.length < 2) {
        render()
        return
    }

    moves++
    isBusy = true
    render()

    const [firstId, secondId] = flippedIds
    const first = cards.find((card) => card.id === firstId)
    const second = cards.find((card) => card.id === secondId)

    if (isMatch(first, second)) {
        cards = cards.map((card) =>
            card.id === firstId || card.id === secondId ? { ...card, isMatched: true } : card
        )
        flippedIds = []
        isBusy = false
        render()

        if (isGameComplete(cards)) {
            messageEl.textContent = `クリア！ 手数: ${moves}`
        }
    } else {
        pendingTimeoutId = setTimeout(() => {
            pendingTimeoutId = null
            flippedIds = []
            isBusy = false
            render()
        }, 800)
    }
}

function startNewGame() {
    // 直前の不一致判定のタイマーが残っていると、新しいゲームの途中で予期せず発火してしまうため、
    // 先に無効化しておく（https://developer.mozilla.org/docs/Web/API/clearTimeout）
    if (pendingTimeoutId !== null) {
        clearTimeout(pendingTimeoutId)
        pendingTimeoutId = null
    }

    cards = createDeck(SYMBOLS)
    flippedIds = []
    moves = 0
    isBusy = false
    messageEl.textContent = ""
    render()
}

resetButton.addEventListener("click", startNewGame)

startNewGame()
