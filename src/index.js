const GPU_LIST = [
  { id: 'rtx5090',    name: 'RTX 5090',            price: 1999,  tdp: 575, vram: 32  },
  { id: 'rtx5080',    name: 'RTX 5080',            price: 999,   tdp: 360, vram: 16  },
  { id: 'rtx5070ti',  name: 'RTX 5070 Ti',         price: 749,   tdp: 300, vram: 16  },
  { id: 'rtx5070',    name: 'RTX 5070',            price: 599,   tdp: 250, vram: 12  },
  { id: 'rtx5060ti',  name: 'RTX 5060 Ti',         price: 429,   tdp: 180, vram: 16  },
  { id: 'rtx5060',    name: 'RTX 5060',            price: 299,   tdp: 145, vram: 8   },
  { id: 'rtx5050',    name: 'RTX 5050',            price: 199,   tdp: 115, vram: 8   },
  { id: 'rtx4090',    name: 'RTX 4090',            price: 1599,  tdp: 450, vram: 24  },
  { id: 'rtx4080s',   name: 'RTX 4080 Super',      price: 999,   tdp: 320, vram: 16  },
  { id: 'rtx4070tis', name: 'RTX 4070 Ti Super',   price: 799,   tdp: 285, vram: 16  },
  { id: 'rtx4070s',   name: 'RTX 4070 Super',      price: 599,   tdp: 220, vram: 12  },
  { id: 'rtx4060ti',  name: 'RTX 4060 Ti',         price: 449,   tdp: 165, vram: 16  },
  { id: 'rtx4060',    name: 'RTX 4060',            price: 299,   tdp: 115, vram: 8   },
  { id: 'rtx4050m',   name: 'RTX 4050 (筆電版)',    price: 0,     tdp: 50,  vram: 6   },
  { id: 'rtx3090ti',  name: 'RTX 3090 Ti (二手)',   price: 800,   tdp: 450, vram: 24  },
  { id: 'rtx3090',    name: 'RTX 3090 (二手)',      price: 700,   tdp: 350, vram: 24  },
  { id: 'rtx3080',    name: 'RTX 3080 (二手)',      price: 350,   tdp: 320, vram: 10  },
  { id: 'rtx3070',    name: 'RTX 3070 (二手)',      price: 250,   tdp: 220, vram: 8   },
  { id: 'rtx3060',    name: 'RTX 3060 (二手)',      price: 200,   tdp: 170, vram: 12  },
  { id: 'rtx3050',    name: 'RTX 3050 (二手)',      price: 150,   tdp: 130, vram: 8   },
  { id: 'b300',       name: 'B300 288GB',          price: 120000,tdp: 1200,vram: 288 },
  { id: 'b200',       name: 'B200 SXM 192GB',      price: 80000, tdp: 1000,vram: 192 },
  { id: 'gb10',       name: 'GB10 Grace Blackwell',price: 20000, tdp: 180, vram: 128 },
  { id: 'h200sxm',    name: 'H200 SXM 141GB',      price: 35000, tdp: 700, vram: 141 },
  { id: 'h100sxm',    name: 'H100 SXM 80GB',       price: 30000, tdp: 700, vram: 80  },
  { id: 'h100pcie',   name: 'H100 PCIe 80GB',      price: 25000, tdp: 350, vram: 80  },
  { id: 'a10080',     name: 'A100 80GB',           price: 15000, tdp: 400, vram: 80  },
  { id: 'a10040',     name: 'A100 40GB',           price: 10000, tdp: 300, vram: 40  },
  { id: 'l40s',       name: 'L40S 48GB',           price: 8000,  tdp: 350, vram: 48  },
  { id: 'l4',         name: 'L4 24GB',             price: 2500,  tdp: 72,  vram: 24  },
  { id: 'rtxpro6000', name: 'RTX PRO 6000',        price: 7500,  tdp: 300, vram: 96  }, 
  { id: 'rtxpro5000', name: 'RTX PRO 5000',        price: 4500,  tdp: 250, vram: 48  },
  { id: 'rtxpro4500', name: 'RTX PRO 4500',        price: 2500,  tdp: 210, vram: 32  },
  { id: 'rtxpro4000', name: 'RTX PRO 4000',        price: 1350,  tdp: 130, vram: 24  },
  { id: 'rtxpro4000sff',name:'RTX PRO 4000 SFF',    price: 1350,  tdp: 70,  vram: 24  },
  { id: 'rtxpro2000', name: 'RTX PRO 2000',        price: 650,   tdp: 70,  vram: 16  },
  { id: 'rtx6000ada', name: 'RTX 6000 Ada',        price: 6800,  tdp: 300, vram: 48  },
  { id: 'rtx5000ada', name: 'RTX 5000 Ada',        price: 4000,  tdp: 250, vram: 32  },
  { id: 'rtx4500ada', name: 'RTX 4500 Ada',        price: 2250,  tdp: 210, vram: 24  },
  { id: 'rtx4000ada', name: 'RTX 4000 Ada',        price: 1250,  tdp: 130, vram: 20  },
  { id: 'rtx4000sff', name: 'RTX 4000 SFF Ada',    price: 1250,  tdp: 70,  vram: 20  },
  { id: 'rtx2000ada', name: 'RTX 2000 Ada',        price: 625,   tdp: 70,  vram: 16  },
  { id: 'rtxa6000',   name: 'RTX A6000',           price: 4500,  tdp: 300, vram: 48  },
  { id: 'rtxa5500',   name: 'RTX A5500',           price: 2500,  tdp: 230, vram: 24  },
  { id: 'rtxa5000',   name: 'RTX A5000',           price: 2000,  tdp: 230, vram: 24  },
  { id: 'rtxa4500',   name: 'RTX A4500',           price: 1500,  tdp: 200, vram: 20  },
  { id: 'rtxa4000',   name: 'RTX A4000',           price: 1000,  tdp: 140, vram: 16  },
  { id: 'rtxa2000_12',name: 'RTX A2000 12GB',      price: 550,   tdp: 70,  vram: 12  },
  { id: 'rtxa2000_6', name: 'RTX A2000 6GB',       price: 450,   tdp: 70,  vram: 6   },
  { id: 't1000_8',    name: 'T1000 8GB',           price: 400,   tdp: 50,  vram: 8   },
  { id: 't1000_4',    name: 'T1000 4GB',           price: 330,   tdp: 50,  vram: 4   },
  { id: 't600',       name: 'T600 4GB',            price: 200,   tdp: 40,  vram: 4   },
  { id: 't400_4',     name: 'T400 4GB',            price: 150,   tdp: 30,  vram: 4   },
  { id: 't400_2',     name: 'T400 2GB',            price: 120,   tdp: 30,  vram: 2   },
  { id: 'mac-mini-m5-16',   name: 'Mac mini - M5 (16GB)',        price: 599,  tdp: 20, vram: 16  },
  { id: 'mac-mini-m5pro-24',name: 'Mac mini - M5 Pro (24GB)',    price: 1399, tdp: 30, vram: 24  },
  { id: 'mbp14-m5-16',      name: 'MacBook Pro 14" - M5 (16GB)',      price: 1599, tdp: 25, vram: 16  },
  { id: 'mbp14-m5pro-24',   name: 'MacBook Pro 14" - M5 Pro (24GB)',  price: 1999, tdp: 35, vram: 24  },
  { id: 'mbp16-m5max-36',   name: 'MacBook Pro 16" - M5 Max (36GB)',  price: 3499, tdp: 55, vram: 36  },
  { id: 'mbp16-m5max-128',  name: 'MacBook Pro 16" - M5 Max (128GB)', price: 4699, tdp: 55, vram: 128 },
  { id: 'mac-studio-m4max', name: 'Mac Studio - M4 Max (64GB)',     price: 2399, tdp: 55,  vram: 64  },
  { id: 'mac-studio-m4ult', name: 'Mac Studio - M4 Ultra (128GB)',  price: 3999, tdp: 100, vram: 128 },
  { id: 'mac-studio-m5ult', name: 'Mac Studio - M5 Ultra (192GB)',  price: 5999, tdp: 120, vram: 192 },
  { id: 'custom',         name: '＋ 自訂型號',            price: 0,    tdp: 0,   vram: 0   },
];

