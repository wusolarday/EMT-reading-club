/* ----------------------------------------------------------------
 * nav.js — highlights the active sidebar item based on current URL.
 * Each .nav-item button/anchor should declare a data-page attribute
 * matching the filename (e.g. data-page="law" for pages/law.html).
 * ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
    const key  = file === '' || file === 'index' ? 'origins' : file;

    document.querySelectorAll('.nav-item').forEach(el => {
        if (el.dataset.page === key) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
});
