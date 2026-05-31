/* ----------------------------------------------------------------
 * accordion.js — generic accordion for "法規與名詞定義" style cards.
 * Usage: each card root carries data-accordion="<id>",
 *        the content has id="law-content-<id>",
 *        the icon    has id="law-icon-<id>".
 * ---------------------------------------------------------------- */
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