const MODEL_LIST = [
  { id: 'gpt-oss-120b', name: 'GPT-OSS 120B MoE (OpenAI)' },
  { id: 'gpt-oss-20b',  name: 'GPT-OSS 20B MoE (OpenAI)' },
  { id: 'llama4-scout',    name: 'LLaMA 4 Scout 17B×16E (109B 總)' },
  { id: 'llama4-maverick', name: 'LLaMA 4 Maverick 17B×128E (400B 總)' },
  { id: 'llama33-70b',     name: 'LLaMA 3.3 70B' },
  { id: 'llama31-405b',    name: 'LLaMA 3.1 405B' },
  { id: 'llama31-70b',     name: 'LLaMA 3.1 70B' },
  { id: 'llama31-8b',      name: 'LLaMA 3.1 8B' },
  { id: 'llama-guard-3-8b', name: 'Llama Guard 3 8B' },
  { id: 'nemotron3-ultra', name: 'Nemotron 3 Ultra 550B-A55B MoE (NVIDIA)' },
  { id: 'nemotron3-super', name: 'Nemotron 3 Super 120B-A12B MoE (NVIDIA)' },
  { id: 'nemotron3-nano',  name: 'Nemotron 3 Nano 30B-A3B MoE (NVIDIA)' },
  { id: 'nemotron-4-340b', name: 'Nemotron-4 340B Base (NVIDIA)' },
  { id: 'llama-31-nemotron-70b', name: 'Llama-3.1-Nemotron-70B (NVIDIA)' },
  { id: 'arch-router-15b', name: 'Arch-Router-1.5B' },
  { id: 'deepseek-v4-pro',   name: 'DeepSeek V4-Pro (DeepSeek)' },
  { id: 'deepseek-v4-flash', name: 'DeepSeek V4-Flash (DeepSeek)' },
  { id: 'deepseek-v3-2',     name: 'DeepSeek V3.2 (DeepSeek)' },
  { id: 'deepseek-v3-1',     name: 'DeepSeek V3.1 671B MoE (DeepSeek)' },
  { id: 'deepseek-v3',       name: 'DeepSeek V3 671B MoE (DeepSeek)' },
  { id: 'deepseek-r1',       name: 'DeepSeek-R1 671B MoE (DeepSeek)' },
  { id: 'deepseek-r1-70b',   name: 'DeepSeek-R1 Distill 70B' },
  { id: 'deepseek-r1-7b',    name: 'DeepSeek-R1 Distill 7B' },
  { id: 'deepseek-coder-v2', name: 'DeepSeek Coder V2' },
  { id: 'qwen35-397b',      name: 'Qwen3.5 397B-A17B MoE (Alibaba)' },
  { id: 'qwen35-122b',      name: 'Qwen3.5 122B-A10B MoE (Alibaba)' },
  { id: 'qwen35-35b',       name: 'Qwen3.5 35B-A3B MoE (Alibaba)' },
  { id: 'qwen35-27b',       name: 'Qwen3.5 27B (Alibaba)' },
  { id: 'qwen35-9b',        name: 'Qwen3.5 9B (Alibaba)' },
  { id: 'qwen3-235b',       name: 'Qwen3 235B-A22B MoE (Alibaba)' },
  { id: 'qwen3-72b',        name: 'Qwen3 72B (Alibaba)' },
  { id: 'qwen3-32b',        name: 'Qwen3 32B (Alibaba)' },
  { id: 'qwen3-14b',        name: 'Qwen3 14B (Alibaba)' },
  { id: 'qwen3-8b',         name: 'Qwen3 8B (Alibaba)' },
  { id: 'qwen25-72b',       name: 'Qwen 2.5 72B (Alibaba)' },
  { id: 'qwen25-coder-32b', name: 'Qwen 2.5 Coder 32B (Alibaba)' },
  { id: 'qwen25-14b',       name: 'Qwen 2.5 14B (Alibaba)' },
  { id: 'qwen25-7b',        name: 'Qwen 2.5 7B (Alibaba)' },
  { id: 'kimi-k2-7-code', name: 'Kimi K2.7 Code 1T MoE (Moonshot)' },
  { id: 'kimi-k2-6',      name: 'Kimi K2.6 1T MoE (Moonshot)' },
  { id: 'kimi-k2-5',      name: 'Kimi K2.5 1T MoE (Moonshot)' },
  { id: 'kimi-k2',        name: 'Kimi K2 1T MoE (Moonshot)' },
  { id: 'kimi-k1',        name: 'Kimi K1.5 (Moonshot)' },
  { id: 'glm52',     name: 'GLM-5.2 744B-A40B MoE (Z.ai/智譜)' },
  { id: 'glm5',      name: 'GLM-5 744B-A40B MoE (Z.ai/智譜)' },
  { id: 'glm4-32b',  name: 'GLM-4-32B (智譜)' },
  { id: 'glm-z1-32b', name: 'GLM-Z1-32B (智譜)' },
  { id: 'glm4-9b',   name: 'GLM-4-9B-Chat (智譜)' },
  { id: 'yi15-34b', name: 'Yi-1.5 34B (01.AI)' },
  { id: 'yi15-9b',  name: 'Yi-1.5 9B (01.AI)' },
  { id: 'internlm25-20b', name: 'InternLM 2.5 20B' },
  { id: 'internlm25-7b',  name: 'InternLM 2.5 7B' },
  { id: 'mistral-large3',   name: 'Mistral Large 3 675B MoE (Mistral)' },
  { id: 'magistral-small',  name: 'Magistral Small 24B (Mistral)' },
  { id: 'mistral-small4',   name: 'Mistral Small 4 (Mistral)' },
  { id: 'mistral-large2',   name: 'Mistral Large 2 123B (Mistral)' },
  { id: 'mixtral-8x22b',   name: 'Mixtral 8×22B (Mistral)' },
  { id: 'mixtral-8x7b',    name: 'Mixtral 8×7B (Mistral)' },
  { id: 'mistral-nemo-12b', name: 'Mistral Nemo 12B (Mistral)' },
  { id: 'mistral-7b',       name: 'Mistral 7B v0.3 (Mistral)' },
  { id: 'gemma4-31b',   name: 'Gemma 4 31B Dense (Google)' },
  { id: 'gemma4-26b',   name: 'Gemma 4 26B-A4B MoE (Google)' },
  { id: 'gemma4-12b',   name: 'Gemma 4 12B Unified (Google)' },
  { id: 'gemma4-e4b',   name: 'Gemma 4 E4B (Google)' },
  { id: 'gemma4-e2b',   name: 'Gemma 4 E2B (Google)' },
  { id: 'gemma3-27b', name: 'Gemma 3 27B (Google)' },
  { id: 'gemma3-9b',  name: 'Gemma 3 9B (Google)' },
  { id: 'gemma2-27b', name: 'Gemma 2 27B (Google)' },
  { id: 'gemma2-9b',  name: 'Gemma 2 9B (Google)' },
  { id: 'phi4-reasoning',    name: 'Phi-4-Reasoning 14B (Microsoft)' },
  { id: 'phi4-mini',         name: 'Phi-4-mini 3.8B (Microsoft)' },
  { id: 'phi4-multimodal',   name: 'Phi-4-Multimodal 5.6B (Microsoft)' },
  { id: 'phi4-14b',          name: 'Phi-4 14B (Microsoft)' },
  { id: 'phi35-moe',         name: 'Phi-3.5 MoE (Microsoft)' },
  { id: 'phi35-mini',        name: 'Phi-3.5 Mini 3.8B (Microsoft)' },
  { id: 'grok-1-314b', name: 'Grok-1 314B MoE (xAI)' },
  { id: 'command-r-plus', name: 'Command R+ 104B (Cohere)' },
  { id: 'command-r',      name: 'Command R 35B (Cohere)' },
  { id: 'custom', name: '＋ 自訂模型' },
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname, method } = { pathname: url.pathname, method: request.method };

    if (pathname === '/api/gpus')   return Response.json(GPU_LIST);
    if (pathname === '/api/models') return Response.json(MODEL_LIST);
    if (pathname === '/api/custom') {
      if (method === 'GET')  return handleGetCustom(env);
      if (method === 'POST') return handlePostCustom(request, env);
    }
    if (pathname === '/api/specs') {
      if (method === 'GET')    return handleGetSpecs(env);
      if (method === 'POST')   return handlePostSpec(request, env);
      if (method === 'DELETE') return handleDeleteSpec(request, env);
    }
    return new Response(renderPage(), { headers: { 'Content-Type': 'text/html;charset=utf-8' } });
  },
};

