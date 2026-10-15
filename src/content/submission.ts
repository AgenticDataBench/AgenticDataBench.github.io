export const submissionEmail = 'agenticdatabench@163.com'
export const submissionGuidelines = 'https://docs.google.com/document/d/1Ao0-oaOM5FhQfEJ_od2aP6IixQrt-SfFhmTq1M8NKRg/edit?usp=sharing'

export const submissionMethods = [
  {
    name: 'DevSet',
    description: 'Submit your prediction results for evaluation on the public development set.',
    attachment: '.jsonl results file',
    subject: '[AgenticDataBench-DevSet][Team][Method][Model]',
    icon: 'results',
  },
  {
    name: 'TestSet',
    description: 'Submit your agent code for sandboxed execution on the private test set.',
    attachment: '.tar.gz or .zip code archive',
    subject: '[AgenticDataBench-TestSet][Team][Method][Model]',
    icon: 'code',
  },
]
