<template>
  <div class="home-layout">
    <!-- 左侧内容区 (40%) -->
    <div class="main-content">
      <!-- Hero Section -->
      <section class="section hero-section">
        <h1 class="hero-greeting">Hi! AgenticDataBench</h1>
        <p class="hero-desc">
          AgenticDataBench is a realistic and diverse benchmark for evaluating data agents with fine-grained skill labels.
          It covers <strong>354 data science tasks</strong> across <strong>15 domains</strong>,
          built on <strong>97 real-world datasets</strong> (27.3 GB, 135.9M rows) with
          <strong>433 fine-grained ground-truth labels</strong>.
        </p>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-num">354</span>
            <span class="stat-label">Tasks</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">97</span>
            <span class="stat-label">Datasets</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">27.3 GB</span>
            <span class="stat-label">Data Volume</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">433</span>
            <span class="stat-label">Skill Labels</span>
          </div>
        </div>

        <div class="hero-links">
          <a href="https://huggingface.co/datasets/shawnzzzh/AgenticDataBench" target="_blank" rel="noopener noreferrer" class="hero-link">
            📦 Dataset
          </a>
          <a v-if="false" href="#" class="hero-link">
            📄 Paper
          </a>
          <a href="https://github.com/AgenticDataBench/AgenticDataBench" target="_blank" rel="noopener noreferrer" class="hero-link">
            💻 Code
          </a>
        </div>
      </section>

      <!-- Evaluation Modes -->
      <section class="section modes-section">
        <h2 class="section-heading">Evaluation Modes</h2>
        <p class="section-intro">
          The two evaluation scenarios supported by AgenticDataBench covering different agent capabilities:
        </p>
        <div class="modes-grid">
          <div class="mode-card">
            <h3 class="mode-card-title">🎯 DevSet Evaluation</h3>
            <p class="mode-card-desc">
              Evaluate agents on the standard DevSet benchmark. Submit a .jsonl results file via email and get accuracy scores across skills and domains.
              This is a <strong>passive mode</strong> where the evaluation workflow is fixed.
            </p>
          </div>
          <div class="mode-card">
            <h3 class="mode-card-title">🚀 Custom Code Evaluation</h3>
            <p class="mode-card-desc">
              Submit your agent code archive via email for sandboxed execution and evaluation.
              The system captures execution traces for detailed analysis.
              This is an <strong>active mode</strong> where the workflow is dynamic and led by the agent.
            </p>
          </div>
        </div>
      </section>

      <!-- News Section -->
      <section v-if="false" class="section news-section">
        <h2 class="section-heading">News</h2>
        <div class="news-list">
          <div class="news-item news-highlight">
            <span class="news-date">Apr 28, 2026</span>
            <span class="news-text">AgenticDataBench backend launched with distributed scheduling, gVisor container sandboxing, and email-based submission integration.</span>
          </div>
          <div class="news-item">
            <span class="news-date">Apr 24, 2026</span>
            <span class="news-text">Frontend redesigned with a cleaner, more modern interface inspired by BIRD-Interact.</span>
          </div>
          <div class="news-item">
            <span class="news-date">Apr 15, 2026</span>
            <span class="news-text">Initial benchmark results released for DevSet evaluation across multiple frontier models.</span>
          </div>
        </div>
      </section>

      <!-- Dataset Info -->
      <section v-if="false" class="section dataset-section">
        <h2 class="section-heading">Dataset &amp; Ground Truth</h2>
        <p class="section-body">
          AgenticDataBench is built on real-world data science tasks collected from 15 domains including finance, healthcare, e-commerce, climate, and more.
          Each task is annotated with fine-grained skill labels covering data loading, cleaning, analysis, visualization, and multi-step reasoning.
        </p>
        <p class="section-body">
          To mitigate data leakage, ground-truth labels and test cases are not publicly released.
          To request access to the evaluation ground truth, please email
          <code>agentic-databench@example.com</code> with the tag <strong>[AgenticDataBench GT]</strong> in the subject line.
        </p>
      </section>

      <!-- Benchmark Data -->
      <section class="section benchmark-section">
        <h2 class="section-heading">Benchmark Data</h2>
        <div class="benchmark-grid">
          <div class="benchmark-item">
            <h3 class="benchmark-title">📁 Datasets</h3>
            <p class="benchmark-desc">Download from HuggingFace → <a href="https://github.com/AgenticDataBench/AgenticDataBench/tree/main/testbed/datasets" target="_blank" rel="noopener noreferrer"><code>testbed/datasets/</code></a></p>
          </div>
          <div class="benchmark-item">
            <h3 class="benchmark-title">🛠️ Skills</h3>
            <p class="benchmark-desc"><a href="https://github.com/AgenticDataBench/AgenticDataBench/blob/main/skill_cluster/data/skill-descriptions.jsonl" target="_blank" rel="noopener noreferrer"><code>skill_cluster/data/skill-descriptions.jsonl</code></a></p>
          </div>
          <div class="benchmark-item">
            <h3 class="benchmark-title">📋 Tasks</h3>
            <p class="benchmark-desc"><a href="https://github.com/AgenticDataBench/AgenticDataBench/tree/main/testbed/tasks" target="_blank" rel="noopener noreferrer"><code>testbed/tasks</code></a></p>
          </div>
          <div class="benchmark-item">
            <h3 class="benchmark-title">✅ Ground-truth</h3>
            <p class="benchmark-desc"><a href="https://github.com/AgenticDataBench/AgenticDataBench/tree/main/testbed/gold" target="_blank" rel="noopener noreferrer"><code>testbed/gold</code></a></p>
          </div>
        </div>
        <p class="section-body" style="margin-top: 16px;">
          For leaderboard integrity, we withhold 100 tasks as a private test set. These tasks will be publicly released once the benchmark loses its evaluation significance.
        </p>
      </section>

      <!-- Submission -->
      <section class="section submission-section">
        <h2 class="section-heading">Submission</h2>
        <p class="section-intro">
          AgenticDataBench accepts email submissions only.
          Send your results or agent code to our team for evaluation.
        </p>
        <div class="submit-grid">
          <div class="submit-card">
            <h3 class="submit-card-title">📦 DevSet Evaluation</h3>
            <p class="submit-card-desc">
              Submit your prediction results as a .jsonl file.
            </p>
            <div class="email-format">
              <code>[AgenticDataBench-DevSet][Team][Method][Model]</code>
            </div>
            <p class="email-hint">Attach: .jsonl results file</p>
          </div>
          <div class="submit-card">
            <h3 class="submit-card-title">🚀 Custom Code Evaluation</h3>
            <p class="submit-card-desc">
              Submit your agent code archive for sandboxed execution.
            </p>
            <div class="email-format">
              <code>[AgenticDataBench-Custom][Team][Method][Model]</code>
            </div>
            <p class="email-hint">Attach: .tar.gz or .zip code archive</p>
          </div>
        </div>
        <p class="section-body" style="margin-top: 16px;">
          Send submissions to <code>agentic-databench@example.com</code>.
          Our team will review and add results to the leaderboard within 3-5 business days.
        </p>
      </section>

      <!-- Subscribe -->
      <section v-if="false" class="section subscribe-section">
        <h2 class="section-heading">Subscribe to Updates</h2>
        <p class="section-body">
          AgenticDataBench is a long-term research project aimed at advancing data agent capabilities.
          Enter your email to receive the latest updates on new tasks, datasets, and benchmark results.
        </p>
        <div class="subscribe-form">
          <a-input
            v-model:value="subscribeEmail"
            placeholder="your@email.com"
            class="subscribe-input"
            @pressEnter="handleSubscribe"
          />
          <a-button type="primary" @click="handleSubscribe">Subscribe</a-button>
        </div>
      </section>

      <!-- Citation -->
      <section class="section citation-section">
        <h2 class="section-heading">Citation</h2>
        <pre class="citation-block">@article{agenticdatabench2026,
  title        = {AgenticDataBench: A Comprehensive Benchmark for Data Agents},
  author       = {...},
  journal      = {...},
  year         = {2026}
}</pre>
      </section>
    </div>

    <!-- 右侧 Leaderboard (60%) - 固定在右侧 -->
    <aside class="sidebar">
      <div class="leaderboard-sticky">
        <section class="leaderboard-section">
          <h2 class="section-heading">Leaderboard</h2>

          <!-- Mode Switcher like BIRD -->
          <div class="lb-mode-switch">
            <a-radio-group v-model:value="lbMode" button-style="solid" size="small">
              <a-radio-button value="devset">DevSet</a-radio-button>
              <a-radio-button value="custom">Custom</a-radio-button>
            </a-radio-group>
          </div>

          <!-- Filters -->
          <div class="lb-filters">
            <a-select v-model:value="lbMetric" style="width: 100%;" size="small" placeholder="Select metric">
              <a-select-option value="test">Test Accuracy</a-select-option>
              <a-select-option value="dev">Dev Accuracy</a-select-option>
            </a-select>
          </div>

          <Leaderboard :data="leaderboardData" />

          <a-empty v-if="leaderboardData.length === 0" description="No submissions yet" style="margin-top: 16px;" />

          <div class="lb-note">
            <strong>Note:</strong> To get verified, please submit your codebase for pipeline evaluation.
          </div>
        </section>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { message } from 'ant-design-vue'