async function handleGetCustom(env) {
  if (!env.KV) return Response.json({ gpus: [], models: [] });
  const [g, m] = await Promise.all([env.KV.get('custom_gpus'), env.KV.get('custom_models')]);
  return Response.json({ gpus: JSON.parse(g || '[]'), models: JSON.parse(m || '[]') });
}

async function handlePostCustom(request, env) {
  if (!env.KV) return Response.json({ error: 'KV not configured' }, { status: 500 });
  const body = await request.json().catch(() => null);
  if (!body || !body.type) return Response.json({ error: 'invalid body' }, { status: 400 });

  const id = 'c_' + Date.now();
  if (body.type === 'gpu') {
    const name = String(body.name || '').trim();
    const price = Number(body.price) || 0;
    const tdp   = Number(body.tdp)   || 0;
    const vram  = Number(body.vram)  || 0;
    if (!name) return Response.json({ error: 'name required' }, { status: 400 });
    const list = JSON.parse(await env.KV.get('custom_gpus') || '[]');
    list.push({ id, name, price, tdp, vram });
    await env.KV.put('custom_gpus', JSON.stringify(list));
    return Response.json({ ok: true, id });
  }
  if (body.type === 'model') {
    const name = String(body.name || '').trim();
    if (!name) return Response.json({ error: 'name required' }, { status: 400 });
    const list = JSON.parse(await env.KV.get('custom_models') || '[]');
    list.push({ id, name });
    await env.KV.put('custom_models', JSON.stringify(list));
    return Response.json({ ok: true, id });
  }
  return Response.json({ error: 'unknown type' }, { status: 400 });
}

