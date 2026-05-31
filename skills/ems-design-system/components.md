# 元件模板（HTML 片段，可直接複製貼上）

> **v2 提醒**：採「一章一檔 SPA」典範後，所有元件都放在某個 `<section class="view-section">` 內，由 `switchView()` 控制顯示。共用樣式由 `assets/css/styles.css` 提供，請先確認 `<head>` 已載入：
> ```html
> <script src="https://cdn.tailwindcss.com"></script>
> <script src="./assets/js/tailwind-config.js"></script>
> <link rel="stylesheet" href="./assets/css/styles.css">
> ```
> 互動行為見 `scripts.md`。

---

## 1. 章節 Header（每頁開頭三件套）

```html
<header class="mb-8">
    <div class="inline-block bg-ems-blue text-white px-3 py-1 rounded text-sm font-bold mb-3 shadow-sm">P.XX - P.YY</div>
    <h2 class="text-3xl font-bold text-ems-navy">章節主標題</h2>
    <p class="text-ems-gray mt-2 text-lg">一句話導言，說明本節學什麼。</p>
</header>
```

---

## 2. 標準白卡（卡片基底）

```html
<div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="text-xl font-bold text-ems-navy mb-4 flex items-center gap-2">
        <span class="text-ems-orange text-2xl">🎯</span> 卡片標題
    </h3>
    <!-- 內容 -->
</div>
```

兩欄/三欄排版骨架：

```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
    <!-- 卡片 A -->
    <!-- 卡片 B -->
</div>
```

---

## 3. 學習目標清單（勾選列）

```html
<ul class="space-y-3">
    <li class="flex items-start gap-3 text-slate-700">
        <span class="text-ems-blue mt-0.5">☑</span>
        <span>第一點學習目標</span>
    </li>
    <li class="flex items-start gap-3 text-slate-700">
        <span class="text-ems-blue mt-0.5">☑</span>
        <span>第二點學習目標</span>
    </li>
</ul>
```

---

## 4. 左邊條段落（border-l 系列）

用於 "起源 / 沿革 / 對照" 短段落。

```html
<div class="space-y-4">
    <div class="border-l-4 border-slate-300 pl-4">
        <h4 class="font-bold text-ems-navy">小標題</h4>
        <p class="text-sm text-slate-600">內文說明。</p>
    </div>
    <div class="border-l-4 border-slate-300 pl-4">
        <h4 class="font-bold text-ems-navy">小標題</h4>
        <p class="text-sm text-slate-600">內文說明。</p>
    </div>
</div>
```

---

## 5. 時間軸 Timeline

需要 `styles.css` 提供的 `.timeline-item` 樣式。最後一項加上 `border-l-transparent` 移除尾線。

```html
<div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h3 class="text-xl font-bold text-ems-navy mb-6 border-b pb-2">時間軸標題</h3>
    <div class="ml-2">
        <div class="timeline-item">
            <span class="text-sm font-bold text-ems-blue">民國 XX 年</span>
            <h4 class="font-bold text-lg text-slate-800">事件標題</h4>
            <p class="text-slate-600 text-sm mt-1">事件描述。</p>
        </div>
        <div class="timeline-item">
            <span class="text-sm font-bold text-ems-orange">民國 XX 年 (核心)</span>
            <h4 class="font-bold text-lg text-slate-800">關鍵事件（橘色標籤代表核心）</h4>
            <p class="text-slate-600 text-sm mt-1">事件描述。</p>
        </div>
        <div class="timeline-item border-l-transparent">
            <span class="text-sm font-bold text-ems-blue">民國 XX 年</span>
            <h4 class="font-bold text-lg text-slate-800">最後一個事件</h4>
            <p class="text-slate-600 text-sm mt-1">事件描述。</p>
        </div>
    </div>
</div>
```

---

## 6. 手風琴 Accordion（法規定義卡）

