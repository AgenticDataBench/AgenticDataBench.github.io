<template>
  <a-modal :open="open" title="Benchmark update history" :footer="null" :width="650" @cancel="$emit('close')">
    <p class="history-intro">Benchmark releases and updates to evaluation rules.</p>
    <article v-for="version in versions" :key="version.id" class="history-release">
      <div class="release-meta"><span class="version-tag">{{ version.id }}</span><span :class="['status', { current: version.id === currentVersionId }]">{{ version.id === currentVersionId ? 'Latest' : 'Archived' }}</span><time :datetime="version.date">{{ formatReleaseDate(version.date) }}</time></div>
      <h3>{{ version.title }}</h3>
      <p>{{ version.summary }}</p>
      <ul><li v-for="change in version.changes" :key="change">{{ change }}</li></ul>
      <div class="release-bottom"><button type="button" @click="$emit('select', version.id)">View {{ version.id }} <span aria-hidden="true">→</span></button></div>
    </article>
  </a-modal>
</template>

<script setup lang="ts">
import type { LeaderboardVersion } from '../types'
import { formatReleaseDate } from '../utils/leaderboard'
defineProps<{ open: boolean; versions: LeaderboardVersion[]; currentVersionId?: string }>()
defineEmits<{ close: []; select: [version: string] }>()
</script>

<style scoped>
.history-intro { color: #778298; font-size: 13px; margin: 8px 0 24px; }
.history-release { padding: 0 0 24px 20px; border-left: 2px solid #e4eaf5; margin-left: 4px; position: relative; }
.history-release::before { content: ''; position: absolute; width: 8px; height: 8px; left: -5px; top: 8px; border-radius: 50%; background: #5d88dc; }
.history-release:last-child { padding-bottom: 0; }
.release-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
.version-tag { font-size: 12px; font-weight: 700; color: #2e4f87; }
.status { font-size: 10px; padding: 2px 7px; border-radius: 20px; background: #f0f2f5; color: #7b879b; }
.status.current { background: #e7f3ed; color: #267a57; }
time { margin-left: auto; font-size: 11px; color: #8994a5; }
h3 { font-size: 17px; margin-bottom: 7px; }
p, li { color: #66738a; font-size: 13px; line-height: 1.7; }
ul { padding-left: 18px; margin: 12px 0 16px; }
li { margin-bottom: 6px; }
.release-bottom { display: flex; align-items: center; justify-content: flex-end; font-size: 11px; }
button { border: 0; background: transparent; color: #3267ce; font: inherit; font-size: 12px; cursor: pointer; padding: 4px 0; }
</style>
