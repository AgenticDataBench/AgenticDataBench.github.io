<template>
  <a-table :columns="columns" :data-source="visibleData" :pagination="false"
    :scroll="{ x: showChanges ? 780 : 680 }" size="small" :row-key="entryKey"
    class="results-table">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'rank'">
        <span class="rank-number" :class="{ 'top-rank': record.rank <= 3 }">{{ String(record.rank).padStart(2, '0') }}</span>
      </template>
      <template v-else-if="column.key === 'agent'">
        <strong class="agent-name">{{ record.agent }}</strong>
        <div class="affiliation">{{ record.agentAffiliation }}</div>
        <div class="submission-date">{{ record.date }}</div>
      </template>
      <template v-else-if="column.key === 'model'">
        <span class="model-name">{{ record.model }}</span>
        <div class="affiliation">{{ record.modelAffiliation }}</div>
      </template>
      <template v-else-if="column.key === 'code'">
        <a v-if="record.code?.startsWith('https://')" :href="record.code" target="_blank"
          rel="noopener noreferrer" class="code-link" :aria-label="`${record.agent} code or project website`">↗</a>
        <span v-else class="missing-value">—</span>
      </template>
      <template v-else-if="column.key === 'score'">
        <span class="score-value" :class="{ 'leading-score': record.rank === 1 }">{{ formatScore(record, split) }}<span class="percent">%</span></span>
        <div class="score-track" aria-hidden="true"><span :style="{ width: `${scoreNumber(record, split)}%` }"></span></div>
      </template>
      <template v-else-if="column.key === 'change'">
        <template v-if="previousScore(record) !== undefined">
          <a-tooltip :title="`Score change in percentage points relative to ${previousVersionId}, the release immediately before the selected version.`">
            <span class="score-change" :class="{ positive: delta(record) > 0, negative: delta(record) < 0 }">{{ delta(record) > 0 ? '+' : '' }}{{ delta(record).toFixed(2) }}<small> pp</small></span>
          </a-tooltip>
          <div class="previous-score">was {{ previousScore(record)!.toFixed(2) }}%</div>
        </template>
        <a-tooltip v-else :title="`No matching ${split} score in ${previousVersionId}, the release immediately before the selected version.`">
          <span class="new-entry">New entry</span>
        </a-tooltip>
      </template>
    </template>
    <template #emptyText><span>No results match your search.</span></template>
  </a-table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LeaderboardEntry, LeaderboardSplit } from '../types'
import { entryKey, rankEntries, scoreNumber, formatScore } from '../utils/leaderboard'

const props = defineProps<{
  data: LeaderboardEntry[]
  previousData: LeaderboardEntry[]
  previousVersionId?: string
  split: LeaderboardSplit
  search: string
  showChanges: boolean
}>()
const columns = computed(() => [
  { title: '#', key: 'rank', width: 48 },
  { title: 'Agent', key: 'agent', width: 160 },
  { title: 'Model', key: 'model', width: 190 },
  { title: 'Size', dataIndex: 'size', key: 'size', width: 65 },
  { title: 'Accuracy', key: 'score', width: 115, align: 'right' as const },
  ...(props.showChanges ? [{ title: `vs ${props.previousVersionId}`, key: 'change', width: 105, align: 'right' as const }] : []),
  { title: 'Code', key: 'code', width: 50, align: 'center' as const },
])
const visibleData = computed(() => {
  const query = props.search.trim().toLowerCase()
  return rankEntries(props.data, props.split).filter(row =>
    `${row.agent} ${row.model} ${row.agentAffiliation} ${row.modelAffiliation}`.toLowerCase().includes(query))
})
const previousEntries = computed(() => new Map(props.previousData.map(row => [entryKey(row), row])))
function previousScore(row: LeaderboardEntry): number | undefined {
  const previous = previousEntries.value.get(entryKey(row))
  const score = previous ? scoreNumber(previous, props.split) : undefined
  return score === undefined ? undefined : Number(score.toFixed(2))
}
function delta(row: LeaderboardEntry): number {
  return Number(formatScore(row, props.split)) - (previousScore(row) ?? 0)
}
</script>

<style scoped>
.results-table :deep(.ant-table) { font-size: 13px; background: transparent; }
.results-table :deep(.ant-table-thead > tr > th) { background: #f6f8fb; color: #65738a; font-size: 11px; font-weight: 600; padding: 12px 10px; }
.results-table :deep(.ant-table-thead > tr > th::before) { display: none; }
.results-table :deep(.ant-table-tbody > tr > td) { padding: 14px 10px; border-color: #edf0f5; }
.results-table :deep(.ant-table-tbody > tr:first-child > td) { background: #f3f7ff; }
.results-table :deep(.ant-table-tbody > tr:hover > td) { background: #f5f8fc; }
.rank-number { color: #8692a6; font-family: var(--font-mono); font-size: 13px; }
.top-rank { color: #315fc7; font-weight: 700; }
.agent-name { font-size: 13px; font-weight: 650; }
.model-name { font-weight: 500; }
.affiliation { color: #7c879b; font-size: 11px; line-height: 1.5; margin-top: 3px; }
.submission-date { color: #929caf; font-size: 10px; margin-top: 2px; }
.score-value { font-variant-numeric: tabular-nums; font-size: 17px; font-weight: 650; letter-spacing: -.4px; }
.leading-score { color: #245bce; }
.percent { font-size: 11px; font-weight: 400; color: #7c879b; margin-left: 2px; }
.score-track { height: 3px; border-radius: 2px; background: #e9edf5; width: 68px; margin: 5px 0 0 auto; overflow: hidden; }
.score-track span { display: block; height: 100%; background: #7ca2ef; }
.score-change { font-size: 12px; font-weight: 600; font-variant-numeric: tabular-nums; }
.score-change small { font-size: 10px; font-weight: 400; }
.positive { color: #218366; }
.negative { color: #b65749; }
.previous-score { font-size: 10px; color: #929caf; margin-top: 3px; }
.new-entry { font-size: 10px; background: #eef3fc; color: #5273ac; border-radius: 4px; padding: 3px 5px; white-space: nowrap; }
.code-link { font-size: 17px; color: #8794aa; }
.code-link:hover { color: var(--color-brand); }
.missing-value { color: #b9c1ce; }
</style>
