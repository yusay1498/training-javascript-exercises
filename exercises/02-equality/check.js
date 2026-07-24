import { check, assert } from "../_shared/check-helpers.js"
import { isStrictlyEqual, describeEquality } from "./todo.js"

check("isStrictlyEqual(1, 1) は true", () => {
    assert.equal(isStrictlyEqual(1, 1), true)
})

check("isStrictlyEqual(1, \"1\") は false（型が違う）", () => {
    assert.equal(isStrictlyEqual(1, "1"), false)
})

check("describeEquality(1, \"1\") は loose:true, strict:false", () => {
    assert.deepEqual(describeEquality(1, "1"), { loose: true, strict: false })
})

check("describeEquality(0, false) は loose:true, strict:false", () => {
    assert.deepEqual(describeEquality(0, false), { loose: true, strict: false })
})

check("describeEquality(null, undefined) は loose:true, strict:false", () => {
    assert.deepEqual(describeEquality(null, undefined), { loose: true, strict: false })
})
