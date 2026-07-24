/**
 * 新しいTodoオブジェクトを作成します。
 *
 * @param {number} id
 * @param {string} text
 * @returns {{id: number, text: string, done: boolean}}
 */
export function createTodo(id, text) {
    return { id, text, done: false }
}

/**
 * todosにtodoを追加した「新しい配列」を返します。
 *
 * @param {{id: number, text: string, done: boolean}[]} todos
 * @param {{id: number, text: string, done: boolean}} todo
 * @returns {{id: number, text: string, done: boolean}[]}
 */
export function addTodo(todos, todo) {
    return [...todos, todo]
}

/**
 * 指定したidのtodoのdoneを反転させた「新しい配列」を返します。
 *
 * @param {{id: number, text: string, done: boolean}[]} todos
 * @param {number} id
 * @returns {{id: number, text: string, done: boolean}[]}
 */
export function toggleTodo(todos, id) {
    return todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
}

/**
 * 指定したidのtodoを取り除いた「新しい配列」を返します。
 *
 * @param {{id: number, text: string, done: boolean}[]} todos
 * @param {number} id
 * @returns {{id: number, text: string, done: boolean}[]}
 */
export function removeTodo(todos, id) {
    return todos.filter((todo) => todo.id !== id)
}

/**
 * filterTypeに応じてtodosを絞り込みます。
 *
 * @param {{id: number, text: string, done: boolean}[]} todos
 * @param {"all" | "active" | "done"} filterType
 * @returns {{id: number, text: string, done: boolean}[]}
 */
export function filterTodos(todos, filterType) {
    if (filterType === "active") {
        return todos.filter((todo) => !todo.done)
    }
    if (filterType === "done") {
        return todos.filter((todo) => todo.done)
    }
    return todos
}
