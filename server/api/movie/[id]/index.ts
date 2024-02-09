export default defineEventHandler(async (event: any) => {
  const { API_KEY, API_LANG, API_URL } = useRuntimeConfig()
  const { id } = event.context.params

  const data = await $fetch(`${API_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: API_LANG,
      append_to_response: 'videos,credits,images,external_ids,release_dates',
      include_image_language: 'en',
    },
  })

  return data || {}
})
