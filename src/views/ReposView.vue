<script setup lang="js">
import ProjectCard from "@/components/ProjectCard.vue"
import { repos } from  "@/data/repos.js"
</script>

<template>
  <div class="container">
    <h1 class="page-title">Repos</h1>
    <div class="grid">
      <ProjectCard
        v-for="repo in repos"
        :key="repo.id"
        :title="repo.title"
        :category="repo.category"
        :tags="repo.tags"
        :stack="repo.stack"
        :description="repo.description"
        :link="repo.link"
      />
    </div>
  </div>
</template>

<style scoped>
.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
  letter-spacing: -0.02em;
}

.grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
