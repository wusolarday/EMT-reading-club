---
name: ems-design-system
description: 製作 EMT 海栓讀書會新章節時使用。本 skill 把使用者上傳的《緊急醫療救護技術員實務》課本圖片/文字，依「醫療教育 + 資訊架構 + UI/UX」三重視角，轉成互動式 SPA 網頁儀表板。專案採「一章一檔 SPA」典範：每章 chapN.html 自成一頁、內部用左側欄 + switchView() 切換小節；首頁 index.html 為章節目錄；共用 Tailwind config / 樣式 / 互動 JS 與漢堡選單 RWD 都集中在 assets/。本 skill 提供 5 條核心鐵則、完整骨架、設計 token、HTML 元件、JS 片段。觸發條件：使用者要求「新增第 N 章」「整合章節內容」「製作 EMT 讀書會頁面」「依設計系統做新一章」，或提到 ems-navy / ems-blue / ems-orange / view-section / switchView 等專案專用詞。
---

# EMS 海栓讀書會 設計系統（v2）

> **角色設定**：執行本 skill 時，請以「專精**醫療教育與資訊架構**的資深前端工程師 + UI/UX 設計師」的視角思考。任務是把使用者上傳的課本圖片或文字，轉換為「互動式 SPA 網頁儀表板」，而不是把文字原封不動貼上。

> **重要變更**：v2（2026-05）以後採「一章一檔 SPA」典範，與 v1 多子頁不同。v1 舊檔已封存到 `_archive/`。

## 🔥 五條核心鐵則（不可違反）

承襲自原版 Gem 系統指令的核心開發原則。任何章節產出都必須符合：

1. **SPA 單檔架構**：每一章的所有 view 必須整合在單一 `chapN.html` 內，由 `switchView()` 切換。**不要再像 v1 一樣拆成多個 HTML 子頁**。
2. **嚴格對照頁碼**：左側選單與每個 view 的 header 都必須精準標示「課本頁碼」（例如 `P.32 - P.35`），方便讀書會成員對照紙本書。每個小節按鈕的副標也要附頁次與一句提示。
3. **圖示與圖表**：資料視覺化（統計、比較、時數）用 Chart.js（chap1 訓練時數、chap3 傷亡統計都是這樣做的）。圖示與插圖可彈性選用：Unicode emoji（🚑🩺🧠🫁❤️📜🚨🎯⚠️ 等）、HTML/CSS 形狀（圓點、邊框、漸層、純色塊）、**SVG**，或**直接嵌入課本擷取圖**（`<img src="./assets/img/檔名">`，圖檔放 `assets/img/`）。當課本本身有現成圖（如生命之鏈、流程圖、解剖圖）時，**優先嵌入原圖**以求與紙本精準對照，不必勉強重繪。Mermaid 仍建議避免（流程圖用 CSS 節點、SVG 或 Chart.js 即可）。
4. **Tailwind 標準色彩**：所有顏色用 ems-* token（`bg-ems-blue` / `text-ems-orange` / `border-ems-navy`）或 Tailwind 內建的 slate-* 灰階。**禁止硬寫 hex 色**。token 定義在 `assets/js/tailwind-config.js`。
5. **降低認知負荷**（最重要的一條）：**嚴禁直接把課本的大段文字原封貼上**。要依內容屬性，主動轉換成下列元件之一：

    | 課本內容類型 | 對應元件 |
    |---|---|
    | 時序、演進、里程碑 | **時間軸**（`.timeline-item`） |
    | 條列定義、法條、繁雜流程、名詞解釋 | **手風琴摺疊卡片**（accordion） |
    | 多步驟、多類別實務 | **左右佈局互動網格**（duty-grid 模式） |
    | 數據比較、訓練時數、統計 | **Chart.js 圖表** |
    | 經驗分享、結語、倫理、語錄 | **引言輪播** |
    | 對照、二元/多元比較 | **雙色對照卡** 或 **data-table** |
    | 重要規範、警示 | 深底 `bg-ems-navy` 強調卡 + `border-t-4 border-ems-orange` |
    | 階層概念（如細胞→組織→器官） | 水平箭頭流程圖 + 漸層底 |

## 使用流程（請依序執行）