async function handleGetSpecs(env) {
  if (!env.KV) return Response.json([]);
  const raw = await env.KV.get('saved_specs');
  return Response.json(JSON.parse(raw || '[]'));
}

async function handlePostSpec(request, env) {
  if (!env.KV) return Response.json({ error: 'KV not configured' }, { status: 500 });
  const body = await request.json().catch(() => null);
  if (!body || !body.label) return Response.json({ error: 'label required' }, { status: 400 });
  const spec = {
    id:          's_' + Date.now(),
    label:       String(body.label).trim(),
    gpu_label:   String(body.gpu_label   || '').trim(),
    gpu_price:   Number(body.gpu_price)  || 0,
    gpu_qty:     Number(body.gpu_qty)    || 1,
    tdp:         Number(body.tdp)        || 0,
    model_label: String(body.model_label || '').trim(),
    tps:         Number(body.tps)        || 0,
    api_price:   Number(body.api_price)  || 0,
    elec_rate:   Number(body.elec_rate)  || 0,
    hours_day:   Number(body.hours_day)  || 0,
    saved_at:    new Date().toISOString(),
  };
  const list = JSON.parse(await env.KV.get('saved_specs') || '[]');
  list.unshift(spec);
  await env.KV.put('saved_specs', JSON.stringify(list.slice(0, 50)));
  return Response.json({ ok: true, id: spec.id });
}

async function handleDeleteSpec(request, env) {
  if (!env.KV) return Response.json({ error: 'KV not configured' }, { status: 500 });
  const body = await request.json().catch(() => null);
  if (!body || !body.id) return Response.json({ error: 'id required' }, { status: 400 });
  const list = JSON.parse(await env.KV.get('saved_specs') || '[]');
  await env.KV.put('saved_specs', JSON.stringify(list.filter(s => s.id !== body.id)));
  return Response.json({ ok: true });
}

