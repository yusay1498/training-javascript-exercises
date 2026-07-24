import { check, assert } from "../_shared/check-helpers.js"
import { firstTruthy, withDefault, isEmptyish } from "./todo.js"

check("firstTruthy(0, \"\", null, \"Alice\") は \"Alice\"", () => {
    assert.equal(firstTruthy(0, "", null, "Alice"), "Alice")
})

check("firstTruthy(0, \"\", null, undefined) は undefined", () => {
    assert.equal(firstTruthy(0, "", null, undefined), undefined)
})

check("withDefault(0, 100) は 0（0はNullishではない）", () => {
    assert.equal(withDefault(0, 100), 0)
})

check("withDefault(\"\", \"default\") は \"\"（空文字はNullishではない）", () => {
    assert.equal(withDefault("", "default"), "")
})

check("withDefault(null, \"default\") は \"default\"", () => {
    assert.equal(withDefault(null, "default"), "default")
})

check("withDefault(undefined, \"default\") は \"default\"", () => {
    assert.equal(withDefault(undefined, "default"), "default")
})

check("isEmptyish(0) は true", () => {
    assert.equal(isEmptyish(0), true)
})

check("isEmptyish(\"abc\") は false", () => {
    assert.equal(isEmptyish("abc"), false)
})
