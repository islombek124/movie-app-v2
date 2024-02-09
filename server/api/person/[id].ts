export default defineEventHandler(async (e: any) => {
  const { API_KEY, API_LANG, API_URL } = useRuntimeConfig(e)
  const { id } = e.context.params

  const data = await $fetch(`${API_URL}/person/${id}`, {
    params: {
      api_key: API_KEY,
      language: API_LANG,
      append_to_response: 'images,combined_credits,external_ids',
      include_image_language: 'en',
    },
  })

  return data || {}
})
