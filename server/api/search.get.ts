export default defineEventHandler(async (event) => {
  const { API_KEY, API_LANG, API_URL } = useRuntimeConfig()
  const { q, page } = getQuery(event)

  const data = await $fetch(`${API_URL}/search/multi`, {
    params: {
      api_key: API_KEY,
      language: API_LANG,
      query: q,
      page: page || 1,
    },
  })

  return data || {}
})
