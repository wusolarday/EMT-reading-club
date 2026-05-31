/* ----------------------------------------------------------------
 * chapter-nav.js
 * Provides a shared SPA-style sidebar behavior for every chapter
 * page (chap1.html, chap2.html, chap3.html, ...).
 *
 * Responsibilities:
 *   1. window.switchView(viewId, btnElement)
 *      — Hides every .view-section, shows the one with the given id,
 *        and toggles .active on .nav-item buttons.
 *   2. Provides an extensibility hook:
 *        window.onViewSwitch = function(viewId) { ... };
 *      Each chapter file may assign this to run init code (e.g.
 *      Chart.js initialization) when a view becomes visible.
 *   3. On DOMContentLoaded:
 *        - Decorates the first <nav> with .app-sidebar
 *        - Injects a mobile top bar + hamburger button + backdrop
 *        - Wires up open / close interactions
 *
 * Page contract:
 *   - First <nav> in <body> is the sidebar.
 *   - Sidebar header contains a chapter title to mirror in topbar
 *     (taken from the first <h1> inside the nav, if present).
 *   - Sections are <section class="view-section"> with unique ids.
 *   - Buttons / anchors use class="nav-item" + onclick="switchView('view-…', this)".
 * ---------------------------------------------------------------- */

(function () {
    'use strict';

    // ----- 1. switchView ---------------------------------------------------
    window.switchView = function switchView(viewId, btnElement) {
        // hide all
        document.querySelectorAll('.view-section').forEach(el => {
            el.classList.remove('block', 'fade-in');
            el.classList.add('hidden');
        });

        // show target
        const target = document.getElementById(viewId);
        if (!target) return;
        target.classList.remove('hidden');
        // force reflow so the fade-in animation restarts
        void target.offsetWidth;
        target.classList.add('block', 'fade-in');

        // nav active state
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        if (btnElement) btnElement.classList.add('active');

        // scroll content area to top (helps when content was scrolled down)
        const main = document.querySelector('main');
        if (main) main.scrollTop = 0;

        // close mobile sidebar after pick
        closeSidebar();

        // user hook (e.g. chap3 chart init)
        if (typeof window.onViewSwitch === 'function') {
            try { window.onViewSwitch(viewId); }
            catch (e) { console.error('onViewSwitch hook error:', e); }
        }
    };


    // ----- 2. Mobile topbar + hamburger -----------------------------------
    function openSidebar() {
        const sidebar = document.querySelector('nav.app-sidebar');
        const bd      = document.querySelector('.sidebar-backdrop');
        if (sidebar) sidebar.classList.add('open');
        if (bd)      bd.classList.add('open');
    }

    function closeSidebar() {
        const sidebar = document.querySelector('nav.app-sidebar');
        const bd      = document.querySelector('.sidebar-backdrop');
        if (sidebar) sidebar.classList.remove('open');
        if (bd)      bd.classList.remove('open');
    }

    function buildTopbar(chapterTitle) {
        if (document.querySelector('.mobile-topbar')) return; // already there

        const topbar = document.createElement('div');
        topbar.className = 'mobile-topbar';
        topbar.innerHTML = `
            <button class="hamburger-btn" type="button" aria-label="開啟章節選單">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
            <span class="topbar-title">${chapterTitle || 'EMT 海栓讀書會'}</span>
            <a class="topbar-home" href="./index.html" title="回到目錄">目錄</a>
        `;
        document.body.prepend(topbar);

        const backdrop = document.createElement('div');
        backdrop.className = 'sidebar-backdrop';
        document.body.appendChild(backdrop);

        topbar.querySelector('.hamburger-btn').addEventListener('click', openSidebar);
        backdrop.addEventListener('click', closeSidebar);

        // Esc 關閉
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeSidebar();
        });
    }


    // ----- 3. Bootstrap on DOM ready --------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
        const sidebar = document.querySelector('nav');
        if (sidebar && !sidebar.classList.contains('app-sidebar')) {
            sidebar.classList.add('app-sidebar');
        }

        // chapter title — try <h1> within sidebar, else fall back to <title>
        const navH1 = sidebar ? sidebar.querySelector('h1') : null;
        const title = navH1 ? navH1.textContent.trim()
                            : document.title.split(/[-｜|]/).pop().trim();
        buildTopbar(title);
    });
})();