function renderPage() {
  const gpuOptions = GPU_LIST.map(g => {
    const mem = g.vram ? (g.id.startsWith('apple-') ? ` — ${g.vram}GB 統一記憶體` : ` — ${g.vram}GB VRAM`) : '';
    return `<option value="${g.id}" data-price="${g.price}" data-tdp="${g.tdp}">${g.name}${mem}</option>`;
  }).join('\n');
  const modelOptions = MODEL_LIST.map(m =>
    `<option value="${m.id}">${m.name}</option>`
  ).join('\n');

  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>GPU 回本計算機</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"><\/script>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0f1117;--panel:#1a1d27;--border:#2a2d3a;--text:#e2e8f0;--muted:#8892a4;
  --accent:#6366f1;--accent-h:#818cf8;--green:#22c55e;--red:#ef4444;--yellow:#f59e0b;--r:10px
}
body{background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;min-height:100vh}
a{color:var(--accent-h);text-decoration:none}a:hover{text-decoration:underline}
header{padding:18px 24px;border-bottom:1px solid var(--border);display:flex;align-items:baseline;gap:12px}
header h1{font-size:18px;font-weight:600}
header span{color:var(--muted);font-size:13px}
.layout{display:grid;grid-template-columns:400px 1fr;gap:20px;padding:20px;max-width:1280px;margin:0 auto}
@media(max-width:820px){.layout{grid-template-columns:1fr}}
.panel{background:var(--panel);border:1px solid var(--border);border-radius:var(--r);padding:20px}
.sec{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin-bottom:14px}
.field{margin-bottom:14px}
.field label{display:block;font-size:12px;color:var(--muted);margin-bottom:5px}
select,input[type=number],input[type=text]{width:100%;background:var(--bg);border:1px solid var(--border);border-radius:6px;color:var(--text);padding:8px 10px;font-size:13px;outline:none;transition:border-color .15s}
select:focus,input:focus{border-color:var(--accent)}
.row{display:flex;gap:8px}
.row>.field{flex:1;margin-bottom:0}
.btn{padding:8px 14px;border-radius:6px;border:none;font-size:12px;font-weight:500;cursor:pointer;transition:background .15s;white-space:nowrap}
.btn-primary{background:var(--accent);color:#fff;width:100%;padding:11px;font-size:14px;border-radius:8px;margin-top:6px}
.btn-primary:hover{background:var(--accent-h)}
.btn-save{background:rgba(99,102,241,.15);color:var(--accent-h);border:1px solid rgba(99,102,241,.3);padding:6px 12px;font-size:12px}
.btn-save:hover{background:rgba(99,102,241,.25)}
.btn-save:disabled{opacity:.4;cursor:not-allowed}
hr{border:none;border-top:1px solid var(--border);margin:18px 0}
.custom-box{background:rgba(99,102,241,.05);border:1px solid rgba(99,102,241,.2);border-radius:8px;padding:12px;margin-top:8px;display:none}
.custom-box.open{display:block}
.custom-box label{font-size:12px;color:var(--muted);display:block;margin-bottom:5px}
.custom-save-row{display:flex;align-items:center;gap:8px;margin-top:8px}
.save-msg{font-size:12px;color:var(--green)}
.save-msg.err{color:var(--red)}
.total-price{font-size:12px;color:var(--muted);margin-top:4px}
.total-price strong{color:var(--text)}
.cards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px}
.card{background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:14px 16px}
.card.hi{border-color:var(--accent)}
.card .lbl{font-size:11px;color:var(--muted);margin-bottom:4px}
.card .val{font-size:22px;font-weight:700}
.card .sub{font-size:11px;color:var(--muted);margin-top:2px}
.green{color:var(--green)}.red{color:var(--red)}.yellow{color:var(--yellow)}
.placeholder{color:var(--muted);text-align:center;padding:80px 20px;font-size:13px;line-height:1.8}
.never{background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.4);border-radius:8px;padding:14px;color:var(--red);font-size:13px;line-height:1.7;margin-bottom:16px}
.chart-wrap{position:relative;height:320px}
.specs-bar{background:var(--panel);border:1px solid var(--border);border-radius:var(--r);padding:14px 20px;margin-bottom:0}
.specs-bar .sec{margin-bottom:10px}
.specs-list{display:flex;flex-wrap:wrap;gap:8px}
.spec-chip{display:inline-flex;align-items:center;gap:6px;background:var(--bg);border:1px solid var(--border);border-radius:6px;padding:5px 10px;font-size:12px;cursor:pointer;transition:border-color .15s}
.spec-chip:hover{border-color:var(--accent)}
.spec-chip .chip-del{color:var(--muted);font-size:11px;line-height:1;padding:1px 3px;border-radius:3px}
.spec-chip .chip-del:hover{background:rgba(239,68,68,.15);color:var(--red)}
.save-spec-row{display:flex;gap:8px;margin-top:10px;align-items:center}
.save-spec-row input[type=text]{flex:1;font-size:13px}
.btn-save-spec{background:rgba(99,102,241,.15);color:var(--accent-h);border:1px solid rgba(99,102,241,.3);padding:8px 14px;font-size:13px;border-radius:6px;white-space:nowrap}
.btn-save-spec:hover{background:rgba(99,102,241,.25)}
</style>
</head>
<body>
<header>
  <h1>⚡ GPU 回本計算機</h1>
  <span> 計算自架 GPU vs 外部 API 費用的回本時間</span>
</header>
<div id="specs-bar" class="specs-bar" style="max-width:1280px;margin:16px auto 0;display:none">
  <div class="sec">已儲存的設定</div>
  <div class="specs-list" id="specs-list"></div>
