import { check, assert } from "../_shared/check-helpers.js"
import { mergeUnique, updateUser, getFirstAndRest } from "./todo.js"

check("mergeUnique([1, 2], [2, 3]) は [1, 2, 3]", () => {
    assert.deepEqual(mergeUnique([1, 2], [2, 3]), [1, 2, 3])
})

check("mergeUnique は元の配列を変更しない", () => {
    const arr1 = [1, 2]
    const arr2 = [2, 3]
    mergeUnique(arr1, arr2)
    assert.deepEqual(arr1, [1, 2])
    assert.deepEqual(arr2, [2, 3])
})

check("updateUser は変更後の新しいオブジェクトを返す", () => {
    const user = { name: "Alice", age: 25 }
    const updated = updateUser(user, { age: 26 })
    assert.deepEqual(updated, { name: "Alice", age: 26 })
})

check("updateUser は元のオブジェクトを変更しない", () => {
    const user = { name: "Alice", age: 25 }
    updateUser(user, { age: 26 })
    assert.equal(user.age, 25)
})

check("getFirstAndRest([1, 2, 3]) は { first: 1, rest: [2, 3] }", () => {
    assert.deepEqual(getFirstAndRest([1, 2, 3]), { first: 1, rest: [2, 3] })
})
