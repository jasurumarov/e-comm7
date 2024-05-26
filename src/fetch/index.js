export async function getData(path) {
    const res = await fetch(`https://fakestoreapi.com${path}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}