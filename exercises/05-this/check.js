import { check, assert } from "../_shared/check-helpers.js"
import { createUser, detachedGreetUsing, createBoundGreeter } from "./todo.js"

check("createUser(\"Alice\").greet() は \"Hello, I'm Alice\"", () => {
    const alice = createUser("Alice")
    assert.equal(alice.greet(), "Hello, I'm Alice")
})

check("detachedGreetUsing(user) は call を使って正しく this を束縛する", () => {
    const bob = createUser("Bob")
    assert.equal(detachedGreetUsing(bob), "Hello, I'm Bob")
})

check("createBoundGreeter(user) は単体で呼び出しても正しく動作する", () => {
    const carol = createUser("Carol")
    const boundGreet = createBoundGreeter(carol)
    // わざとレシーバーなしで呼び出す（bindされていないと this が壊れる）
    const greetAlone = boundGreet
    assert.equal(greetAlone(), "Hello, I'm Carol")
})
