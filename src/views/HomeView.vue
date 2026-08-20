<script setup lang="js"></script>

<template>
  <div class="container">
    <section class="hero">
      <h1 class="hero-title">Rose Scott</h1>
      <p class="hero-desc">
        I am a 2nd year College student, I'm a developer with 6+ years of experience across many different forms of programming.
        I have been taught to code in a formal setting but have expanded way beyond that by myself.
      </p>
      <p class="hero-desc">I am good with Backend development, Hardware, and Networking</p>
      <p class="hero-stack">
        Go  &ndash;  Python  &ndash;  HTML / CSS / Javascript / vue  &ndash;  HolyC
      </p>
      <div class="hero-links">
        <a href="#/projects" class="hero-links">projects &rarr;</a>
        <a href="#/contact" class="hero-links">Contact &rarr;</a>
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
