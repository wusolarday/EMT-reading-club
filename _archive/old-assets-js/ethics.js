/* ----------------------------------------------------------------
 * ethics.js — 引言輪播 (Carousel)。
 * Expects <p id="quote-text"> and prev/next buttons calling changeQuote(±1).
 * ---------------------------------------------------------------- */
const ethicsQuotes = [
    "「你不知道所有的事，承認自己的錯誤。我們都會犯錯，但只有最優秀的人才會承認犯錯。」",
    "「把每一趟救護想成這是你人生中最後一趟救護，好好做！」",
    "「保護好你的背部。這很有可能是決定你救護生涯長度的唯一因素。」",
    "「當你犯錯時，『馬上』為你的錯誤道歉。」",
    "「記得帶走你的裝備；小心運送你的病人。」",
    "「沒有任何正當的理由可以讓你在無線電裡大吼。」",
    "「不要對病人說謊，如果事情讓你難以啟齒，試著坦白說出來。」",
    "「不要把病人的氣話放在心上，更不要把病人的髒話放在心上。」"
];
let currentQuote = 0;

function changeQuote(direction) {
    currentQuote += direction;
    if (currentQuote >= ethicsQuotes.length) currentQuote = 0;
    if (currentQuote < 0) currentQuote = ethicsQuotes.length - 1;

    const textEl = document.getElementById('quote-text');
    textEl.style.opacity = '0';
    setTimeout(() => {
        textEl.innerText = ethicsQuotes[currentQuote];
        textEl.style.transition = 'opacity 0.3s ease-in';
        textEl.style.opacity = '1';
    }, 200);
}
