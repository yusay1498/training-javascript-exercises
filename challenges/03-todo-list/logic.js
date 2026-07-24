/**
 * 新しいTodoオブジェクトを作成します。
 *
 * @param {number} id
 * @param {string} text
 * @returns {{id: number, text: string, done: boolean}}
 */
export function createTodo(id, text) {
    // TODO: ここを実装してください
}

/**
 * todosにtodoを追加した「新しい配列」を返してください（元のtodosは変更しないこと）。
 *
 * @param {{id: number, text: string, done: boolean}[]} todos
 * @param {{id: number, text: string, done: boolean}} todo
 * @returns {{id: number, text: string, done: boolean}[]}
 */
export function addTodo(todos, todo) {
    // TODO: ここを実装してください
}

/**
 * 指定したidのtodoのdoneを反転させた「新しい配列」を返してください。
 * 該当id以外のtodoはそのままにしてください。
 *
 * @param {{id: number, text: string, done: boolean}[]} todos
 * @param {number} id
 * @returns {{id: number, text: string, done: boolean}[]}
 */
export function toggleTodo(todos, id) {
    // TODO: ここを実装してください
}

/**
 * 指定したidのtodoを取り除いた「新しい配列」を返してください。
 *
 * @param {{id: number, text: string, done: boolean}[]} todos
 * @param {number} id
 * @returns {{id: number, text: string, done: boolean}[]}
 */
export function removeTodo(todos, id) {
    // TODO: ここを実装してください
}

/**
 * filterTypeに応じてtodosを絞り込みます。
 * - "all": すべて
 * - "active": doneがfalseのもののみ
 * - "done": doneがtrueのもののみ
 *
 * @param {{id: number, text: string, done: boolean}[]} todos
 * @param {"all" | "active" | "done"} filterType
 * @returns {{id: number, text: string, done: boolean}[]}
 */
export function filterTodos(todos, filterType) {
    // TODO: ここを実装してください
}
