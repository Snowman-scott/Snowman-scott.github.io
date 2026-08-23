<script setup lang="js">
defineProps({
  title: String,
  category: String,
  tags: Array,
  stack: Array,
  description: String,
  link: String
})
</script>

<template>
  <a v-if="link" :href="link" target="_blank" rel="noopener" class="card">
    <div class="card-head">
      <span class="card-cat">{{ category }}</span>
      <span class="card-ext">&#x2197;</span>
    </div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-desc">{{ description }}</p>
    <div class="card-foot">
      <div class="card-stack">
        <span v-for="tech in stack" :key="tech" class="chip">{{ tech }}</span>
      </div>
      <!-- ><div class="card-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div> -->
    </div>
  </a>
  <div v-else class="card">
    <div class="card-head">
      <span class="card-cat">{{ category }}</span>
    </div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-desc">{{ description }}</p>
    <div class="card-foot">
      <div class="card-stack">
        <span v-for="tech in stack" :key="tech" class="chip">{{ tech }}</span>
      </div>
      <div class="card-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: block;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  color: inherit;
  text-decoration: none;
  transition:
    border-color 0.15s,
    background 0.15s;
}

.card:hover {
  border-color: var(--border-light);
  background: var(--bg-alt);
  text-decoration: none;
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.card-cat {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.card-ext {
  font-size: 1.1rem;
  color: var(--text-dim);
  line-height: 1;
}

.card-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 6px;
}

.card-desc {
  font-size: 0.88rem;
  color: var(--text-dim);
  line-height: 1.6;
  margin-bottom: 10px;
}

.card-foot {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.card-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.chip {
  font-size: 0.78rem;
  color: var(--accent);
  background: var(--accent-muted);
  padding: 2px 8px;
  border-radius: 4px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tag {
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--bg-alt);
  padding: 2px 8px;
  border-radius: 4px;
}
</style>
