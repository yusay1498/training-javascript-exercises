import { createTodo, addTodo, toggleTodo, removeTodo, filterTodos } from "./logic.js"

const form = document.querySelector("#todo-form")
const input = document.querySelector("#todo-input")
const listEl = document.querySelector("#todo-list")
const filterButtons = document.querySelectorAll("[data-filter]")

let todos = []
let currentFilter = "all"
let nextId = 1

function render() {
    const visibleTodos = filterTodos(todos, currentFilter)

    listEl.textContent = ""
    visibleTodos.forEach((todo) => {
        const li = document.createElement("li")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = todo.done
        checkbox.addEventListener("change", () => {
            todos = toggleTodo(todos, todo.id)
            render()
        })

        const span = document.createElement("span")
        span.textContent = todo.text
        if (todo.done) {
            span.style.textDecoration = "line-through"
        }

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "削除"
        deleteButton.addEventListener("click", () => {
            todos = removeTodo(todos, todo.id)
            render()
        })

        li.append(checkbox, span, deleteButton)
        listEl.appendChild(li)
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = input.value.trim()
    if (text === "") {
        return
    }

    todos = addTodo(todos, createTodo(nextId, text))
    nextId++
    input.value = ""
    render()
})

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter
        render()
    })
})

render()
