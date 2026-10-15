<template>
  <div class="home-layout">
    <!-- Benchmark information pane -->
    <div class="main-content" role="region" aria-label="Benchmark information" tabindex="0">
      <!-- Hero Section -->
      <section class="section hero-section">
        <span class="eyebrow hero-eyebrow">REAL-WORLD DATA AGENT BENCHMARK</span>
        <h1 class="hero-greeting">AgenticDataBench</h1>
        <p class="hero-tagline">Real data. Diverse tasks.<br />Measurable progress.</p>
        <p class="hero-desc">
          A realistic and diverse benchmark for data agents, covering
          <strong>344 data science tasks</strong> across <strong>15 domains</strong>.
        </p>
        <p class="hero-desc hero-desc-detail">
          Built on <strong>97 real-world datasets</strong> spanning 123.1M rows,
          with <strong>433 fine-grained ground-truth skill labels</strong>.
        </p>

        <div class="hero-stats" aria-label="Benchmark at a glance">
          <div class="stat-item">
            <span class="stat-num">344</span>
            <span class="stat-label">Tasks</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">97</span>
            <span class="stat-label">Datasets</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">27.3<span class="stat-unit">GB</span></span>
            <span class="stat-label">Data Volume</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">433</span>
            <span class="stat-label">Skill Labels</span>
          </div>
          <div class="stat-human">
            <span class="human-label"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="6" r="3" /><path d="M4 17v-2a6 6 0 0 1 12 0v2" /></svg>Human Performance</span>
            <span class="human-value">84–90<span>%</span></span>
          </div>
        </div>

        <div class="hero-links">
          <a href="https://huggingface.co/datasets/shawnzzzh/AgenticDataBench" target="_blank" rel="noopener noreferrer" class="hero-link">
            📦 Dataset
          </a>
          <a href="https://arxiv.org/abs/2607.01647" target="_blank" rel="noopener noreferrer" class="hero-link">
            📄 Paper
          </a>
          <a href="https://github.com/AgenticDataBench/AgenticDataBench" target="_blank" rel="noopener noreferrer" class="hero-link">
            💻 Code
          </a>
          <router-link :to="{ path: '/', hash: '#citation' }" class="hero-link">📚 Cite us</router-link>
        </div>
      </section>

      <!-- News -->
      <section class="section news-section" aria-labelledby="news-heading">
        <div class="section-heading-row"><h2 id="news-heading" class="section-heading">News &amp; updates</h2><button type="button" class="text-button" :disabled="!manifest" @click="historyOpen = true">View history ↗</button></div>
        <ul class="news-list">
          <li v-if="latestVersion" class="update-news">
            <div class="news-update-meta"><span class="release-badge">{{ latestVersion.id }} RELEASE</span><time :datetime="latestVersion.date">{{ formatReleaseDate(latestVersion.date) }}</time></div>
            <h3 class="news-title">Updated evaluator.<br />Refreshed leaderboard.</h3>
            <p class="news-paper">Improved table scoring and re-evaluated results. Browse the latest scores or revisit the original leaderboard.</p>
            <button type="button" class="text-button" @click="historyOpen = true">See what changed <span aria-hidden="true">→</span></button>
          </li>
          <li class="publication-news">
            <span class="news-category">Paper acceptance</span>
            <h3 class="news-title">Accepted at <strong>VLDB 2027</strong></h3>
            <p class="news-paper">AgenticDataBench: A Comprehensive Benchmark for Data Agents</p>
            <a class="news-paper-link" href="https://arxiv.org/abs/2607.01647" target="_blank" rel="noopener noreferrer">
              Read the paper <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
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
            </p>
          </div>
          <div class="mode-card">
            <h3 class="mode-card-title">🚀 TestSet Evaluation</h3>
            <p class="mode-card-desc">
              Submit your agent code archive via email for sandboxed execution and evaluation.
              The system captures execution traces for detailed analysis.
            </p>
          </div>
        </div>
      </section>

      <!-- Benchmark Data -->
      <section class="section benchmark-section">
        <h2 class="section-heading">Benchmark Data</h2>
        <div class="benchmark-grid">
          <div class="benchmark-item">
            <h3 class="benchmark-title">📁 Datasets</h3>
            <p class="benchmark-desc">Download from HuggingFace → <a href="https://huggingface.co/datasets/shawnzzzh/AgenticDataBench" target="_blank" rel="noopener noreferrer"><code>testbed/datasets/</code></a></p>
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
          The leaderboard evaluates 246 DevSet tasks and 98 private TestSet tasks. The private tasks will be publicly released once the benchmark loses its evaluation significance.
        </p>
      </section>

      <!-- Submission -->
      <section id="submission" class="section submission-section">
        <h2 class="section-heading">Submission</h2>
        <SubmissionDetails compact />
      </section>

      <!-- Citation -->
      <section id="citation" class="section citation-section" aria-labelledby="citation-heading">
        <h2 id="citation-heading" class="section-heading">Citation</h2>
        <p class="section-body">
          Feel free to cite us
          (<a href="https://arxiv.org/abs/2607.01647" target="_blank" rel="noopener noreferrer">paper link</a>)
          if you like this project.
        </p>
        <div class="citation-toolbar">
          <span>BibTeX</span>
          <a-button size="small" @click="copyCitation">Copy BibTeX</a-button>
        </div>
        <pre class="citation-block" tabindex="0" aria-label="BibTeX citation"><code>{{ citation }}</code></pre>
      </section>
    </div>

    <aside id="leaderboard" class="sidebar" aria-labelledby="leaderboard-heading" tabindex="0">
      <section class="leaderboard-section" aria-labelledby="leaderboard-heading" :aria-busy="loading">
        <div class="leaderboard-heading-row">
          <div><span class="eyebrow">EVALUATION RESULTS</span><h2 id="leaderboard-heading">Leaderboard</h2></div>
          <span v-if="selectedVersion" :class="['version-status', { archived: !isCurrent }]"><span class="status-dot"></span>{{ isCurrent ? 'Latest version' : 'Historical version' }}</span>
        </div>
        <p class="leaderboard-intro">Compare data agents across real-world tasks.</p>

        <div v-if="manifest" class="version-toolbar">
          <div class="version-control"><label for="leaderboard-version">Evaluator version</label>
            <select id="leaderboard-version" :value="selectedVersionId" @change="selectVersion(($event.target as HTMLSelectElement).value)">
              <option v-for="version in manifest.versions" :key="version.id" :value="version.id">{{ version.id }} · {{ version.label }}{{ version.id === manifest.defaultVersion ? ' (Latest)' : '' }}</option>
            </select>
          </div>
          <button type="button" class="history-button" @click="historyOpen = true"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 9a7 7 0 1 1 2 6M3 4v5h5M10 6v4l3 2" /></svg>Update history</button>
        </div>

        <div v-if="selectedVersion" :class="['release-summary', { archived: !isCurrent }]">
          <span class="release-icon" aria-hidden="true">{{ isCurrent ? '↗' : '◷' }}</span>
          <div><strong>{{ isCurrent ? 'A more accurate evaluation.' : 'Original scores, preserved.' }}</strong>
            <p>{{ isCurrent ? 'Updated table comparisons. Same tasks, re-scored outputs.' : 'This snapshot uses the original evaluator.' }}
              <button v-if="isCurrent" type="button" class="text-button" @click="historyOpen = true">What changed?</button>
              <button v-else type="button" class="text-button" @click="selectVersion(manifest!.defaultVersion)">View latest →</button>
            </p>
          </div>
        </div>

        <div v-if="selectedVersion" class="results-toolbar">
          <div class="split-tabs" role="group" aria-label="Evaluation split">
            <button type="button" :class="{ active: split === 'test' }" :aria-pressed="split === 'test'" @click="selectSplit('test')">TestSet <span>{{ selectedVersion.taskCounts.test }}</span></button>
            <button type="button" :class="{ active: split === 'dev' }" :aria-pressed="split === 'dev'" @click="selectSplit('dev')">DevSet <span>{{ selectedVersion.taskCounts.dev }}</span></button>
          </div>
          <a-input v-model:value="search" allow-clear placeholder="Search agent or model…" aria-label="Search agent or model" class="search-input"><template #prefix><svg viewBox="0 0 20 20" class="search-icon" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></svg></template></a-input>
        </div>
        <div v-if="selectedVersion" class="results-meta">
          <a-checkbox v-if="previousVersion" v-model:checked="showChanges">Show changes vs last release ({{ previousVersion.id }})</a-checkbox>
          <span v-else class="archive-caption">Archived snapshot</span>
        </div>

        <a-alert v-if="loadError" type="error" show-icon message="Leaderboard could not be loaded" :description="loadError"><template #action><a-button size="small" @click="loadLeaderboards">Retry</a-button></template></a-alert>
        <div v-else-if="loading" class="loading-state"><a-spin /><p>Loading leaderboard versions…</p></div>
        <Leaderboard v-else-if="selectedVersion" :data="leaderboardData" :previous-data="previousData" :previous-version-id="previousVersion?.id" :split="split" :search="search" :show-changes="Boolean(previousVersion) && showChanges" />

        <div v-if="selectedVersion" class="lb-note"><span class="note-label">ABOUT THESE SCORES</span><p>Accuracy is the mean task score on the selected split, shown as a percentage. Rankings are computed within each evaluator version.</p>
          <p class="coverage-note">{{ selectedVersion.notice }}</p>
        </div>
        <div class="leaderboard-footer"><span>Have a data agent to evaluate?</span><button type="button" class="text-button submission-trigger" @click="submissionOpen = true">Submit your results <span aria-hidden="true">↗</span></button></div>
      </section>
    </aside>
    <VersionHistory :open="historyOpen" :versions="manifest?.versions ?? []" :current-version-id="manifest?.defaultVersion" @close="historyOpen = false" @select="viewHistoryVersion" />
    <a-modal :open="submissionOpen" title="Submit your results" :footer="null" :width="720" @cancel="submissionOpen = false">
      <SubmissionDetails />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import Leaderboard from '../components/Leaderboard.vue'
