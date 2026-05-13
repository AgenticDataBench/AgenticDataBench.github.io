# AgenticDataBench Submission Guidelines

Thank you for your interest in AgenticDataBench! This document describes how to submit your agent for evaluation and how results are processed.

## Evaluation Modes

AgenticDataBench supports two evaluation modes:

| Mode | Description |
|------|-------------|
| **DevSet Evaluation** | Submit your prediction results (`.jsonl`) on the public dev set. Results are verified and displayed on the leaderboard. |
| **Custom Code Evaluation** | Submit your agent code archive for sandboxed execution on the private test set. The system captures execution traces for detailed analysis. |

---

## Dataset Specification

### DevSet

- **Datasets**: Download from [HuggingFace](https://huggingface.co/datasets/shawnzzzh/AgenticDataBench) and place under `testbed/datasets/`
- **Tasks**: [`testbed/tasks/dev.jsonl`](https://github.com/AgenticDataBench/AgenticDataBench/blob/main/testbed/tasks/dev.jsonl) — 254 tasks
- **Ground-truth**: [`testbed/gold/`](https://github.com/AgenticDataBench/AgenticDataBench/tree/main/testbed/gold)
- **Run script**: [`testbed/run.py`](https://github.com/AgenticDataBench/AgenticDataBench/blob/main/testbed/run.py) — generates results under the specified `output_dir` (e.g., `testbed/output/smolagents-xxx/`, where `smolagents` is the agent name and `xxx` is a random suffix; 254 subdirectories are created, one per task)
- **Evaluation script**: [`testbed/evaluate.py`](https://github.com/AgenticDataBench/AgenticDataBench/blob/main/testbed/evaluate.py) — specify `output_dir` as the result directory (e.g., `testbed/output/smolagents-xxx`)

### TestSet

- Same structure as DevSet, but contains **100 tasks**
- Replace `dev.jsonl` with `test.jsonl`
- Test set tasks are **private** and not publicly released to protect leaderboard integrity

---

## Evaluation Pipeline

### 1. Registration

No registration is required. Simply send your submission via email.

### 2. Submission

Send your submission to **agenticdatabench@163.com** with the following information:

#### Required Fields

| Field | Description | Required for |
|-------|-------------|-------------|
| **Email** | Contact email for result notification | All submissions |
| **Agent name** | Name of your agent framework | All submissions |
| **Organization** | Your institution or company | All submissions |
| **Model name(s)** | LLM(s) used (e.g., Claude Sonnet 4.6, Qwen3.5-397B-A17B) | All submissions |
| **Model base URL(s)** | API endpoint(s) for the LLM(s) | TestSet evaluation, test score display |
| **Open-source code link** | URL to your agent's code repository (optional) | Optional |
| **Show dev score** | Whether to display your dev set score on the leaderboard | DevSet display |
| **Run TestSet evaluation** | Whether to evaluate on the private test set | TestSet evaluation |
| **Show test score** | Whether to display your test set score on the leaderboard | TestSet display |

#### Attachment: Compressed Archive

Include a `.tar.gz` or `.zip` archive containing:

```
submission/
├── code/                  # Runnable agent code
├── setup.sh               # Environment setup script (install dependencies, create container, etc.)
├── run.sh                 # Execution script (copy data to container, run agent, etc.)
└── dev_result.json        # DevSet evaluation result (e.g., testbed/results/smolagents-qwen.json)
```

**Important constraints:**

- **Dev score display**: Only available if you upload `dev_result.json`
- **TestSet evaluation / test score display**: Only available if you provide model name(s), model base URL(s), and runnable code with scripts
- **Model base URL restriction**: Submitted URLs are used for permission control — your code will only be allowed to make requests to these URLs during execution. URLs must point to official LLM provider endpoints.
- **Data persistence**: All submitted data is stored persistently for verification and reproducibility.

### 3. DevSet Verification

For uploaded DevSet results, we sample **10 tasks** from your submission and re-run each task **3 times**, taking the highest score. The verification passes if the sampled score is ≥ **90%** of the score reported in your result file.

### 4. Code Execution (TestSet)

If you opt for TestSet evaluation, our team will:

1. Copy your code to a designated path (you will be informed)
2. Copy `test.jsonl` to the designated path (same format as `dev.jsonl`, but only contains `id`, `domain`, `question`, `output_file_name` fields)
3. Copy datasets to the designated path (each task's data is located under `datasets/<domain>/`)
4. Run `setup.sh` (which may create a container)
5. Run `run.sh` (which may copy required data into the container)
6. The LLM generates task code based on the task fields, then executes the task code locally or in the container

### 5. Result Evaluation

We run the evaluation script on your output:

```bash
cd testbed
python3 evaluate.py --output_dir <your_output_dir>
```

This generates a result JSON file (e.g., [`testbed/results/smolagents-qwen.json`](https://github.com/AgenticDataBench/AgenticDataBench/blob/main/testbed/results/smolagents-qwen.json)) where the `average_score` field is the final score.

### 6. Leaderboard Update

Each submission displays the following on the leaderboard:

| Field | Source |
|-------|--------|
| Rank | Sorted by test set score (or dev set score if test not available) |
| Submission date | Date of evaluation |
| Agent name | Provided in submission |
| Organization | Provided in submission |
| Model name(s) | Provided in submission |
| Model organization(s) | Auto-inferred from model name and base URL |
| Open-source code link | Provided in submission (optional) |
| Model parameter size | Auto-inferred from model name and base URL (or provided by submitter) |
| Dev score | `average_score` from uploaded dev result file |
| Test score | `average_score` from TestSet evaluation |

### 7. Result Notification

Results are sent back to the submitter's email as a **trimmed JSON** to prevent test set leakage:

```json
{
    "num_results": 354,
    "average_score": 0.32915508922713677,
    "results": [
        {
            "id": "agriculture_01",
            "total_score": 0.1111111111111111,
            "finished": true,
            "added_files": [
                "/AgenticDataBench/testbed/output/smolagents-qwen-40d2b55e/agriculture_01/output.csv"
            ],
            "changed_files": [],
            "domain": "agriculture"
        }
    ],
    "average_finished": 0.8220338983050848
}
```

The returned result **only includes** `id`, `total_score`, `finished`, `added_files`, `changed_files`, and `domain` — no task questions or ground-truth answers are exposed.

---

## Submission Format Examples

### DevSet Evaluation Only

**Email subject**: `[AgenticDataBench-DevSet][YourTeam][YourMethod][YourModel]`

**Attachment**: `.jsonl` result file

### Custom Code Evaluation

**Email subject**: `[AgenticDataBench-Custom][YourTeam][YourMethod][YourModel]`

**Attachment**: `.tar.gz` or `.zip` code archive

---

## Important Notes

1. **No account registration needed** — simply email your submission.
2. **Code compliance** — do not include any packages or mechanisms that could upload or leak benchmark data. Submissions are reviewed before execution.
3. **Environment** — if your code requires special environments (e.g., Java, JDK), specify them in `setup.sh` and document them in a README within your archive.
4. **Error handling** — ensure your code includes logging and error-handling mechanisms so evaluation can resume from the point of failure rather than starting over.
5. **Submission frequency** — we allow up to **2 submissions per team within a 2-month period**, with at most **2 checkpoints** per submission.
6. **Data security** — we only use your code for evaluation purposes and will not disseminate or disclose any details. After evaluation is confirmed, server instances including your code and containers are deleted.
7. **Results timeline** — our team will review and add results to the leaderboard within **3–5 business days**.