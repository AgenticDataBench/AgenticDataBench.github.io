<template>
  <a-layout class="app-layout">
    <a-layout-header class="app-header">
      <div class="header-inner">
        <router-link to="/" class="logo-link">
          <img src="/logo.png" alt="AgenticDataBench" class="logo-icon" />
          <span class="logo-title">AgenticDataBench</span>
        </router-link>
        <a class="header-link" href="https://github.com/AgenticDataBench/AgenticDataBench" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </a-layout-header>
    <a-layout-content class="app-content">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="app-footer">
      <div class="footer-content">
        <p class="footer-text">
          AgenticDataBench &copy; 2026 &mdash; A Realistic and Diverse Data Agent Benchmark with Fine-Grained Skill Labels
        </p>
        <div class="footer-links">
          <a href="https://github.com/AgenticDataBench/AgenticDataBench" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://huggingface.co/datasets/shawnzzzh/AgenticDataBench" target="_blank" rel="noopener noreferrer">HuggingFace</a>
        </div>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
}

.app-header {
  background: var(--color-header-bg);
  padding: 0 24px;
  height: 56px;
  line-height: 56px;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-icon {
  width: 28px;
  height: 28px;
  border-radius: 4px;
}

.logo-title {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}

.header-link {
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s;
}

.header-link:hover {
  color: #fff;
}

.app-content {
  background: var(--color-bg);
  min-height: calc(100vh - 56px - 64px);
}

.app-footer {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 13px;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  padding: 24px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-text {
  margin-bottom: 8px;
}

.footer-links {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.footer-links a {
  color: var(--color-text-secondary);
  font-size: 13px;
}

.footer-links a:hover {
  color: var(--color-brand);
}
</style>