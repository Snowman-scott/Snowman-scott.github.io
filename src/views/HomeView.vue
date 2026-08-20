<script setup lang="js"></script>

<template>
  <div class="container">
    <section class="hero">
      <h1 class="hero-title">Rose Scott</h1>
      <p class="hero-desc">
        Blurb about me
      </p>
      <p class="hero-desc">What I am good with</p>
      <p class="hero-stack">
        My stacks
      </p>
      <div class="hero-links">
        <a href="#/projects" class="hero-links">projects</a>
        <a href="#/contact" class="hero-links">Contact</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  max-width: 600px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.hero-desc {
  color: var(--text-dim);
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.hero-stack {
  color: var(--accent);
  font-size: 0.88rem;
  margin-bottom: 16px;
  line-height: 1.8;
}

.hero-links {
  display: flex;
  gap: 24px;
  margin-top: 32px;
}

.hero-link {
  color: var(--accent);
  font-size: 0.95rem;
}
</style>
