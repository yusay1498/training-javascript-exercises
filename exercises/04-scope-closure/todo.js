/**
 * increment / reset / getValue を持つカウンターを作ります。
 * 呼び出すたびに独立したカウントを持つ必要があります。
 *
 * @returns {{ increment: () => number, reset: () => void, getValue: () => number }}
 */
export function createCounter() {
    // TODO: ここを実装してください（count変数をクロージャで保持する）
}

/**
 * 残高を持つ簡易的な銀行口座を作ります。
 * 残高は外部から直接書き換えられないよう、クロージャで隠蔽してください。
 *
 * @param {number} initialBalance
 * @returns {{ deposit: (amount: number) => void, withdraw: (amount: number) => boolean, getBalance: () => number }}
 */
export function createBankAccount(initialBalance) {
    // TODO: ここを実装してください
}
