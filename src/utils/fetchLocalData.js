export async function fetchLocalData(fileName) {
  try {
    const response = await fetch(`/data/${fileName}`)
    console.log('response', response)
    if (!response.ok) throw new Error('Failed to load local data')
    return await response.json()
  } catch (error) {
    console.error('Local fetch error:', error)
    return []
  }
}
