<template>
  <nav class="bg-black/70 bg-white/10" fixed left-0 right-0 top-0 z-1 w-full flex items-center justify-center sm:h-15>
    <img src="~/assets/images/logo2.png" alt="Movieflix" text-teal-500 class="logo">
  </nav>
</template>

<style scoped>
.logo {
  width: 19em;
  height: 3.7em;
}

@media all and (max-width: 620px) {
  .logo {
    width: 13em;
    height: 2.7em;
  }
}
</style>
