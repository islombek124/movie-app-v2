import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const searchOpen = ref<boolean>(false)
  const fromPage = ref<string>('/')

  function toggleSearch(): void {
    searchOpen.value = !searchOpen.value
  }

  function openSearch(): void {
    searchOpen.value = true
  }

  function closeSearch(): void {
    searchOpen.value = false
  }

  function setFromPage(page: any): void {
    fromPage.value = page
  }

  return { searchOpen, fromPage, toggleSearch, openSearch, closeSearch, setFromPage }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot))