import Leaderboard from '../components/Leaderboard.vue'
import type { LeaderboardEntry } from '../types'
const subscribeEmail = ref('')
const lbMode = ref('devset')
const lbMetric = ref('test')

const leaderboardData = ref<LeaderboardEntry[]>([])

onMounted(async () => {
  try {
    const base = import.meta.env.BASE_URL || '/'
    const resp = await fetch(`${base}leaderboard.json`)
    if (resp.ok) {
      leaderboardData.value = await resp.json()
    }
  } catch {
    // leaderboard.json not available
  }
})

function handleSubscribe() {
  if (subscribeEmail.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscribeEmail.value)) {
    message.success('Subscribed! You will receive updates.')
    subscribeEmail.value = ''
  } else {
    message.error('Please enter a valid email address.')
  }
}
</script>

<style scoped>
.home-layout {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
}

.main-content {
  min-width: 0;
}

.sidebar {
  position: relative;
}

.leaderboard-sticky {
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

.section {
  padding: 32px 0;
  border-bottom: 1px solid var(--color-border);
}

.section:last-child {
  border-bottom: none;
}

.section-heading {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--color-border-strong);
}

.section-intro {
  font-size: 15px;
  margin-bottom: 20px;
  line-height: 1.6;
}

.section-body {
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 12px;
}

