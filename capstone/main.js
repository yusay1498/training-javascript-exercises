import { fetchJson } from "../exercises/10-async-await/todo.js"
import { filterPassed } from "../exercises/08-array-methods/todo.js"
import { renderMemberList } from "../exercises/11-dom-api/todo.js"
import { renderUserComment } from "../exercises/13-security-xss/todo.js"

const PASSING_SCORE = 40

const listEl = document.querySelector("#member-list")
const loadingEl = document.querySelector("#loading")
const errorEl = document.querySelector("#error")
const summaryEl = document.querySelector("#summary")
const searchInput = document.querySelector("#search-input")
const passedOnlyCheckbox = document.querySelector("#passed-only-checkbox")

let allMembers = []

/**
 * 検索欄・チェックボックスの状態に応じてメンバーを絞り込み、一覧を再描画します。
 */
function applyFiltersAndRender() {
    // TODO: ここを実装してください
    //
    // 1. searchInput.value（検索語）で allMembers を名前で絞り込む
    // 2. passedOnlyCheckbox.checked が true なら、さらに filterPassed で絞り込む
    // 3. renderMemberList(listEl, 絞り込んだ配列) で一覧を描画する
    // 4. summaryEl.textContent に「表示件数: N件」のようなサマリーを表示する
}

async function init() {
    try {
        // TODO: fetchJson を使って "./members.json" を取得し、allMembers に保存してください

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