</div>
<div class="layout">
  <div>
    <div class="panel">
      <div class="sec">硬體設定</div>
      <div class="field">
        <label>GPU 型號</label>
        <select id="g-gpu">${gpuOptions}</select>
        <div class="custom-box" id="gpu-custom-box">
          <label>自訂型號名稱</label>
          <input type="text" id="gpu-custom-name" placeholder="例：RTX 5090">
          <div class="custom-save-row">
            <button class="btn btn-save" id="btn-save-gpu">儲存到清單</button>
            <span class="save-msg" id="gpu-save-msg"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="field" style="flex:2"><label>單價 (USD)</label><input type="number" id="g-price" min="0" step="1" placeholder="1599"></div>
        <div class="field" style="flex:1"><label>數量</label><input type="number" id="g-qty" min="1" step="1" value="1"></div>
        <div class="field" style="flex:2"><label>TDP / 顆 (瓦特)</label><input type="number" id="g-tdp" min="1" step="1" placeholder="450"></div>
      </div>
      <div class="total-price" id="total-price-display"></div>

      <hr>
      <div class="sec">模型設定</div>
      <div class="field">
        <label>AI 模型</label>
        <select id="g-model">${modelOptions}</select>
        <div class="custom-box" id="model-custom-box">
          <label>自訂模型名稱</label>
          <input type="text" id="model-custom-name" placeholder="例：Kimi K3、GLM-5-9B">
          <div class="custom-save-row">
            <button class="btn btn-save" id="btn-save-model">儲存到清單</button>
            <span class="save-msg" id="model-save-msg"></span>
          </div>
        </div>
      </div>
      <div class="field">
        <label>推論速度 (tokens/sec，整組硬體合計)</label>
        <input type="number" id="g-tps" min="0.1" step="0.1" placeholder="例：80">
      </div>

      <hr>
      <div class="sec">API 費用比較基準</div>
      <div class="field">
        <label>外部 API 輸出價格 (USD / 1M tokens)</label>
        <input type="number" id="g-api" min="0" step="0.01" placeholder="例：3.00">
      </div>

      <hr>
      <div class="sec">使用情境</div>
      <div class="row">
        <div class="field"><label>電費 (USD/kWh)</label><input type="number" id="g-elec" min="0" step="0.001" value="0.10"></div>
        <div class="field"><label>每日使用時數</label><input type="number" id="g-hours" min="0.5" max="24" step="0.5" value="8"></div>
      </div>
      <button class="btn btn-primary" id="btn-calc">計算回本時間</button>
      <div class="save-spec-row">
        <input type="text" id="spec-label" placeholder="設定名稱，例：4× H100 + LLaMA 70B">
        <button class="btn btn-save-spec" id="btn-save-spec">💾 儲存設定</button>
      </div>
      <span class="save-msg" id="spec-save-msg" style="font-size:12px;display:block;margin-top:6px"></span>
    </div>
  </div>

  <div>
    <div class="panel">
      <div class="placeholder" id="ph">填入左側參數後按「計算回本時間」</div>
      <div id="res" style="display:none">
        <div class="never" id="never" style="display:none"></div>
        <div class="cards" id="cards"></div>
        <div class="chart-wrap"><canvas id="ch"></canvas></div>
      </div>
    </div>
  </div>
</div>

