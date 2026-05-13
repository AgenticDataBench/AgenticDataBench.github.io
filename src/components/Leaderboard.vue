<template>
  <a-table
    :columns="visibleColumns"
    :data-source="data"
    :pagination="false"
    :scroll="{ x: 700 }"
    size="small"
    row-key="rank"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'rank'">
        <span v-if="record.rank === 1" class="medal-gold">{{ record.rank }}</span>
        <span v-else-if="record.rank === 2" class="medal-silver">{{ record.rank }}</span>
        <span v-else-if="record.rank === 3" class="medal-bronze">{{ record.rank }}</span>
        <span v-else>{{ record.rank }}</span>
        <div class="rank-date">{{ record.date }}</div>
      </template>
      <template v-if="column.key === 'agent'">
        <strong>{{ record.agent }}</strong>
        <div class="affiliation">{{ record.agentAffiliation }}</div>
      </template>
      <template v-if="column.key === 'model'">
        {{ record.model }}
        <div class="affiliation">{{ record.modelAffiliation }}</div>
      </template>
      <template v-if="column.key === 'code'">
        <a v-if="record.code && record.code !== '#' && record.code.startsWith('https://')" :href="record.code" target="_blank" rel="noopener noreferrer">
          &#x1F517;
        </a>
        <span v-else style="color: var(--color-text-secondary);">-</span>
      </template>
      <template v-if="column.key === 'score'">
        <strong v-if="record.rank === 1">{{ scoreValue(record) }}%</strong>
        <span v-else>{{ scoreValue(record) }}%</span>
      </template>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LeaderboardEntry } from '../types'

const props = defineProps<{
  data: LeaderboardEntry[]
  mode: string
}>()

const baseColumns = [
  { title: 'Rank', key: 'rank', width: 80 },
  { title: 'Agent', key: 'agent', width: 180 },
  { title: 'Model', key: 'model', width: 160 },
  { title: 'Code', key: 'code', width: 60, align: 'center' as const },
  { title: 'Size', dataIndex: 'size', key: 'size', width: 80 },
]

const devColumn = { title: 'Dev Accuracy', key: 'score', width: 100, align: 'right' as const }
const testColumn = { title: 'Test Accuracy', key: 'score', width: 100, align: 'right' as const }

const visibleColumns = computed(() => {
  const scoreColumn = props.mode === 'custom' ? testColumn : devColumn
  return [...baseColumns, scoreColumn]
})

function scoreValue(record: LeaderboardEntry) {
  return props.mode === 'custom' ? record.test : record.dev
}
</script>

<style scoped>
.affiliation {
  font-style: italic;
  font-size: 12px;
  color: var(--color-text-secondary);
}

.rank-date {
  font-size: 11px;
  color: var(--color-text-secondary);
}
</style>