/* ----------------------------------------------------------------
 * duties.js — 9 大職責互動網格。
 * Expects buttons with id="btn-duty-1"..."btn-duty-9",
 * a title <h3 id="duty-title"> and a body <div id="duty-content">.
 * ---------------------------------------------------------------- */
const dutiesData = {
    1: { t: "1. 準備", c: `<p class='font-bold text-white mb-2'>工欲善其事，必先利其器。</p>
        <ul class='list-disc pl-5 space-y-2 text-base'>
            <li>車輛出勤前後，都必須清洗及消毒。</li>
            <li>器材及耗材數量須確保足夠及堪用。</li>
            <li>熟悉轄區道路以掌握時效。</li>
            <li>隨時保持體能最佳狀態，以維持身心健康。</li>
        </ul>` },
    2: { t: "2. 出勤", c: `<p class='font-bold text-white mb-2'>平穩抵達比飆車更重要。</p>
        <ul class='list-disc pl-5 space-y-2 text-base'>
            <li>接獲派遣後須立即出勤、迅速著裝。</li>
            <li>在路上行駛時，開快車不見得能省下時間，一旦發生事故反而延誤。</li>
            <li>平安抵達比開快車來得更加重要。</li>
        </ul>` },
    3: { t: "3. 評估", c: `<p class='font-bold text-white mb-2'>包含現場安全與病人評估。</p>
        <ul class='list-disc pl-5 space-y-2 text-base'>
            <li>接近事故現場前，務必確定現場是否安全；有危害需立即排除或控制，才能進行後面的處置。</li>
            <li>評估是否需要其他單位支援或是啟動大量傷病患機制。</li>
            <li>瞭解可能的致病機轉並給予適當處置。</li>
        </ul>` },
    4: { t: "4. 穩定", c: `<p class='font-bold text-white mb-2'>精準判斷送醫策略與穩定病情。</p>
        <ul class='list-disc pl-5 space-y-2 text-base'>
            <li>主要任務是穩定病人病情，並將其迅速就醫。</li>
            <li>必須精準判斷傷病患是屬於「就走 (Load and Go)」，還是「留在現場穩定後再離開 (Stay and Play)」。</li>
            <li>就算是「就走」的病人也絕不是什麼都不做就開快車，仍需及時提供穩定生命徵象之處置。</li>
        </ul>` },
    5: { t: "5. 溝通", c: `<p class='font-bold text-white mb-2'>成為急診醫師的千里眼。</p>
        <ul class='list-disc pl-5 space-y-2 text-base'>
            <li>現場與家屬及旁觀者的溝通能獲取充足資訊並安撫情緒。</li>
            <li>透過工具精準將資訊傳達給責任醫院，再依指示處置病人。</li>
        </ul>` },
    6: { t: "6. 運送", c: `<p class='font-bold text-white mb-2'>運送過程絕不可鬆懈。</p>
        <ul class='list-disc pl-5 space-y-2 text-base'>
            <li>送醫途中隨時注意病人狀況並記錄生命徵象。</li>
            <li>即使看似穩定的病人也有可能突然惡化，安全且迅速將病人交給醫院，生命之鏈才得連貫。</li>
        </ul>` },
    7: { t: "7. 紀錄", c: `<p class='font-bold text-white mb-2'>具備法律效力的正式文件。</p>
        <ul class='list-disc pl-5 space-y-2 text-base'>
            <li>填寫救護紀錄表就像醫護人員填寫病歷一樣重要，須記錄病人狀況與處置。</li>
            <li>每個重點都必須被記錄下來，以利事後回想和案例分享。</li>
            <li>詳實紀錄不但是責任，更是對自己的保護。</li>
        </ul>` },
    8: { t: "8. 教育", c: `<p class='font-bold text-white mb-2'>四大不可犯原則與持續精進。</p>
        <ul class='list-disc pl-5 space-y-2 text-base'>
            <li>取得證照不是終點，需透過繼續教育維持專業巔峰。</li>
            <li><strong>四大「不」可犯原則：</strong><br>1. 有知識而不更新<br>2. 有器材而不使用<br>3. 有耗材而不補充<br>4. 有病人而漠不關心。</li>
            <li>累積實務經驗後，可擔任教學宣導工作造福社會。</li>
        </ul>` },
    9: { t: "9. 個資", c: `<p class='font-bold text-white mb-2'>嚴守秘密是不可妥協的底線。</p>
        <ul class='list-disc pl-5 space-y-2 text-base'>
            <li>依法規因業務知悉之秘密，不得無故洩漏。</li>
            <li>現場影音、車內錄影及電子紀錄表等，須受妥善保管，檔案下載需加密保存。</li>
        </ul>` }
};

function showDuty(id) {
    const data = dutiesData[id];
    if (!data) return;

    document.getElementById('duty-title').innerText = data.t;
    const contentDiv = document.getElementById('duty-content');
    contentDiv.innerHTML = data.c;

    document.querySelectorAll('.duty-card').forEach(el => el.classList.remove('active'));
    document.getElementById('btn-duty-' + id).classList.add('active');

    // Fade animation
    contentDiv.style.opacity = '0';
    setTimeout(() => {
        contentDiv.style.transition = 'opacity 0.2s ease-in';
        contentDiv.style.opacity = '1';
    }, 50);
}