<script>
(function(){
  function $(id){ return document.getElementById(id); }

  var gpuSel=$('g-gpu'), gpuPrice=$('g-price'), gpuQty=$('g-qty'), gpuTdp=$('g-tdp');
  var modelSel=$('g-model'), tpsIn=$('g-tps'), apiIn=$('g-api');
  var elecIn=$('g-elec'), hoursIn=$('g-hours');
  var chart=null;

  // ── Total price display ──────────────────────────────────────────────────

  function updateTotalDisplay() {
    var price = parseFloat(gpuPrice.value) || 0;
    var qty   = parseInt(gpuQty.value)    || 1;
    var el    = $('total-price-display');
    if (price > 0 && qty > 1) {
      el.innerHTML = '總價：<strong>$' + (price * qty).toLocaleString() + '</strong> USD（' + qty + ' × $' + price.toLocaleString() + '）';
    } else {
      el.textContent = '';
    }
  }
  gpuPrice.addEventListener('input', updateTotalDisplay);
  gpuQty.addEventListener('input', updateTotalDisplay);

  // ── Custom entry helpers ─────────────────────────────────────────────────

  function insertBeforeCustom(sel, opt) {
    var customOpt = sel.querySelector('option[value="custom"]');
    if (customOpt) sel.insertBefore(opt, customOpt);
    else sel.appendChild(opt);
  }

  function addGpuOption(g) {
    var opt = document.createElement('option');
    opt.value = g.id;
    opt.setAttribute('data-price', g.price || 0);
    opt.setAttribute('data-tdp', g.tdp || 0);
    opt.textContent = g.name + (g.vram ? ' — ' + g.vram + 'GB VRAM' : '');
    insertBeforeCustom(gpuSel, opt);
  }

  function addModelOption(m) {
    var opt = document.createElement('option');
    opt.value = m.id;
    opt.textContent = m.name;
    insertBeforeCustom(modelSel, opt);
  }

  fetch('/api/custom').then(function(r){ return r.json(); }).then(function(d){
    (d.gpus || []).forEach(addGpuOption);
    (d.models || []).forEach(addModelOption);
  }).catch(function(){});

  // ── GPU select ───────────────────────────────────────────────────────────

  gpuSel.addEventListener('change', function(){
    var o = gpuSel.selectedOptions[0];
    var p = o.getAttribute('data-price'), t = o.getAttribute('data-tdp');
    if (p && p !== '0') gpuPrice.value = p;
    if (t && t !== '0') gpuTdp.value = t;
    if (p === '0' && t === '0') { gpuPrice.value = ''; gpuTdp.value = ''; }
    $('gpu-custom-box').className = o.value === 'custom' ? 'custom-box open' : 'custom-box';
    updateTotalDisplay();
  });
  gpuSel.dispatchEvent(new Event('change'));

  // ── Model select ─────────────────────────────────────────────────────────

  modelSel.addEventListener('change', function(){
    var v = modelSel.selectedOptions[0].value;
    $('model-custom-box').className = v === 'custom' ? 'custom-box open' : 'custom-box';
  });

  // ── Save custom GPU ──────────────────────────────────────────────────────

  $('btn-save-gpu').addEventListener('click', async function(){
    var name = $('gpu-custom-name').value.trim();
    var price = parseFloat(gpuPrice.value) || 0;
    var tdp   = parseFloat(gpuTdp.value)   || 0;
    if (!name) { showSaveMsg('gpu-save-msg', '請填入型號名稱', true); return; }
    $('btn-save-gpu').disabled = true;
    try {
      var r = await fetch('/api/custom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'gpu', name: name, price: price, tdp: tdp, vram: 0 }),
      });
      var d = await r.json();
      if (!r.ok || d.error) { showSaveMsg('gpu-save-msg', d.error || '儲存失敗', true); return; }
      addGpuOption({ id: d.id, name: name, price: price, tdp: tdp, vram: 0 });
      gpuSel.value = d.id;
      $('gpu-custom-box').className = 'custom-box';
      showSaveMsg('gpu-save-msg', '已儲存！', false);
    } catch(e) {
      showSaveMsg('gpu-save-msg', e.message, true);
    } finally {
      $('btn-save-gpu').disabled = false;
    }
  });

  // ── Save custom model ────────────────────────────────────────────────────

  $('btn-save-model').addEventListener('click', async function(){
    var name = $('model-custom-name').value.trim();
    if (!name) { showSaveMsg('model-save-msg', '請填入模型名稱', true); return; }
    $('btn-save-model').disabled = true;
    try {
      var r = await fetch('/api/custom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'model', name: name }),
      });
      var d = await r.json();
      if (!r.ok || d.error) { showSaveMsg('model-save-msg', d.error || '儲存失敗', true); return; }
      addModelOption({ id: d.id, name: name });
      modelSel.value = d.id;
      $('model-custom-box').className = 'custom-box';
      showSaveMsg('model-save-msg', '已儲存！', false);
    } catch(e) {
      showSaveMsg('model-save-msg', e.message, true);
    } finally {
      $('btn-save-model').disabled = false;
    }
  });

  function showSaveMsg(id, msg, isErr) {
    var el = $(id);
    el.textContent = msg;
    el.className = 'save-msg' + (isErr ? ' err' : '');
    setTimeout(function(){ el.textContent = ''; }, 3000);
  }

  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ── Saved specs ──────────────────────────────────────────────────────────

  var specsBar = $('specs-bar'), specsList = $('specs-list');
  var specsCache = [];

  function renderSpecs(specs) {
    if (!specs || !specs.length) { specsBar.style.display = 'none'; return; }
    specsBar.style.display = '';
    specsList.innerHTML = specs.map(function(s) {
      return '<div class="spec-chip" data-id="' + esc(s.id) + '">' +
        '<span>' + esc(s.label) + '</span>' +
        '<span class="chip-del" data-del="' + esc(s.id) + '">✕</span>' +
        '</div>';
    }).join('');
    specsList.querySelectorAll('.spec-chip').forEach(function(chip) {
      chip.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-del')) return;
        var s = specsCache.find(function(x){ return x.id === chip.getAttribute('data-id'); });
        if (s) loadSpec(s);
      });
      chip.querySelector('.chip-del').addEventListener('click', function(e) {
        e.stopPropagation();
        deleteSpec(this.getAttribute('data-del'));
      });
    });
  }

  fetch('/api/specs').then(function(r){ return r.json(); }).then(function(list) {
    specsCache = list;
    renderSpecs(list);
  }).catch(function(){});

  function loadSpec(s) {
    if (s.gpu_price) gpuPrice.value = s.gpu_price;
    if (s.gpu_qty)   gpuQty.value   = s.gpu_qty;
    if (s.tdp)       gpuTdp.value   = s.tdp;
    if (s.tps)       tpsIn.value    = s.tps;
    if (s.api_price) apiIn.value    = s.api_price;
    if (s.elec_rate) elecIn.value   = s.elec_rate;
    if (s.hours_day) hoursIn.value  = s.hours_day;
    updateTotalDisplay();
  }

  async function deleteSpec(id) {
    specsCache = specsCache.filter(function(s){ return s.id !== id; });
    renderSpecs(specsCache);
    fetch('/api/specs', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: id }) }).catch(function(){});
  }

  $('btn-save-spec').addEventListener('click', async function() {
    var label = $('spec-label').value.trim();
    if (!label) { showSaveMsg('spec-save-msg', '請填入設定名稱', true); return; }
    var body = {
      label:       label,
      gpu_label:   gpuSel.selectedOptions[0].text.replace(/\s*—.*/,'').replace(/＋\s*/,'').trim(),
      gpu_price:   parseFloat(gpuPrice.value) || 0,
      gpu_qty:     parseInt(gpuQty.value)     || 1,
      tdp:         parseFloat(gpuTdp.value)   || 0,
      model_label: modelSel.selectedOptions[0].text.replace(/＋\s*/,'').trim(),
      tps:         parseFloat(tpsIn.value)    || 0,
      api_price:   parseFloat(apiIn.value)    || 0,
      elec_rate:   parseFloat(elecIn.value)   || 0,
      hours_day:   parseFloat(hoursIn.value)  || 0,
    };
    $('btn-save-spec').disabled = true;
    try {
      var r = await fetch('/api/specs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      var d = await r.json();
      if (!r.ok || d.error) { showSaveMsg('spec-save-msg', d.error || '儲存失敗', true); return; }
      specsCache.unshift(Object.assign({ id: d.id }, body));
      renderSpecs(specsCache);
      $('spec-label').value = '';
      showSaveMsg('spec-save-msg', '設定已儲存！', false);
    } catch(e) {
      showSaveMsg('spec-save-msg', e.message, true);
    } finally {
      $('btn-save-spec').disabled = false;
    }
  });

  // ── Calculate ────────────────────────────────────────────────────────────

  $('btn-calc').addEventListener('click', calc);

  function fmtN(n) {
    if (n >= 1e12) return (n/1e12).toFixed(2) + 'T';
    if (n >= 1e9)  return (n/1e9).toFixed(2)  + 'B';
    if (n >= 1e6)  return (n/1e6).toFixed(2)  + 'M';
    if (n >= 1e3)  return (n/1e3).toFixed(1)  + 'K';
    return n.toFixed(0);
  }
  function fmtD(d) {
    if (d >= 730) return (d/365).toFixed(1) + ' 年';
    if (d >= 30)  return (d/30).toFixed(1)  + ' 個月';
    return Math.ceil(d) + ' 天';
  }

  function calc() {
    var unitPrice = parseFloat(gpuPrice.value);
    var qty       = parseInt(gpuQty.value)    || 1;
    var tdpEach   = parseFloat(gpuTdp.value);
    var tps       = parseFloat(tpsIn.value);
    var api       = parseFloat(apiIn.value);
    var elec      = parseFloat(elecIn.value);
    var hours     = parseFloat(hoursIn.value);
    if ([unitPrice, tdpEach, tps, api, elec, hours].some(function(v){ return isNaN(v) || v < 0; })) {
      alert('請填入所有欄位的有效數值'); return;
    }

    var totalPrice = unitPrice * qty;
    var totalTdp   = tdpEach * qty;
    var tokDay     = tps * 3600 * hours;
    var elecDay    = (totalTdp / 1000) * hours * elec;
    var apiDay     = tokDay * (api / 1e6);
    var netDay     = apiDay - elecDay;

    $('ph').style.display = 'none';
    $('res').style.display = '';

    var qtyNote = qty > 1 ? '（' + qty + ' × $' + unitPrice.toLocaleString() + '）' : '';

    if (netDay <= 0) {
      $('never').style.display = '';
      $('never').innerHTML =
        '<strong>⚠️ 此設定無法回本</strong><br>' +
        '每日自架電費 <strong>$' + elecDay.toFixed(4) + '</strong> ≥ 同量 tokens 的 API 費用 <strong>$' + apiDay.toFixed(4) + '</strong>。<br>' +
        '在此使用量下，直接付費 API 比買 GPU 更划算。';
      $('cards').innerHTML =
        '<div class="card"><div class="lbl">硬體總投入</div><div class="val">$' + totalPrice.toLocaleString() + '</div><div class="sub">' + qtyNote + '</div></div>' +
        '<div class="card"><div class="lbl">每日自架電費</div><div class="val red">$' + elecDay.toFixed(4) + '</div><div class="sub">等效 API $' + apiDay.toFixed(4) + '/天</div></div>';
      drawChart(totalPrice, elecDay, apiDay, 365, null);
      return;
    }

    $('never').style.display = 'none';
    var days      = totalPrice / netDay;
    var tokens    = tokDay * days;
    var totalElec = elecDay * days;

    $('cards').innerHTML =
      '<div class="card hi"><div class="lbl">回本天數</div><div class="val green">' + fmtD(days) + '</div><div class="sub">第 ' + Math.ceil(days) + ' 天起開始盈餘</div></div>' +
      '<div class="card"><div class="lbl">硬體總投入</div><div class="val">$' + totalPrice.toLocaleString() + '</div><div class="sub">' + (qty > 1 ? qty + ' 張，單價 $' + unitPrice.toLocaleString() : '單張') + '</div></div>' +
      '<div class="card"><div class="lbl">回本需產生</div><div class="val">' + fmtN(tokens) + '</div><div class="sub">tokens</div></div>' +
      '<div class="card"><div class="lbl">回本時累計電費</div><div class="val yellow">$' + totalElec.toFixed(2) + '</div><div class="sub">USD（總 TDP ' + totalTdp + 'W）</div></div>';

    drawChart(totalPrice, elecDay, apiDay, days * 1.5, days);
  }

  function drawChart(totalPrice, elecDay, apiDay, maxDays, beDay) {
    if (chart) chart.destroy();
    var steps = 120, labels = [], gpuL = [], apiL = [];
    for (var i = 0; i <= steps; i++) {
      var d = (i / steps) * maxDays;
      labels.push(d.toFixed(1));
      gpuL.push(+(totalPrice + elecDay * d).toFixed(2));
      apiL.push(+(apiDay * d).toFixed(2));
    }
    var ctx = $('ch').getContext('2d');
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          { label: 'GPU + 電費 累計',    data: gpuL, borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,.08)', borderWidth: 2, pointRadius: 0, tension: .1 },
          { label: '等效 API 費用 累計', data: apiL, borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,.08)',  borderWidth: 2, pointRadius: 0, tension: .1 },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        interaction: { intersect: false, mode: 'index' },
        plugins: {
          legend: { labels: { color: '#8892a4', font: { size: 12 } } },
          tooltip: { callbacks: {
            title: function(items){ return '第 ' + items[0].label + ' 天'; },
            label: function(item){  return item.dataset.label + ': $' + item.raw; },
          }}
        },
        scales: {
          x: { ticks: { color: '#8892a4', maxTicksLimit: 10, callback: function(v){ return this.getLabelForValue(v) + 'd'; } }, grid: { color: '#2a2d3a' } },
          y: { ticks: { color: '#8892a4', callback: function(v){ return '$' + v; } }, grid: { color: '#2a2d3a' } },
        }
      }
    });
  }
})();
<\/script>
</body>
</html>`;
}