1. **先看 `tokens.md`** — 確認 ems-* 色票、字體、間距。所有顏色由 `assets/js/tailwind-config.js` 註冊，直接用 `bg-ems-blue` 即可，**不要硬寫 hex**。
2. **看 `components.md`** — 找符合需求的元件（章節 header / 卡片 / 時間軸 / 手風琴 / duty-grid / sys-card / 引言輪播 / Chart.js 區塊 / data-table），複製整段 HTML。
3. **新增章節時**：
   - 複製 `templates/page.html` 為 `chapN.html`（放在專案根目錄，與 chap1/2/3 同層）
   - 把 `__CHAPTER_NUM__` / `__CHAPTER_TITLE__` / `__BOOK_RANGE__` 等變數取代
   - 在 nav 內加 `<button onclick="switchView('view-X', this)">` 並新增對應 `<section id="view-X" class="view-section hidden">`
4. **加入互動行為時**：`switchView()` 共用、不需要重寫。若需要在某 view 進入時做初始化（例如 Chart.js），用 `window.onViewSwitch = function(viewId){...}` hook，**不要**修改共用的 `switchView` 函數。詳見 `scripts.md`。
5. **新增章節後務必更新 `index.html` 目錄頁**：新增一張章節卡片連到 chapN.html，並把 chip 區的 placeholder 文字往後推。

## 專案結構

```
MPC/
├── index.html               # ⭐ 章節目錄（TOC）— 不用側欄，純卡片清單
├── chap1.html               # 第一章（內含 6 個 view-section）
├── chap2.html               # 第二章（含八大生命徵象互動）
├── chap3.html               # 第三章（含 Chart.js）
├── chapN.html               # 後續章節持續新增 …
├── assets/
│   ├── css/styles.css       # 共用樣式 + RWD/漢堡選單
│   ├── img/                 # 課本擷取圖
│   └── js/
│       ├── tailwind-config.js   # ems-* 色票
│       └── chapter-nav.js       # 共用 switchView + 漢堡選單自動注入
├── _archive/                # v1 舊檔，不要動
└── skills/ems-design-system/    # ← 本 skill
```

## 一個章節頁面的最小結構

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EMT 海栓讀書會 - 第 N 章 ...</title>

    <!-- 1. 共用資源（順序很重要） -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="./assets/js/tailwind-config.js"></script>
    <!-- 若需要 Chart.js: -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/styles.css">
</head>
<body class="flex h-screen bg-ems-light font-sans text-slate-800">

    <!-- 2. 章節內部側邊欄（chapter-nav.js 會自動加上 .app-sidebar 與漢堡選單） -->
    <nav class="w-72 bg-ems-navy text-slate-300 flex flex-col shadow-2xl z-20 shrink-0">
        <div class="p-6 border-b border-slate-700 bg-slate-900">
            <h1 class="text-xl font-bold text-white tracking-wide">第 N 章 章節標題</h1>
            <p class="text-xs text-ems-blue font-medium mt-1">副標</p>
        </div>
        <div class="flex-1 overflow-y-auto py-2">
            <button onclick="switchView('view-1', this)" class="nav-item active w-full text-left px-6 py-2.5 hover:bg-slate-800 flex flex-col gap-0.5">
                <span class="font-bold text-sm">小節 1 標題</span>
                <span class="text-[11px] text-slate-400">P.X - P.Y</span>
            </button>
            <!-- ... 更多按鈕 -->
        </div>
        <a href="./index.html" class="block p-4 border-t border-slate-700 text-xs text-slate-400 hover:bg-slate-800 transition">← 回章節目錄</a>
    </nav>

    <!-- 3. 主內容區 -->
    <main class="flex-1 overflow-y-auto p-8 md:p-12 relative bg-slate-50/50">
        <section id="view-1" class="view-section fade-in block">
            ...
        </section>
        <section id="view-2" class="view-section hidden">
            ...
        </section>
    </main>

    <!-- 4. 共用 JS — 一定要載入 chapter-nav.js -->
    <script src="./assets/js/chapter-nav.js"></script>
    <script>
        // 可選：onViewSwitch hook，用來在進入某 view 時做初始化
        window.onViewSwitch = function (viewId) {
            // e.g., if (viewId === 'view-3' && !window.chartInit) { initChart(); window.chartInit = true; }
        };
    </script>
