import { check, assert } from "../_shared/check-helpers.js"
import { safeTypeOf, toNumberOrZero, isActuallyNaN } from "./todo.js"

check("safeTypeOf(null) は \"null\" を返す", () => {
    assert.equal(safeTypeOf(null), "null")
})

check("safeTypeOf(42) は \"number\" を返す", () => {
    assert.equal(safeTypeOf(42), "number")
})

check("safeTypeOf(undefined) は \"undefined\" を返す", () => {
    assert.equal(safeTypeOf(undefined), "undefined")
})

check("toNumberOrZero(\"42\") は 42 を返す", () => {
    assert.equal(toNumberOrZero("42"), 42)
})

check("toNumberOrZero(\"abc\") は 0 を返す", () => {
    assert.equal(toNumberOrZero("abc"), 0)
})

check("isActuallyNaN(NaN) は true を返す", () => {
    assert.equal(isActuallyNaN(NaN), true)
})

check("isActuallyNaN(\"hello\") は false を返す（文字列はNaNではない）", () => {
    assert.equal(isActuallyNaN("hello"), false)
})

check("isActuallyNaN(undefined) は false を返す", () => {
    assert.equal(isActuallyNaN(undefined), false)
})