需要 `assets/js/accordion.js`。每組三個對應的 id：`law-icon-N` / `law-content-N`，點擊容器 `onclick="toggleLaw(N)"`。

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer" onclick="toggleLaw(1)">
        <div class="p-5 bg-slate-50 border-b border-slate-200 flex justify-between items-center hover:bg-slate-100 transition">
            <h3 class="font-bold text-lg text-ems-navy">📜 標題</h3>
            <span class="text-ems-blue font-bold text-xl" id="law-icon-1">+</span>
        </div>
        <div class="p-5 hidden text-slate-700 text-sm leading-relaxed" id="law-content-1">
            展開後顯示的詳細內容。
        </div>
    </div>

    <!-- 核心強調版本：加 border-l-4 border-l-ems-orange -->
    <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer border-l-4 border-l-ems-orange" onclick="toggleLaw(2)">
        <div class="p-5 bg-slate-50 border-b border-slate-200 flex justify-between items-center hover:bg-slate-100 transition">
            <h3 class="font-bold text-lg text-ems-navy">🚨 強調標題</h3>
            <span class="text-ems-blue font-bold text-xl" id="law-icon-2">+</span>
        </div>
        <div class="p-5 hidden text-slate-700 text-sm leading-relaxed" id="law-content-2">
            核心重點內容，用 <strong>strong</strong> 標粗。
        </div>
    </div>

</div>
```

---

## 7. 互動網格 + 詳細區（九大職責型）

需要 `assets/js/duties.js`。預設第一顆按鈕加 `active`，內容區用 `id="duty-title"` / `id="duty-content"`。

```html
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <!-- 按鈕網格 -->
    <div class="lg:col-span-5 grid grid-cols-3 gap-3">
        <button onclick="showDuty(1)" id="btn-duty-1" class="duty-card active bg-white border border-slate-300 rounded-lg p-4 flex flex-col items-center justify-center text-slate-700 font-bold">
            <span class="text-2xl text-ems-blue mb-1">1</span>標籤
        </button>
        <!-- ...重複至 N -->
    </div>

    <!-- 詳細區（深底） -->
    <div class="lg:col-span-7 bg-ems-navy text-white rounded-xl p-8 shadow-md flex flex-col min-h-[350px]">
        <h3 id="duty-title" class="text-2xl font-bold text-ems-blue mb-4 border-b border-slate-700 pb-3">1. 標題</h3>
        <div id="duty-content" class="text-slate-300 space-y-3 leading-relaxed text-lg flex-1">
            <p class="font-bold text-white mb-2">重點一句話。</p>
            <ul class="list-disc pl-5 space-y-2 text-base">
                <li>細項 1</li>
                <li>細項 2</li>
            </ul>
        </div>
    </div>
</div>
```

> 若沿用同一份 `duties.js`，DOM 結構必須維持以上 id；若是新主題，請複製 `duties.js` 並改名（例如 `procedures.js`），同時改裡頭的 `dutiesData` / `showDuty` 函式名。

---

## 8. 引言輪播 Quote Carousel

需要 `assets/js/ethics.js`。資料在 `ethicsQuotes` 陣列，DOM 用 `id="quote-text"`。

```html
<div class="flex flex-col items-center justify-center mt-10 w-full max-w-4xl mx-auto">
    <div class="bg-white w-full p-10 rounded-2xl shadow-lg border-t-8 border-ems-orange relative text-center">
        <div class="text-6xl text-slate-100 absolute top-4 left-6 leading-none">&ldquo;</div>
        <div class="min-h-[120px] flex items-center justify-center flex-col relative z-10 px-8">
            <p id="quote-text" class="text-2xl font-bold text-slate-800 leading-relaxed">
                「引言初始文字」
            </p>
        </div>
        <div class="text-6xl text-slate-100 absolute bottom-4 right-6 rotate-180 leading-none">&ldquo;</div>
    </div>

    <div class="flex gap-4 mt-8">
        <button onclick="changeQuote(-1)" class="px-6 py-2 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 transition">◀ 前一則</button>
        <button onclick="changeQuote(1)"  class="px-6 py-2 bg-ems-navy text-white font-bold rounded-lg shadow-md hover:bg-slate-800 transition">下一則 ▶</button>
    </div>

    <div class="mt-8 text-sm text-slate-500 font-bold bg-slate-200 px-4 py-1 rounded-full">
        資料來源說明
    </div>