import VersionHistory from '../components/VersionHistory.vue'
import SubmissionDetails from '../components/SubmissionDetails.vue'
import type { LeaderboardEntry, LeaderboardManifest, LeaderboardSplit } from '../types'
import { getPreviousVersion, formatReleaseDate } from '../utils/leaderboard'
const route = useRoute()
const router = useRouter()
const manifest = ref<LeaderboardManifest>()
const versionData = ref<Record<string, LeaderboardEntry[]>>({})
const loading = ref(true)
const loadError = ref('')
const search = ref('')
const showChanges = ref(true)
const historyOpen = ref(false)
const submissionOpen = ref(false)
const selectedVersionId = computed(() => {
  const requested = route.query.version
  return manifest.value?.versions.some(version => version.id === requested)
    ? String(requested) : manifest.value?.defaultVersion ?? ''
})
const selectedVersion = computed(() => manifest.value?.versions.find(version => version.id === selectedVersionId.value))
const latestVersion = computed(() => manifest.value?.versions.find(version => version.id === manifest.value?.defaultVersion))
const isCurrent = computed(() => selectedVersionId.value === manifest.value?.defaultVersion)
const split = computed<LeaderboardSplit>(() => route.query.split === 'dev' ? 'dev' : 'test')
const leaderboardData = computed(() => versionData.value[selectedVersionId.value] ?? [])
const previousVersion = computed(() => getPreviousVersion(manifest.value?.versions ?? [], selectedVersionId.value))
const previousData = computed(() => previousVersion.value ? versionData.value[previousVersion.value.id] ?? [] : [])
function selectVersion(version: string) {
  search.value = ''
  return router.push({ query: { ...route.query, version }, hash: route.hash })
}
function selectSplit(value: LeaderboardSplit) {
  router.push({ query: { ...route.query, split: value }, hash: route.hash })
}
async function viewHistoryVersion(version: string) {
  historyOpen.value = false
  await selectVersion(version)
  await nextTick()
  const leaderboard = document.getElementById('leaderboard')
  if (window.matchMedia('(min-width: 1101px)').matches) {
    leaderboard?.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    leaderboard?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
const citation = `@article{sun2026agenticdatabench,
  title         = {AgenticDataBench: A Comprehensive Benchmark for Data Agents},
  author        = {Zhaoyan Sun and Shan Zhong and Daizhou Wen and Jiaxing Han and Guoliang Li and Ying Yan and Peng Zhang and Yu Su and Xiang Qi and Baolin Sun and Chengyuan Yang and Tao Fang and Huaiyu Ruan},
  year          = {2026},
  journal       = {VLDB}
}`

async function copyCitation() {
  try {
    await navigator.clipboard.writeText(citation)
    message.success('BibTeX copied to clipboard.')
  } catch {
    message.info('Please select and copy the BibTeX below.')
  }
}

async function loadLeaderboards() {
  loading.value = true
  loadError.value = ''
  try {
    const base = import.meta.env.BASE_URL || '/'
    async function load<T>(file: string): Promise<T> {
      const response = await fetch(`${base}${file}`)
      if (!response.ok) throw new Error(`Unable to load ${file} (${response.status}).`)
      return response.json()
    }
    const catalog = await load<LeaderboardManifest>('leaderboard-versions.json')
    if (!catalog.versions?.length || !catalog.versions.some(version => version.id === catalog.defaultVersion)) {
      throw new Error('The leaderboard version catalog is invalid.')
    }
    const entries = await Promise.all(catalog.versions.map(async version => {
      const data = await load<LeaderboardEntry[]>(version.dataFile)
      if (!Array.isArray(data)) throw new Error(`Invalid data for ${version.id}.`)
      return [version.id, data] as const
    }))
    versionData.value = Object.fromEntries(entries)
    manifest.value = catalog
  } catch (error) {
    loadError.value = error instanceof Error ? error.message : 'Please check your connection and try again.'
  } finally {
    loading.value = false
  }
}
onMounted(loadLeaderboards)

</script>

<style scoped>
.home-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 2fr);
  gap: 40px;
  max-width: 1480px;
  margin: 0 auto;
  padding: 40px 40px 56px;
}

