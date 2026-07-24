export function createCounter() {
    let count = 0

    return {
        increment: () => {
            count++
            return count
        },
        reset: () => {
            count = 0
        },
        getValue: () => count
    }
}

export function createBankAccount(initialBalance) {
    let balance = initialBalance

    return {
        deposit: (amount) => {
            balance += amount
        },
        withdraw: (amount) => {
            if (amount > balance) {
                return false
            }
            balance -= amount
            return true
        },
        getBalance: () => balance
    }
}
