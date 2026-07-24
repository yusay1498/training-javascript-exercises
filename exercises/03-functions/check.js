import { check, assert } from "../_shared/check-helpers.js"
import { add, multiply, square, makeGreeter } from "./todo.js"

check("add(2, 3) は 5", () => {
    assert.equal(add(2, 3), 5)
})

check("multiply(4, 3) は 12", () => {
    assert.equal(multiply(4, 3), 12)
})

check("square(5) は 25", () => {
    assert.equal(square(5), 25)
})

check("makeGreeter(\"Hello\")(\"Alice\") は \"Hello, Alice!\"", () => {
    const greetHello = makeGreeter("Hello")
    assert.equal(greetHello("Alice"), "Hello, Alice!")
})

check("makeGreeter は呼び出すたびに独立した関数を返す", () => {
    const greetHello = makeGreeter("Hello")
    const greetHi = makeGreeter("Hi")
    assert.equal(greetHello("Bob"), "Hello, Bob!")
    assert.equal(greetHi("Bob"), "Hi, Bob!")
})