.main-content {
  min-width: 0;
}

.sidebar {
  position: relative;
  min-width: 0;
  scroll-margin-top: 90px;
}

@media (min-width: 1101px) {
  .home-layout { height: 100%; min-height: 0; padding-bottom: 24px; }
  .main-content, .sidebar {
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior-y: contain;
    scrollbar-width: thin;
    scrollbar-color: #d3dcea transparent;
    scrollbar-gutter: stable;
  }
  .main-content { padding-right: 12px; }
  .sidebar { padding-right: 8px; padding-bottom: 2px; }
  .main-content::-webkit-scrollbar, .sidebar::-webkit-scrollbar { width: 6px; }
  .main-content::-webkit-scrollbar-thumb, .sidebar::-webkit-scrollbar-thumb { background: #d3dcea; border-radius: 6px; }
  .main-content:focus-visible, .sidebar:focus-visible { outline: 2px solid #a8c3ed; outline-offset: 4px; }
}

.section {
  padding: 32px 0;
  border-bottom: 1px solid var(--color-border);
}

.section:last-child {
  border-bottom: none;
}

.section-heading {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 16px;
  padding-bottom: 0;
  border-bottom: 0;
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
  padding-top: 4px;
  text-align: left;
}

.hero-greeting {
  font-size: clamp(32px, 2.8vw, 40px);
  line-height: 1.15;
  letter-spacing: -1.2px;
  font-weight: 750;
  color: #14243d;
  margin: 14px 0 16px;
}

.hero-links {
  flex-wrap: wrap;
  justify-content: flex-start;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  margin: 28px 0 24px;
  border: 1px solid #dce5f1;
  border-radius: 12px;
  overflow: hidden;
  background: #f8fafd;
}

.stat-item {
  text-align: left;
  padding: 18px 22px;
}

.stat-item:nth-child(odd) { border-right: 1px solid #e0e7f1; }
.stat-item:nth-child(-n+2) { border-bottom: 1px solid #e0e7f1; }

.stat-num {
  display: block;
  font-size: 33px;
  font-weight: 700;
  letter-spacing: -.8px;
  line-height: 1.15;
  color: #2755a0;
  font-variant-numeric: tabular-nums;
}

.stat-unit { font-size: 15px; font-weight: 600; letter-spacing: 0; margin-left: 5px; color: #526b92; }

.stat-label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #53657f;
  margin-top: 7px;
  line-height: 1.5;
}

.stat-human {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 22px;
  border-top: 1px solid #dce5f1;
  background: #eaf1fc;
}
.human-label { display: flex; align-items: center; gap: 8px; color: #365783; font-size: 12px; font-weight: 600; }
.human-label svg { width: 17px; height: 17px; flex-shrink: 0; stroke: #5275a8; fill: none; stroke-width: 1.4; stroke-linecap: round; }
.human-value { color: #244c8a; font-size: 28px; font-weight: 700; letter-spacing: -.7px; line-height: 1.1; font-variant-numeric: tabular-nums; white-space: nowrap; }
.human-value span { font-size: 17px; margin-left: 2px; }

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

.publication-news {
  padding: 16px 18px;
  border: 1px solid #dce5f1;
  border-radius: 8px;
  background: #fff;
}

.news-category {
  display: inline-block;
  padding: 3px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  background: #e5edfc;
  color: #31599b;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.news-title {
  margin-bottom: 8px;
  font-size: 19px;
  font-weight: 500;
  line-height: 1.4;
}

.news-title strong {
  font-weight: 700;
}

.news-paper {
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.6;
  color: #596579;
}

.news-paper-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
}

.news-paper-link:hover {
  text-decoration: underline;
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

.citation-section {
  scroll-margin-top: 80px;
}

.citation-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
  color: var(--color-text-secondary);
  font-size: 13px;
}

.citation-block {
  font-size: 12px;
  line-height: 1.7;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.citation-block code {
  padding: 0;
}

.leaderboard-section {
  border-radius: 14px;
  padding: 28px;
  border: 1px solid #dfe6f0;
  box-shadow: 0 4px 24px rgba(29, 54, 99, .035);
  background: #fff;
}

@media (max-width: 1100px) {
  .home-layout { grid-template-columns: minmax(0, 1fr); gap: 24px; padding: 28px 24px; }
  .main-content { display: contents; }
  .hero-section { grid-row: 1; }
  .sidebar { grid-row: 2; position: static; max-height: none; }
  .section { width: 100%; }

  .modes-grid,
  .benchmark-grid {
    grid-template-columns: 1fr;
  }

}

.eyebrow { font-size: 10px; letter-spacing: 1.4px; font-weight: 650; color: #8795ad; }
.hero-eyebrow { font-size: 10px; letter-spacing: 1.2px; color: #456da9; }
.hero-tagline { font-size: 22px; font-weight: 600; color: #3a4e6c; letter-spacing: -.4px; line-height: 1.4; margin: 0 0 22px; }
.hero-desc { font-size: 15px; color: #536179; line-height: 1.75; margin: 0 0 12px; }
.hero-desc-detail { margin-bottom: 0; }
.hero-desc strong { color: #2d405e; font-weight: 600; }
.hero-link { padding: 7px 12px; background: #f2f5fa; color: #4c617f; font-size: 12px; border: 1px solid #e2e8f2; }
.hero-link:hover { background: #e9eff9; color: #2e62bb; }
.section-heading-row { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.text-button { border: 0; background: transparent; color: #3166c3; font: inherit; font-size: 12px; cursor: pointer; padding: 0; }
.text-button:hover { text-decoration: underline; }
.text-button:disabled { color: #9ca8bc; cursor: default; }
.update-news { border: 1px solid #dce6f7; border-radius: 10px; background: #f5f8fe; padding: 20px; margin-bottom: 16px; }
.news-update-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.release-badge { font-size: 10px; font-weight: 700; letter-spacing: .8px; color: #3361ab; }
.news-update-meta time { font-size: 10px; color: #8291aa; }
.update-news .news-title { font-size: 20px; font-weight: 650; letter-spacing: -.4px; line-height: 1.4; }
.update-news .news-paper { color: #75839b; font-size: 12px; margin-bottom: 14px; }
.publication-news .news-title { font-size: 16px; }
.publication-news .news-paper { font-size: 12px; margin-bottom: 12px; }
.leaderboard-heading-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.leaderboard-heading-row h2 { font-size: 28px; letter-spacing: -.7px; margin: 4px 0 0; font-weight: 700; }
.version-status { font-size: 10px; font-weight: 600; display: flex; align-items: center; gap: 6px; color: #248162; padding: 5px 9px; border: 1px solid #d9eee4; border-radius: 20px; white-space: nowrap; background: #f7fcf9; }
.status-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.version-status.archived { color: #987135; border-color: #ecdfc6; background: #fffaf2; }
.leaderboard-intro { color: #8490a5; font-size: 12px; margin: 8px 0 24px; }
.version-toolbar { display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; }
.version-control { display: flex; flex-direction: column; gap: 7px; flex: 1; max-width: 340px; }
.version-control label { font-size: 10px; font-weight: 600; color: #7f8ba1; }
.version-control select { width: 100%; font: inherit; font-size: 12px; color: #3d5275; padding: 10px 32px 10px 12px; border: 1px solid #dbe3f0; border-radius: 7px; background: #fff; cursor: pointer; height: 39px; }
.history-button { display: flex; align-items: center; gap: 6px; border: 1px solid #e4e9f1; background: white; border-radius: 7px; color: #667895; padding: 10px 12px; font: inherit; font-size: 11px; height: 39px; cursor: pointer; }
.history-button svg { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.release-summary { display: flex; gap: 12px; align-items: flex-start; padding: 15px; border-radius: 8px; background: #f0f5ff; border: 1px solid #e2eafb; margin: 18px 0 24px; }
.release-icon { color: #638adb; border-radius: 50%; width: 25px; height: 25px; text-align: center; line-height: 23px; border: 1px solid #cdddfb; flex-shrink: 0; }
.release-summary strong { font-size: 12px; font-weight: 600; color: #3c5b93; }
.release-summary p { color: #7b8ca9; font-size: 11px; margin: 3px 0 0; line-height: 1.6; }
.release-summary .text-button { margin-left: 6px; font-size: 11px; }
.release-summary.archived { background: #fff9ef; border-color: #f0e4cd; }
.archived .release-icon, .archived strong { color: #9a783e; border-color: #eadbc0; }
.results-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.split-tabs { display: flex; gap: 4px; background: #f1f4f9; padding: 4px; border-radius: 7px; flex-shrink: 0; }
.split-tabs button { border: 0; background: transparent; border-radius: 5px; font: inherit; font-size: 12px; font-weight: 600; color: #8190a7; padding: 7px 13px; cursor: pointer; }
.split-tabs button.active { background: #fff; color: #3568c5; box-shadow: 0 1px 4px #263b6620; }
.split-tabs button span { font-size: 9px; margin-left: 5px; font-weight: 400; }
.search-input { max-width: 238px; font-size: 11px; border-color: #e2e7f0; }
.search-icon { width: 14px; height: 14px; fill: none; stroke: #94a0b4; stroke-width: 1.4; margin-right: 4px; }
.results-meta { display: flex; justify-content: flex-end; align-items: center; gap: 12px; margin: 16px 0 12px; font-size: 10px; color: #8995a9; }
.results-meta :deep(.ant-checkbox-wrapper) { font-size: 10px; color: #7687a1; }
.results-meta :deep(.ant-checkbox-inner) { width: 13px; height: 13px; border-radius: 3px; }
.archive-caption { color: #a18b63; font-size: 10px; }
.lb-note { margin-top: 20px; padding: 16px; background: #f8fafd; border-radius: 8px; color: #7d8ca3; font-size: 11px; line-height: 1.7; }
.note-label { font-size: 9px; font-weight: 650; letter-spacing: .9px; color: #677c9a; }
.lb-note p { margin-top: 6px; }
.coverage-note { color: #8994a6; }
.leaderboard-footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; padding-top: 20px; font-size: 11px; color: #8894a8; }
.submission-trigger { font-size: 11px; font-weight: 500; }
.loading-state { text-align: center; padding: 60px 0; color: #8795ad; font-size: 12px; }
.loading-state p { margin-top: 15px; }
button:focus-visible, select:focus-visible { outline: 2px solid #729cf0; outline-offset: 3px; }
.submission-section { scroll-margin-top: 80px; }
@media (max-width: 600px) {
  .home-layout { padding: 24px 16px; }
  .hero-greeting { font-size: clamp(29px, 8.8vw, 35px); letter-spacing: -1px; }
  .hero-tagline { font-size: 21px; }
  .stat-item { padding: 17px 20px; }
  .stat-num { font-size: 31px; }
  .stat-human { padding: 16px 20px; }
  .human-label { font-size: 11px; gap: 6px; }
  .human-value { font-size: 26px; }
  .leaderboard-section { padding: 20px 14px; }
  .leaderboard-heading-row h2 { font-size: 25px; }
  .version-status { font-size: 9px; padding: 4px 7px; }
  .version-toolbar { flex-wrap: wrap; }
  .version-control { max-width: none; flex-basis: 100%; }
  .history-button { height: 32px; padding: 5px 9px; }
  .results-toolbar { flex-wrap: wrap; }
  .search-input { max-width: none; }
  .results-meta { flex-wrap: wrap; gap: 8px; }
  .hero-links { gap: 8px; }
}
</style>
