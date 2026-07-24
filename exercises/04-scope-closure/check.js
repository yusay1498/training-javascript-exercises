import { check, assert } from "../_shared/check-helpers.js"
import { createCounter, createBankAccount } from "./todo.js"

check("createCounter().increment() を3回呼ぶと 1, 2, 3 を返す", () => {
    const counter = createCounter()
    assert.equal(counter.increment(), 1)
    assert.equal(counter.increment(), 2)
    assert.equal(counter.increment(), 3)
})

check("reset() でカウントが0に戻る", () => {
    const counter = createCounter()
    counter.increment()
    counter.increment()
    counter.reset()
    assert.equal(counter.getValue(), 0)
})

check("createCounter() は呼び出すたびに独立したカウントを持つ", () => {
    const counterA = createCounter()
    const counterB = createCounter()
    counterA.increment()
    counterA.increment()
    counterB.increment()
    assert.equal(counterA.getValue(), 2)
    assert.equal(counterB.getValue(), 1)
})

check("createBankAccount の初期残高が正しい", () => {
    const account = createBankAccount(1000)
    assert.equal(account.getBalance(), 1000)
})

check("deposit で残高が増える", () => {
    const account = createBankAccount(1000)
    account.deposit(500)
    assert.equal(account.getBalance(), 1500)
})

check("残高が足りる場合、withdraw は true を返し残高が減る", () => {
    const account = createBankAccount(1000)
    const result = account.withdraw(300)
    assert.equal(result, true)
    assert.equal(account.getBalance(), 700)
})

check("残高が足りない場合、withdraw は false を返し残高は変わらない", () => {
    const account = createBankAccount(1000)
    const result = account.withdraw(2000)
    assert.equal(result, false)
    assert.equal(account.getBalance(), 1000)
})
