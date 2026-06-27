# GPU ROI Calculator
Calculate the break-even period for "Self-Hosted GPU Inference" vs. "Using External APIs."

## Features
- GPU Selection: Ranges from RTX 4090 to H100, with built-in reference pricing and TDP , Summary by AI , may have mistake.
- AI Model Selection: Support for 30+ models (LLaMA, Qwen, DeepSeek, Kimi, GLM, Yi, etc.) , Summary by AI , may have mistake..
- Custom Profiles: Input and save custom GPU or model names via KV; they will automatically appear in the list for future use.
- Real-time Benchmarking: Fetch the latest inference speed benchmarks and API pricing via Brave Search.
- Financial Metrics: Calculate break-even days, total tokens required to break even, and cumulative electricity costs.
- Data Visualization: Line chart comparing cumulative GPU + electricity costs vs. cumulative equivalent API service fees.

## Calculation Logic
```
Daily Tokens = Tokens/sec × 3600 × Daily Usage Hours
Daily Electricity Cost = TDP(kW) × Usage Hours × Electricity Rate ($/kWh)
Daily Equivalent API Savings = Daily Tokens × (API Price / 1,000,000)
Daily Net Savings = Daily API Savings - Daily Electricity Cost
```
Break-even Days = GPU Purchase Price / Daily Net Savings
Note: If the Daily Electricity Cost is greater than or equal to the Daily Equivalent API Savings, the break-even point will never be reached.

## Deployment
```bash
# Install wrangler
npm install -g wrangler

# Deploy
wrangler deploy
KV Namespace
KV stores two keys:
```
- custom_gpus — List of user-added custom GPUs (JSON array)
- custom_models — List of user-added custom models (JSON array)


------

# GPU 回本計算機
計算「自架 GPU 推論」vs「使用外部 API」的回本時間。

## 功能

- 選擇 GPU 型號（RTX 4090 → H100，內建參考售價與 TDP）
- 選擇 AI 模型（LLaMA、Qwen、DeepSeek、Kimi、GLM、Yi 等 30+ 個）
- **自訂型號**：輸入任意 GPU 或模型名稱並儲存到 KV，下次自動出現在清單中
- 透過 Brave Search 查詢最新推論速度 benchmark 與 API 定價
- 計算回本天數、回本需產生 tokens 數、累計電費
- 折線圖視覺化：GPU+電費累計 vs 等效 API 費用累計

## 計算邏輯

```
每日 tokens = tokens/sec × 3600 × 每日使用時數
每日電費    = TDP(kW) × 使用時數 × 電費($/kWh)
每日等效省費 = 每日 tokens × (API 價格 / 1,000,000)
每日淨節省  = 每日省費 - 每日電費
回本天數 = GPU 購買價 / 每日淨節省
```

若每日電費 ≥ 每日等效 API 費用，則永遠無法回本。

## 部署

```bash
# 安裝 wrangler
npm install -g wrangler

# 部署
wrangler deploy
```

## KV Namespace

KV 儲存兩個 key：
- `custom_gpus` — 使用者新增的自訂 GPU 清單（JSON 陣列）
- `custom_models` — 使用者新增的自訂模型清單（JSON 陣列）

-----

Welcome to contribute and correct the info !

Create by Elaspsed Lab

MIT License
