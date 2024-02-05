export default defineEventHandler(async (event) => {
  const { API_KEY, API_URL } = useRuntimeConfig()
  const { type } = event.context.params
  const { page } = getQuery(event)

  const data = await $fetch(`${API_URL}/trending/${type}/week`, {
    params: {
      api_key: API_KEY,
      page: page || 1,
    },
  })

  return data || {}
})
