import type { LeaderboardEntry, LeaderboardSplit, LeaderboardVersion } from '../types'

// The release catalog is ordered newest first.
export function getPreviousVersion(versions: LeaderboardVersion[], selectedId: string): LeaderboardVersion | undefined {
  const index = versions.findIndex(version => version.id === selectedId)
  return index < 0 ? undefined : versions[index + 1]
}

export function entryKey(entry: LeaderboardEntry): string {
  return `${entry.agent}::${entry.model}`
}

export function scoreNumber(entry: LeaderboardEntry, split: LeaderboardSplit): number | undefined {
  const score = entry[split]
  if (typeof score !== 'number' && typeof score !== 'string') return undefined
  if (typeof score === 'string' && score.trim() === '') return undefined
  const value = Number(score)
  return Number.isFinite(value) ? value : undefined
}

export function formatScore(entry: LeaderboardEntry, split: LeaderboardSplit): string {
  return scoreNumber(entry, split)?.toFixed(2) ?? '—'
}

export function formatReleaseDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}

export function rankEntries(data: LeaderboardEntry[], split: LeaderboardSplit) {
  return data.filter(entry => scoreNumber(entry, split) !== undefined)
    .sort((a, b) => scoreNumber(b, split)! - scoreNumber(a, split)!)
    .map((entry, index) => ({ ...entry, rank: index + 1 }))
}
