import { check, assert } from "../../exercises/_shared/check-helpers.js"
import { createTodo, addTodo, toggleTodo, removeTodo, filterTodos } from "./logic.js"

check("createTodo は { id, text, done: false } を返す", () => {
    assert.deepEqual(createTodo(1, "牛乳を買う"), { id: 1, text: "牛乳を買う", done: false })
})

check("addTodo はtodoを追加した新しい配列を返す（元の配列は変更しない）", () => {
    const original = [createTodo(1, "牛乳を買う")]
    const todo = createTodo(2, "掃除する")
    const result = addTodo(original, todo)

    assert.deepEqual(result, [
        { id: 1, text: "牛乳を買う", done: false },
        { id: 2, text: "掃除する", done: false }
    ])
    assert.equal(original.length, 1, "元の配列が変更されています")
})

check("toggleTodo は指定したidのdoneだけを反転させる", () => {
    const original = [createTodo(1, "牛乳を買う"), createTodo(2, "掃除する")]
    const result = toggleTodo(original, 1)

    assert.equal(result[0].done, true)
    assert.equal(result[1].done, false)
    assert.equal(original[0].done, false, "元の配列が変更されています")
})

check("removeTodo は指定したidのtodoを取り除く", () => {
    const original = [createTodo(1, "牛乳を買う"), createTodo(2, "掃除する")]
    const result = removeTodo(original, 1)

    assert.deepEqual(result, [{ id: 2, text: "掃除する", done: false }])
    assert.equal(original.length, 2, "元の配列が変更されています")
})

check("filterTodos は filterType に応じて絞り込む", () => {
    const todos = [
        { id: 1, text: "A", done: true },
        { id: 2, text: "B", done: false },
        { id: 3, text: "C", done: true }
    ]

    assert.equal(filterTodos(todos, "all").length, 3)
    assert.deepEqual(filterTodos(todos, "active"), [{ id: 2, text: "B", done: false }])
    assert.deepEqual(filterTodos(todos, "done"), [
        { id: 1, text: "A", done: true },
        { id: 3, text: "C", done: true }
    ])
})
