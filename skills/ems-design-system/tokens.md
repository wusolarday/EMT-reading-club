# 設計 Tokens

## 色票 (Palette)

主色票已在 `assets/js/tailwind-config.js` 註冊為 `ems-*`，可直接以 Tailwind class 使用。

| Token        | Hex       | Tailwind class                      | 用途                                                  |
|--------------|-----------|-------------------------------------|-------------------------------------------------------|
| `ems-navy`   | `#1e293b` | `bg-ems-navy` `text-ems-navy`       | 側欄背景、深色強調卡背景、章節主標題文字              |
| `ems-blue`   | `#0284c7` | `bg-ems-blue` `text-ems-blue`       | 主要互動色、頁次徽章、時間軸圓點、CTA 按鈕            |
| `ems-orange` | `#ea580c` | `bg-ems-orange` `text-ems-orange`   | 核心強調（hover 邊框、引言卡頂邊條、重點里程碑文字）  |
| `ems-gray`   | `#64748b` | `text-ems-gray`                     | 導言、次要說明文字                                    |
| `ems-light`  | `#f8fafc` | `bg-ems-light`                      | 主內容區背景                                          |
| `ems-danger` | `#dc2626` | `bg-ems-danger` `text-ems-danger`   | **v2 新增**：致命警告（CO 中毒、瀕死、嚴重出血）。比 ems-orange 更強烈，僅在真正危急的醫療警示時使用 |

## 輔助灰階（直接用 Tailwind 內建）

| 角色             | Class                  |
|------------------|------------------------|
| body 背景        | `bg-slate-100` (#f1f5f9，已寫在 styles.css) |
| 邊框             | `border-slate-200`     |
| 次要文字 / icon  | `text-slate-300` `text-slate-400` `text-slate-500` |
| 卡片內 hover bg  | `hover:bg-slate-100` `hover:bg-slate-800`（深底） |
| 中性背景區塊     | `bg-slate-50` `bg-slate-800` |

## 字體 (Typography)

- Family：`'Noto Sans TC', sans-serif`（已在 styles.css 套到 body，並由 Tailwind config 設成 `font-sans`）
- 載入：`https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap`

| 用途              | Class                                            |
|-------------------|--------------------------------------------------|
| 品牌標題（側欄）  | `text-2xl font-bold tracking-wide text-white`    |
| 章節 H2           | `text-3xl font-bold text-ems-navy`               |
| 卡片標題 H3       | `text-xl font-bold text-ems-navy`                |
| 子卡標題 H4       | `font-bold text-lg text-slate-800`               |
| 導言 lead         | `text-lg text-ems-gray`                          |
| 一般內文          | `text-base text-slate-700`                       |
| 小字 / 註腳       | `text-sm text-slate-600` / `text-xs text-slate-500` |
| 頁次徽章          | `text-sm font-bold` + `bg-ems-blue text-white px-3 py-1 rounded` |
| 強調粗體          | `<strong>` (繼承顏色)                            |

## 間距節奏 (Spacing rhythm)

- 章節 section padding：`p-8 md:p-12`
- header 與內容區分隔：`mb-8`
- 卡片內 padding：`p-6`（一般）/ `p-8`（深色強調卡）/ `p-5`（手風琴標頭）/ `p-4`（內嵌資訊塊）
- 卡片間距 gap：`gap-6`（標準兩欄）/ `gap-8`（大區塊）/ `gap-3`（密集按鈕網格）
- 列表項 vertical rhythm：`space-y-2` / `space-y-3`

## 圓角 & 陰影

| 用途                | Class                              |
|---------------------|------------------------------------|
| 標準卡片            | `rounded-xl shadow-sm border border-slate-200` |
| 深色強調卡          | `rounded-xl shadow-md border-t-4 border-ems-blue` |
| 引言卡              | `rounded-2xl shadow-lg border-t-8 border-ems-orange` |
| 小按鈕 / 標籤       | `rounded` `rounded-lg`             |
| 圓形（時間軸點）    | `rounded-full`                     |

## 動畫

- 章節進入：在 root 元素加 `class="fade-in"`（定義於 styles.css，0.3s ease-in-out）
- 卡片 hover 微抬：`transition transform hover:-translate-y-0.5` 或沿用 `.duty-card` 行為
- 按鈕 hover 顏色變化：所有 `<button>` 統一 `transition` + `hover:bg-*`

## 可使用色調對照（Hover / 半透明）

| 情境            | Class                         |
|-----------------|-------------------------------|
| 深底 hover      | `hover:bg-slate-800`          |
| 深 CTA hover    | `hover:bg-slate-800`（深 navy 上）|
| 淺底 hover      | `hover:bg-slate-100`          |
| 重點淺底（藍）  | `bg-blue-50 border-blue-100`  |
| 重點淺底（橘）  | `bg-orange-50 border-orange-100` |
| 中性淺底        | `bg-slate-50 border-slate-200`|
