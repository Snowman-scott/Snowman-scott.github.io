<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <nav class="nav">
      <div class="container nav-inner">
        <RouterLink to="/" class="nav-logo">Rose Scott</RouterLink>
      </div>
      <div class="nav-links">
        <RouterLink to="/" class="nav-link" exact>Home</RouterLink>
        <RouterLink to="/projects" class="nav-link">Repos</RouterLink>
        <RouterLink to="/contact" class="nav-link">Get In touch</RouterLink>
      </div>
    </nav>
  </div>

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
