<template>
  <a-layout class="app-layout">
    <a-layout-header class="app-header">
      <div class="header-inner">
        <div class="header-partners">
          <a href="https://www.tsinghua.edu.cn/en/" target="_blank" rel="noopener noreferrer" class="partner-link" title="Tsinghua University">
            <img src="/tsinghua.png" alt="Tsinghua University" class="partner-icon partner-icon-wide" />
          </a>
        </div>
        <span class="header-divider"></span>
        <router-link to="/" class="logo-link">
          <span class="logo-title">AgenticDataBench</span>
        </router-link>
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
  gap: 12px;
}

.header-partners {
  display: flex;
  align-items: center;
  gap: 10px;
}

.partner-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  opacity: 0.85;
  transition: opacity 0.2s;
}

.partner-link:hover {
  opacity: 1;
}

.partner-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.partner-icon-wide {
  width: auto;
  height: 28px;
  border-radius: 2px;
}

.header-divider {
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.2);
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
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
