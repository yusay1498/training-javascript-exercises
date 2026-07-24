import { check, assert } from "../_shared/check-helpers.js"
import { shallowCopyUser, deepCopyUser, updateAge } from "./todo.js"

check("shallowCopyUser はトップレベルのプロパティを独立させる", () => {
    const user = { name: "Alice", age: 25, address: { city: "Tokyo" } }
    const copy = shallowCopyUser(user)
    copy.name = "Bob"
    assert.equal(user.name, "Alice")
})

check("shallowCopyUser はネストしたオブジェクトを共有する（浅いコピーの特性）", () => {
    const user = { name: "Alice", age: 25, address: { city: "Tokyo" } }
    const copy = shallowCopyUser(user)
    copy.address.city = "Osaka"
    assert.equal(user.address.city, "Osaka")
})

check("deepCopyUser はネストしたオブジェクトも完全に独立させる", () => {
    const user = { name: "Alice", age: 25, address: { city: "Tokyo" } }
    const copy = deepCopyUser(user)
    copy.address.city = "Osaka"
    assert.equal(user.address.city, "Tokyo")
})

check("updateAge は age だけを変更した新しいオブジェクトを返す", () => {
    const user = { name: "Alice", age: 25, address: { city: "Tokyo" } }
    const updated = updateAge(user, 26)
    assert.equal(updated.age, 26)
    assert.equal(updated.name, "Alice")
})

check("updateAge は元のオブジェクトを変更しない", () => {
    const user = { name: "Alice", age: 25, address: { city: "Tokyo" } }
    updateAge(user, 26)
    assert.equal(user.age, 25)
})
