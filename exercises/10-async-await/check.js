import { check, assert } from "../_shared/check-helpers.js"
import { fetchJson, fetchAllJson } from "./todo.js"

// 実際のネットワーク通信をせず、fetch を偽のレスポンスに差し替えて確認します。
const routes = {
    "/users/1": { status: 200, body: { id: 1, name: "Alice" } },
    "/users/2": { status: 200, body: { id: 2, name: "Bob" } },
    "/users/999": { status: 404, body: null }
}

globalThis.fetch = async (url) => {
    const route = routes[url]
    if (!route) {
        throw new TypeError(`Unexpected URL in mock fetch: ${url}`)
    }
    return {
        ok: route.status < 400,
        status: route.status,
        json: async () => route.body
    }
}

await check("fetchJson は成功時にJSONを返す", async () => {
    const user = await fetchJson("/users/1")
    assert.deepEqual(user, { id: 1, name: "Alice" })
})

await check("fetchJson は404の場合、エラーをthrowする", async () => {
    await assert.rejects(
        () => fetchJson("/users/999"),
        /404/
    )
})

await check("fetchAllJson は複数のURLを並列に取得する", async () => {
    const users = await fetchAllJson(["/users/1", "/users/2"])
    assert.deepEqual(users, [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ])
})