.hero-section {
  padding-top: 24px;
}

.hero-greeting {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
}

.hero-stats {
  margin: 20px 0;
  justify-content: flex-start;
}

.stat-num {
  font-size: 28px;
}

.stat-label {
  font-size: 12px;
  margin-top: 4px;
}

.modes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}

.mode-card-title {
  font-size: 16px;
  margin-bottom: 10px;
}

.mode-card-desc {
  font-size: 14px;
  margin-bottom: 14px;
}

.news-list {
  margin-top: 8px;
}

.news-item {
  padding: 10px 0;
  gap: 12px;
}

.news-date {
  font-size: 12px;
  min-width: 100px;
}

.news-text {
  font-size: 14px;
  line-height: 1.5;
}

.submit-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}

.submit-card {
  padding: 16px;
}

.submit-card-title {
  font-size: 15px;
  margin-bottom: 10px;
}

.submit-card-desc {
  font-size: 13px;
  margin-bottom: 12px;
}

.email-format code {
  font-size: 11px;
  margin-bottom: 2px;
}

.email-hint {
  font-size: 11px;
}

.subscribe-form {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.subscribe-input {
  flex: 1;
}

.benchmark-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}

.benchmark-item {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 16px;
}

.benchmark-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
}

.benchmark-desc {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.benchmark-desc code {
  background: var(--color-bg-code);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
}

.citation-block {
  font-size: 12px;
  line-height: 1.5;
}

.leaderboard-section {
  border-radius: 12px;
  padding: 20px;
}

.lb-mode-switch,
.lb-filters {
  margin-bottom: 12px;
}

.lb-note {
  margin-top: 12px;
  font-size: 12px;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .home-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .sidebar,
  .leaderboard-sticky {
    position: static;
    max-height: none;
  }

  .modes-grid,
  .submit-grid {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    justify-content: center;
  }

  .stat-divider {
    display: none;
  }
}
</style>