<template>
  <footer relative bottom-0 mx-3 overflow-x-hidden pb-25 pt-10 text-zinc-400 sm:mx-6 xl:my-5 xl:ml-25 xl:px-10 xl:py-10>
    <p>© {{ new Date().getFullYear() }} Movieflix. All rights reserved.</p>
    <p>
      Designed and built by <a underline target="_blank" href="https://github.com/islombek124">I. Murodov</a>, data
      provided by <a underline target="_blank" href="https://www.themoviedb.org/" rel="noopener">TMDb</a>.
    </p>
  </footer>
</template>

<style scoped>
a:hover svg path {
  fill: white;
}
</style>
