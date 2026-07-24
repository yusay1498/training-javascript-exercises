import { generateSecretDigits, parseGuess, judgeHitAndBlow } from "./logic.js"

const LENGTH = 4

const form = document.querySelector("#guess-form")
const input = document.querySelector("#guess-input")
const messageEl = document.querySelector("#message")
const historyEl = document.querySelector("#history")
const resetButton = document.querySelector("#reset-button")
const submitButton = form.querySelector("button[type=submit]")

let secret = generateSecretDigits(LENGTH)
let attempts = 0

function showMessage(text) {
    messageEl.textContent = text
}

function addHistoryItem(guess, hit, blow) {
    const li = document.createElement("li")
    li.textContent = `${guess.join("")} → Hit: ${hit} / Blow: ${blow}`
    historyEl.appendChild(li)
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const guess = parseGuess(input.value, LENGTH)
    if (guess === null) {
        showMessage(`重複のない${LENGTH}桁の数字を入力してください`)
        return
    }

    attempts++
    const { hit, blow } = judgeHitAndBlow(secret, guess)
    addHistoryItem(guess, hit, blow)

    if (hit === LENGTH) {
        showMessage(`正解！ ${attempts}回で当てました🎉`)
        input.disabled = true
        submitButton.disabled = true
    } else {
        showMessage(`Hit: ${hit} / Blow: ${blow}`)
    }

    input.value = ""
    input.focus()
})

resetButton.addEventListener("click", () => {
    secret = generateSecretDigits(LENGTH)
    attempts = 0
    historyEl.textContent = ""
    showMessage("")
    input.disabled = false
    submitButton.disabled = false
    input.value = ""
    input.focus()
})
