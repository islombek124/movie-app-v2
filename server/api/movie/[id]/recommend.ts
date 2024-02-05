export default defineEventHandler(async (event) => {
  const { API_URL, API_KEY, API_LANG } = useRuntimeConfig()
  const { id } = event.context.params
  const { page } = getQuery(event)

  const data = await $fetch(`${API_URL}/movie/${id}/recommendations`, {
    params: {
      api_key: API_KEY,
      language: API_LANG,
      page: page || 1,
    },
  })

  return data || {}
})
