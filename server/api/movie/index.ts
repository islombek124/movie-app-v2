export default defineEventHandler(async (event) => {
  const { API_KEY, API_LANG, API_URL } = useRuntimeConfig()
  const { type, page } = getQuery(event)

  const data = await $fetch(`${API_URL}/movie/${type}`, {
    params: {
      api_key: API_KEY,
      language: API_LANG,
      page,
    },
  })

  return data || {}
})
