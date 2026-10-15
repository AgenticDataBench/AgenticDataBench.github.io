export interface LeaderboardEntry {
  agent: string
  agentAffiliation: string
  model: string
  modelAffiliation: string
  code: string
  size: string
  date: string
  dev?: number | string
  test?: number | string
}

export type LeaderboardSplit = 'test' | 'dev'

export interface LeaderboardVersion {
  id: string
  label: string
  date: string
  dataFile: string
  title: string
  summary: string
  changes: string[]
  notice: string
  taskCounts: Record<LeaderboardSplit, number>
}

export interface LeaderboardManifest {
  defaultVersion: string
  versions: LeaderboardVersion[]
}
