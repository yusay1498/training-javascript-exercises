import { fetchJson } from "../../exercises/10-async-await/answer/todo.js"
import { filterPassed } from "../../exercises/08-array-methods/answer/todo.js"
import { renderMemberList } from "../../exercises/11-dom-api/answer/todo.js"
import { renderUserComment } from "../../exercises/13-security-xss/answer/todo.js"

const PASSING_SCORE = 40

const listEl = document.querySelector("#member-list")
const loadingEl = document.querySelector("#loading")
const errorEl = document.querySelector("#error")
const summaryEl = document.querySelector("#summary")
const searchInput = document.querySelector("#search-input")
const passedOnlyCheckbox = document.querySelector("#passed-only-checkbox")

let allMembers = []

function applyFiltersAndRender() {
    const keyword = searchInput.value.trim()
    let filtered = allMembers.filter((member) => member.name.includes(keyword))

    if (passedOnlyCheckbox.checked) {
        filtered = filterPassed(filtered, PASSING_SCORE)
    }

    renderMemberList(listEl, filtered)
    summaryEl.textContent = `表示件数: ${filtered.length}件`
}

async function init() {
    try {
        allMembers = await fetchJson("../members.json")

        loadingEl.style.display = "none"
        applyFiltersAndRender()
    } catch (error) {
        loadingEl.style.display = "none"
        errorEl.style.display = "block"
        renderUserComment(errorEl, error.message)
    }
}

searchInput.addEventListener("input", applyFiltersAndRender)
passedOnlyCheckbox.addEventListener("change", applyFiltersAndRender)

init()
