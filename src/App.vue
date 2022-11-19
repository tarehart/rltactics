<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <img alt="Vue logo" class="logo" src="@/assets/strategy.png" width="50" height="50" />
      <div class="wrapper">
        <h2>RL Tactics</h2>
        <RouterLink to="/">Home</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

.logo {
  display: inline-block;
  margin-right: 20px;
}

nav {
  width: 100%;
  text-align: center;
  display: flex;
  place-items: center;
  font-size: 1.2em;
  margin-bottom: 1em;
}

nav .wrapper {
  display: flex;
  place-items: baseline;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
