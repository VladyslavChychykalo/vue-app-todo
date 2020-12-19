<template>
  <nav class="navbar">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <button class="pointer" @click="$emit('click')">
          burger
        </button>
      </div>
    </div>

    <router-link to="/">Logo</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("./Navbar.scss");
</style>
