<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="James" class="logo" src="./assets/james/james.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You Jamsed it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">James</RouterLink>
      </nav>
    </div>
  </header>

  <main class="main">
    <RouterView />
  </main>

  <footer class="footer">
    <div class="container">
      <p>
        Free software, No Rights Reserved, Licensed Under GPLv3.0 :
        <a href="https://github.com/Snowman-scott/Snowman-scott.github.io" target="_blank">
          Check out the source code on my GitHub.</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.nav {
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}

.nav-logo {
  font-weight: 700;
  color: var(--text);
  font-size: 1rem;
}

.nav-logo:hover {
  text-decoration: none;
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 4px;
}

.nav-link {
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--text-dim);
}

.nav-link:hover {
  color: var(--text);
  background: var(--accent-muted);
  text-decoration: none;
}

.nav-link.router-link-exact-active {
  color: var(--accent);
}

.main {
  padding: 80px 0;
  min-height: calc(100vh - 112px);
}

.footer {
  border-top: 1px solid var(--border);
  padding: 24px 0;
  color: var(--text-muted);
  font-size: 0.8rem;
}
</style>
