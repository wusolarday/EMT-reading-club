# 互動腳本（v2 — 一章一檔 SPA 典範）

所有共用 JS 都在 `assets/js/chapter-nav.js`。**章節檔案不要重寫這些核心函數**，只要呼叫或透過 hook 擴充。

---

## 1. 共用 `switchView(viewId, btnElement)`

**由 `assets/js/chapter-nav.js` 提供，全域可用。**

行為：
1. 把所有 `.view-section` 加上 `hidden`、移除 `block` 與 `fade-in`
2. 找到目標 `<section id="<viewId>">`，移除 `hidden`、加上 `block` 與 `fade-in`
3. 把所有 `.nav-item` 移除 `active`，給點到的按鈕加上 `active`
4. 觸發 `window.onViewSwitch(viewId)` hook（若有定義）
5. 手機自動關閉漢堡選單抽屜
6. 把 main 滾動回頂

DOM 契約：
```html
<button onclick="switchView('view-foo', this)" class="nav-item ...">...</button>
<section id="view-foo" class="view-section hidden">...</section>
<section id="view-bar" class="view-section fade-in block">...</section>  <!-- 預設顯示 -->
```

---

## 2. `window.onViewSwitch` Hook（章節擴充點）

當你需要在進入某個 view 時做一次性初始化（Chart.js、地圖、影片等），**用這個 hook 而不是改 switchView**。

### 範例：Chart.js 延遲初始化

```js
window.chartInit = false;
window.onViewSwitch = function (viewId) {
    if (viewId === 'view-training' && !window.chartInit) {
        initTrainingChart();
        window.chartInit = true;
    }
};

function initTrainingChart() {
    const canvas = document.getElementById('trainingChart');
    if (!canvas || typeof Chart === 'undefined') return;
    new Chart(canvas.getContext('2d'), { /* ... */ });
}
```

### 範例：多個 view 各自需要初始化

```js
const initialized = {};
window.onViewSwitch = function (viewId) {
    if (initialized[viewId]) return;
    initialized[viewId] = true;

    switch (viewId) {
        case 'view-injury':   initInjuryChart();    break;
        case 'view-tripod':   initTripodDiagram();  break;
        case 'view-3d':       init3DModel();        break;
    }
};
```

---

## 3. 漢堡選單與遮罩（自動注入）

**不需要手動加任何 HTML。** `chapter-nav.js` 在 `DOMContentLoaded` 時會：

1. 抓取第一個 `<nav>`，加上 `.app-sidebar` class
2. 注入 `.mobile-topbar`（含漢堡按鈕、章節標題、回目錄連結）
3. 注入 `.sidebar-backdrop` 半透明遮罩
4. 綁定點漢堡開啟 / 點遮罩或 ESC 關閉
5. 點任一 `.nav-item` 切換 view 後，自動關閉抽屜

樣式在 `assets/css/styles.css` 內，斷點 1024px（lg）：
- ≥ 1024px：原本 w-72 側邊欄正常顯示，topbar 隱藏
- < 1024px：側邊欄變浮動抽屜，topbar 顯示在頁頂

如果想客製 topbar 的章節標題，給 `<nav>` 內的 `<h1>` 寫好標題即可，chapter-nav 會自動同步。

---

## 4. 章節內常用互動模板

### 4-1. 手風琴 Accordion（法規卡型）

```js
function toggleLaw(id) {
    const content = document.getElementById('law-content-' + id);
    const icon    = document.getElementById('law-icon-' + id);
    if (!content || !icon) return;
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.innerText = '-';
    } else {
        content.classList.add('hidden');
        icon.innerText = '+';
    }
}
```

DOM 契約：每張卡 `onclick="toggleLaw(N)"`、內容 `id="law-content-N"`、icon `id="law-icon-N"`。

### 4-2. 互動網格（duty-grid / sys-grid 型）

```js
const dutiesData = {
    1: { t: "1. 標題", c: "<p>...</p>" },
    /* ... */
};

function showDuty(id) {
    const data = dutiesData[id];
    if (!data) return;
    document.getElementById('duty-title').innerText = data.t;
    document.getElementById('duty-content').innerHTML = data.c;
    document.querySelectorAll('.duty-card').forEach(el => el.classList.remove('active'));
    document.getElementById('btn-duty-' + id).classList.add('active');
}
```

DOM 契約：按鈕 `id="btn-duty-N"` + `class="duty-card"`、顯示區 `id="duty-title"` 與 `id="duty-content"`。

> 若是新主題（例如八大生命徵象），就複製這個模板、把 `duty` 改成 `vital`、`Duty` 改成 `Vital`，DOM id 也跟著改。

### 4-3. 引言輪播

```js
const ethicsQuotes = ["引言 1", "引言 2", /* ... */];
let currentQuote = 0;
function changeQuote(direction) {
    currentQuote = (currentQuote + direction + ethicsQuotes.length) % ethicsQuotes.length;
    const textEl = document.getElementById('quote-text');
    textEl.style.opacity = '0';
    setTimeout(() => {
        textEl.innerText = ethicsQuotes[currentQuote];
        textEl.style.opacity = '1';
    }, 200);
}
```

---

## 5. 載入順序（很重要）

```html
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="./assets/js/tailwind-config.js"></script>
    <!-- 若需要 Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="./assets/css/styles.css">
</head>
<body>
    <nav>...</nav>
    <main>...</main>

    <!-- 1. 共用先載入 -->
    <script src="./assets/js/chapter-nav.js"></script>

    <!-- 2. 章節專屬 inline 腳本 -->
    <script>
        window.onViewSwitch = function (viewId) { /* ... */ };
        function toggleLaw(id) { /* ... */ }
        function showDuty(id) { /* ... */ }
        /* ... */
    </script>
</body>
```

如果你在 `chapter-nav.js` 之前定義 `window.onViewSwitch` 也沒關係 — chapter-nav 只是在 switchView 結尾呼叫它，誰先誰後不影響功能。
