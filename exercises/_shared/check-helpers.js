import assert from "node:assert/strict"

/**
 * 1つの確認項目を実行し、結果を分かりやすく表示するヘルパーです。
 * fn の中で assert が失敗すると、成功/失敗をコンソールに表示します。
 * fn は同期関数・非同期関数（async関数）のどちらでも構いません。
 * 非同期の確認を行う場合は `await check(...)` のように呼び出してください。
 *
 * @param {string} description - この確認が何を確かめているかの説明
 * @param {() => void | Promise<void>} fn - assert を使った確認処理
 */
export async function check(description, fn) {
    try {
        await fn()
        console.log(`✅ ${description}`)
    } catch (error) {
        console.error(`❌ ${description}`)
        console.error(`   期待通りになりませんでした: ${error.message}`)
        process.exitCode = 1
    }
}

export { assert }