</div>
```

---

## 9. Chart.js 長條圖區塊

需要 CDN `chart.js` + `assets/js/training-chart.js`（或改寫的版本）。

```html
<div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
    <h3 class="text-xl font-bold text-ems-navy mb-2">圖表標題</h3>
    <p class="text-sm text-slate-500 mb-4">圖表說明</p>
    <div class="chart-container flex-1">
        <canvas id="trainingChart"></canvas>
    </div>
</div>
```

> 若是新圖表，請複製 `training-chart.js` 為 `<name>-chart.js`，改 canvas id 並調整 data / colors。Chart.js 預設配色：`['#94a3b8', '#0ea5e9', '#1e293b']`（slate / sky / navy）。

---

## 10. 深色強調區塊（生命之星型）

```html
<div class="bg-ems-navy p-8 rounded-xl shadow-md text-white border-t-4 border-ems-blue">
    <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-2/5 text-center flex flex-col items-center">
            <div class="bg-white p-4 rounded-xl mb-4 shadow-lg border-2 border-slate-200">
                <img src="../assets/img/your-image.png" alt="說明" class="object-contain drop-shadow-md">
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">圖名</h3>
            <p class="text-sm text-slate-300">英文副標或來源</p>
        </div>
        <div class="md:w-3/5">
            <p class="text-slate-300 mb-4 leading-relaxed">主要說明段落。</p>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-slate-800 p-3 rounded border border-slate-700 flex items-center gap-3">
                    <div class="bg-ems-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0">1</div>
                    <div class="text-sm font-bold">項目 <span class="text-slate-400 font-normal text-xs ml-1">(English)</span></div>
                </div>
                <!-- 重複項目 -->
            </div>
        </div>
    </div>
</div>
```

---

## 11. 比較卡（雙色對照）

如「英美 vs 德法體系」。

```html
<div class="grid grid-cols-1 gap-4">
    <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 relative overflow-hidden">
        <div class="absolute right-0 top-0 bg-ems-blue text-white px-2 py-1 rounded-bl-lg text-xs font-bold">標籤</div>
        <h4 class="font-bold text-ems-navy text-lg">A 方標題</h4>
        <ul class="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
            <li>特點 1（可用 <strong>strong</strong>）</li>
            <li>特點 2</li>
        </ul>
    </div>
    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 class="font-bold text-ems-navy text-lg">B 方標題</h4>
        <ul class="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
            <li>特點 1</li>
            <li>特點 2</li>
        </ul>
    </div>
</div>
```

---

## 12. 進階差異塊（EMT-2 增列項目樣式）

```html
<div class="border border-ems-blue rounded-lg p-4 bg-blue-50 relative">
    <div class="absolute -left-[1px] top-4 w-1 h-8 bg-ems-blue"></div>
    <div class="font-bold text-ems-navy flex justify-between items-center mb-2">
        <span>項目名稱</span>
        <span class="text-xs bg-blue-200 px-2 py-1 rounded text-blue-800">標記</span>
    </div>
    <p class="text-sm text-slate-600 font-medium italic mb-1">前綴說明：</p>
    <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1">
        <li>增列項 1</li>
        <li>增列項 2</li>
    </ul>
</div>
```

---

## 13. 側邊導覽 Sidebar（章節內部）

> **v2 變更**：v1 是「全域共用 sidebar」（每頁複製一份），v2 是「每章自己的 sidebar」。每個 `chapN.html` 的側邊欄只列出該章的小節。完整骨架見 `templates/page.html`。
>
> `chapter-nav.js` 會自動：
> - 在第一個 `<nav>` 加上 `.app-sidebar` class
> - 注入手機版 `.mobile-topbar` + 漢堡按鈕 + 半透明遮罩
> - 處理 RWD 抽屜開合
>
> 你需要做的只有：寫好 `<button onclick="switchView('view-X', this)">` 與對應 `<section id="view-X" class="view-section hidden">`。
>
> 跨章節導覽（章與章之間）由 `index.html` 目錄頁負責，每個章節 sidebar 底部都應有「← 回章節目錄」連結。