</body>
</html>
```

## 設計原則

- **每章獨立一檔**：可以個別交付/發表/分享。檔案大不是問題。
- **不重寫共用邏輯**：`switchView`、漢堡選單、表格樣式都在 `assets/`。章節 HTML 只放章節專屬的 data 與 view 內容。
- **章節 header 三件套**：頁次徽章（`bg-ems-blue`）→ `h2` 大標（`text-3xl font-bold text-ems-navy`）→ 導言（`text-ems-gray text-lg`）。
- **小節用 `<section class="view-section hidden">`**，第一個小節初始狀態加 `class="view-section fade-in block"`。
- **不要硬寫 hex 色**：全部用 ems-* token 或 Tailwind slate-* 灰階。
- **RWD 不用手動處理**：`chapter-nav.js` 會自動在 lg 以下注入漢堡選單與遮罩。但如果加新元件，記得把寬表格用 `overflow-x-auto` 包起來避免溢出。
- **資料圖表用 Chart.js**；插圖可用 SVG 或直接嵌入課本擷取圖（圖檔放 `assets/img/`，課本現成圖優先嵌入）。僅 Mermaid 仍建議避免。

## 載入順序（CRITICAL）

```
1. https://cdn.tailwindcss.com           ← 一定最先
2. ./assets/js/tailwind-config.js        ← 必須在 tailwind 之後、其它 JS 之前
3. (可選) Chart.js 或其他 CDN
4. Noto Sans TC font
5. ./assets/css/styles.css
6. <body>內容
7. ./assets/js/chapter-nav.js            ← main 結束後、章節專屬 JS 之前
8. <script>章節專屬 onViewSwitch / 資料 / 函式</script>
```

## 新增章節 Checklist

- [ ] 複製 `templates/page.html` 到 `chapN.html`
- [ ] 改 `<title>` 與側欄 h1（主標格式：**「第N章 + 完整課本章節名稱」**）
- [ ] **不要**改副標 — 統一為「Finn & 51先 & 米歇 & 倚安 · 週二 21:00–22:00」
- [ ] 設定側邊欄按鈕（每個小節一個 button + 對應 section id）
- [ ] 每個 section 加章節 header 三件套（頁次徽章 / h2 / 導言）
- [ ] 若用 Chart.js：載入 CDN，並用 `onViewSwitch` 在 view 進入時初始化
- [ ] 加 `← 回章節目錄` 連結指向 `./index.html`（在 `</nav>` 之前）
- [ ] 在 `index.html` 新增章節卡（複製其他卡，改章節號 / 標題 / 頁次範圍 / 小節清單）
- [ ] 桌面 (≥1024px) 與手機 (<1024px) 兩種寬度各看一次

### 副標一致化規則

`<p>` 副標統一寫死為下列字串（不要動）：

```
Finn & 51先 & 米歇 & 倚安 · 週二 21:00–22:00
```

對應的 index.html footer 與 hero 描述也用同一組成員資訊。教材來源統一寫成「**內政部消防署《救護技術員教科書》**」（不是「初級救護技術員訓練教材」）。

## 參考檔案

- `tokens.md` — 完整色票、字體、間距、shadow 對照表
- `components.md` — 13+ 個 HTML 元件完整片段
- `scripts.md` — `chapter-nav.js` API、`onViewSwitch` hook、手風琴 / duty-grid / quote-carousel 模板
- `templates/page.html` — 新章節空白骨架（含預留替換變數）

## 🗣 推薦提示詞（使用者啟動新章節時用這句）

精簡版（**推薦**，一句到位）：

> 「依 ems-design-system 做第 N 章 chapN.html，對照課本 P.X–P.Y，並更新 index.html 章節卡。」

加上元件提示版（若內容類型已明確）：

> 「依 ems-design-system 做第 N 章 chapN.html（P.X–P.Y），主要用[時間軸 / 手風琴 / 互動網格 / Chart.js]，並更新 index.html 章節卡。」

收到上述任一句時，Claude 應自動：

1. 把上傳的課本圖片視為章節內容來源
2. 套用五條核心鐵則（不貼大段原文）
3. 從 `templates/page.html` 開新檔
4. 依內容類型選元件（對應上面表格）
5. 寫完後在 `index.html` 補一張章節卡
6. 桌面 + 手機都檢查
