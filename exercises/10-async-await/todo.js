/**
 * url から JSON を取得します。
 * レスポンスが ok でない場合は、response.status を含むエラーを throw してください。
 *
 * @param {string} url
 * @returns {Promise<unknown>}
 */
export async function fetchJson(url) {
    // TODO: ここを実装してください
}

/**
 * urls（URLの配列）を並列にすべて取得し、結果の配列を返します。
 *
 * @param {string[]} urls
 * @returns {Promise<unknown[]>}
 */
export async function fetchAllJson(urls) {
    // TODO: Promise.all と fetchJson を使って実装してください
}
