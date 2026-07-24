export async function fetchJson(url) {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
}

export async function fetchAllJson(urls) {
    const promises = urls.map((url) => fetchJson(url))
    return await Promise.all(promises)
}
