/* ----------------------------------------------------------------
 * vitals.js — 八大生命徵象互動切換。
 * Expects buttons with id="btn-vital-1" ... "btn-vital-8",
 * a <h3 id="vital-title"> and a <div id="vital-content">.
 * Page badge: <span id="vital-page">.
 * ---------------------------------------------------------------- */
const vitalsData = {
    1: {
        page: "P.51-52",
        t: "1. 意識（昏迷指數 GCS）",
        c: `
        <div class="space-y-6">
            <!-- 定義 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-2 border-l-4 border-ems-orange pl-3">📌 定義</h4>
                <p class="text-slate-700 leading-relaxed">大腦對外來資訊做出相對反應之表現。意識是人的神經反應，當人出生時意識就與生命同在，是自我感受、自我存在及對外界感受之綜合表現。正常人可清楚認知<strong>人、事、時、地、物</strong>等資訊；若對外來資訊無法正常反應，則稱為<strong>意識不清或昏迷</strong>。</p>
            </div>

            <!-- 評估方式 AVPU -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🧪 評估方式：AVPU 順序</h4>
                <p class="text-sm text-slate-700 mb-3">意識是初級評估前及生命徵象評估之<strong>首要檢查項目</strong>，依清→聲→痛→否順序檢查。</p>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div class="bg-blue-50 p-3 rounded border border-blue-100">
                        <div class="font-bold text-ems-blue">A. 清 (Alert)</div>
                        <p class="text-xs text-slate-600 mt-1">清楚周遭環境，問題能正常應答；如人事時地物均能掌握，稱意識清醒。</p>
                    </div>
                    <div class="bg-blue-50 p-3 rounded border border-blue-100">
                        <div class="font-bold text-ems-blue">V. 聲 (Verbal)</div>
                        <p class="text-xs text-slate-600 mt-1">須藉聲音刺激才有反應，問話通常不能正常應答，稱意識不清。</p>
                    </div>
                    <div class="bg-orange-50 p-3 rounded border border-orange-100">
                        <div class="font-bold text-ems-orange">P. 痛 (Painful)</div>
                        <p class="text-xs text-slate-600 mt-1">須給予疼痛刺激才有反應。由周邊到中央，按壓指甲床、捏肩膀（按壓斜方肌）至眼眶上切跡，給予 10 秒內疼痛刺激。</p>
                    </div>
                    <div class="bg-slate-100 p-3 rounded border border-slate-300">
                        <div class="font-bold text-slate-700">U. 否 (Unresponsive)</div>
                        <p class="text-xs text-slate-600 mt-1">對聲音或疼痛刺激均無反應，稱意識昏迷。</p>
                    </div>
                </div>
                <div class="mt-3 bg-orange-50 border-l-4 border-ems-orange p-3 rounded-r text-xs text-slate-700">
                    <strong class="text-ems-orange">⚠️ 不建議：</strong>過去常施行的「搓胸骨」是<strong>不建議的</strong>，會造成局部瘀傷及反應難以評估。
                </div>
            </div>

            <!-- GCS 表 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">📊 昏迷指數 GCS（Glasgow Coma Scale）</h4>
                <p class="text-sm text-slate-700 mb-3">由英國格拉斯哥大學 <strong>Graham Teasdale</strong> 與 <strong>Bryan J. Jennett</strong> 1974 年發表。以張眼反應 (E)、最佳言語反應 (V)、最佳運動反應 (M) 三項<strong>加總</strong>評估，最低 3 分 (E1V1M1)、滿分 15 分 (E4V5M6)，<strong class="text-ems-orange">≤ 8 分稱為意識昏迷</strong>。最佳運動反應若左右側不同，應記錄較高之反應。</p>

                <div class="overflow-hidden rounded-lg border border-slate-200">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="bg-ems-navy text-white">
                                <th class="px-3 py-2 text-center w-16">分數</th>
                                <th class="px-3 py-2 text-left">張眼反應 (E)</th>
                                <th class="px-3 py-2 text-left">最佳言語反應 (V)</th>
                                <th class="px-3 py-2 text-left">最佳運動反應 (M)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200 bg-white">
                            <tr><td class="px-3 py-2 text-center font-bold text-ems-blue">1</td><td class="px-3 py-2">無任何反應</td><td class="px-3 py-2">無任何反應</td><td class="px-3 py-2">無任何反應</td></tr>
                            <tr><td class="px-3 py-2 text-center font-bold text-ems-blue">2</td><td class="px-3 py-2">對壓力刺激睜眼</td><td class="px-3 py-2">可發出聲</td><td class="px-3 py-2">對刺激產生肢體伸直</td></tr>
                            <tr><td class="px-3 py-2 text-center font-bold text-ems-blue">3</td><td class="px-3 py-2">對聲音刺激睜眼</td><td class="px-3 py-2">可說出字詞</td><td class="px-3 py-2">對刺激產生不正常肢體收縮</td></tr>
                            <tr><td class="px-3 py-2 text-center font-bold text-ems-blue">4</td><td class="px-3 py-2">自發性睜眼</td><td class="px-3 py-2">混亂的言語</td><td class="px-3 py-2">對刺激產生正常肢體收縮</td></tr>
                            <tr><td class="px-3 py-2 text-center font-bold text-ems-blue">5</td><td class="px-3 py-2 text-slate-400">—</td><td class="px-3 py-2">說話清楚有條理</td><td class="px-3 py-2">對刺激可定位位置</td></tr>
                            <tr><td class="px-3 py-2 text-center font-bold text-ems-blue">6</td><td class="px-3 py-2 text-slate-400">—</td><td class="px-3 py-2 text-slate-400">—</td><td class="px-3 py-2">可依指令動作</td></tr>
                            <tr class="bg-slate-50"><td class="px-3 py-2 text-center font-bold text-ems-orange">無法<br>檢測</td><td colspan="3" class="px-3 py-2 text-xs text-slate-600">如因眼腫、骨折等不能睜眼 <strong>C(Closed)</strong>；因氣管插管無法正常發聲 <strong>E(Endo)</strong>；因氣切無法正常發聲 <strong>T(Trachea)</strong>；平時有言語障礙史 <strong>A(Aphasia)</strong></td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="mt-3 text-xs text-ems-gray italic space-y-1">
                    <div><strong>註1：</strong>當無法檢測 (Not Testable) 時，該項反應以英文縮寫 NT 表示，並以 1 分計算。</div>
                    <div><strong>註2：</strong>定位是指病人的手會跨過鎖骨以上，試圖將頭部與刺激移除。正常屈曲是指病人的肘關節彎曲，且快速地往身體外側移動。病態屈曲是指病人的肘關節緩慢地彎曲，且上臂跨過胸前向旋轉，前臂緊握、下肢伸直。</div>
                </div>

                <div class="mt-4 bg-ems-navy text-white p-4 rounded-lg">
                    <strong class="text-ems-orange">頭部外傷嚴重度分級：</strong>
                    <ul class="text-sm mt-1 space-y-0.5">
                        <li>• 輕度頭部外傷 <strong>13~15 分</strong></li>
                        <li>• 中度頭部外傷 <strong>9~12 分</strong></li>
                        <li>• 重度頭部外傷 <strong class="text-ems-orange">3~8 分</strong></li>
                    </ul>
                </div>
            </div>

            <!-- 生理表徵 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🔍 生理表徵（走路、姿勢、講話）</h4>
                <p class="text-sm text-slate-700 mb-3">評估意識狀態即可判斷中樞神經系統功能受損情形。意識障礙或神經性疾病常表現出特殊步態或姿勢。</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-navy mb-2">A. 觀察走路</div>
                        <ul class="text-xs text-slate-600 space-y-1 list-disc pl-4">
                            <li>單側偏癱：可能急性腦中風</li>
                            <li>無法走路：小腦中風、內耳平衡問題、眩暈</li>
                            <li>跛行：陳舊性腦中風</li>
                            <li>小碎步、易跌倒：巴金森氏症</li>
                            <li>偏斜：平衡障礙</li>
                        </ul>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-navy mb-2">B. 觀察姿勢</div>
                        <ul class="text-xs text-slate-600 space-y-1 list-disc pl-4">
                            <li>左側偏癱姿勢（一側完全喪失能力）</li>
                            <li>大腦皮質失能 <strong>M3 姿勢</strong>：上肢屈曲、下肢內翻足底彎曲（圖 2-30）</li>
                            <li>大腦功能受損 <strong>M2 去大腦僵直反應</strong>：肢體伸直（圖 2-31）</li>
                        </ul>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-navy mb-2">C. 觀察講話</div>
                        <ul class="text-xs text-slate-600 space-y-1 list-disc pl-4">
                            <li>注意有無失語、發聲異常、發語異常、講話口齒不清</li>
                            <li>條理一致性：意念飛躍（主題快速跳躍）</li>
                            <li>幻視、幻聽</li>
                            <li>可能病因：中風、顱內腫瘤、成癮性藥物、酒精戒斷、肝腦病變、精神性疾病</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `
    },

    2: {
        page: "P.53-54",
        t: "2. 呼吸（Breathing）",
        c: `
        <div class="space-y-6">
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-2 border-l-4 border-ems-orange pl-3">📌 定義</h4>
                <p class="text-slate-700 leading-relaxed">測量呼吸速率：觀察病人 <strong>10 秒鐘</strong>的胸或腹部起伏次數，<strong>再乘以 6</strong> 就是每分鐘的呼吸速率，通常每分鐘約 <strong class="text-ems-orange">10~20 次</strong>。</p>
            </div>

            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🧪 評估或測量方式</h4>
                <p class="text-sm text-slate-700 mb-3">初級評估以<strong>看</strong>（胸或腹部起伏）<strong>、聽</strong>（呼吸音）評估呼吸深、淺、快、慢及異常呼吸音，評估時間 &lt; 10 秒。</p>
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-3">
                    <p class="text-sm text-slate-700 font-bold mb-2">公式：每分鐘呼吸速率 = 測量 10 秒呼吸次數 × 6</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div class="bg-white p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-blue text-sm">深</div>
                        <p class="text-xs text-slate-600">胸廓明顯起伏或使用腹部肌肉幫助呼吸</p>
                    </div>
                    <div class="bg-white p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-blue text-sm">淺</div>
                        <p class="text-xs text-slate-600">胸廓不明顯起伏，呼吸表淺</p>
                    </div>
                    <div class="bg-white p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-orange text-sm">快</div>
                        <p class="text-xs text-slate-600">呼吸次數 &gt;20 次/分</p>
                    </div>
                    <div class="bg-white p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-orange text-sm">慢</div>
                        <p class="text-xs text-slate-600">呼吸次數 &lt;10 次/分</p>
                    </div>
                </div>
            </div>

            <!-- 異常呼吸型式表 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">⚠️ 異常的呼吸型式（救護重點表）</h4>
                <div class="overflow-hidden rounded-lg border border-slate-200">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="bg-ems-navy text-white">
                                <th class="px-3 py-2 text-left w-1/3">型式</th>
                                <th class="px-3 py-2 text-left">特徵 / 可能原因</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200 bg-white">
                            <tr><td class="px-3 py-2 font-bold text-ems-navy">過度換氣 Hyperventilation</td><td class="px-3 py-2 text-slate-700">規則性速度加快之深呼吸；代謝性酸中毒代償、缺血氧症（高海拔、肺栓塞）、呼吸系統疾病（氣喘、肺炎）、神經系統疾病（頭部受傷、中風）、敗血症或外傷；排除上述原因可能為焦慮或恐慌症。</td></tr>
                            <tr><td class="px-3 py-2 font-bold text-ems-navy">呼吸過深 Hyperpnea</td><td class="px-3 py-2 text-slate-700">呼吸深度增加，每分鐘通氣量超過代謝之需要。</td></tr>
                            <tr><td class="px-3 py-2 font-bold text-ems-navy">呼吸急促 Tachypnea</td><td class="px-3 py-2 text-slate-700">呼吸速率增加，每分鐘大於 20 次。</td></tr>
                            <tr><td class="px-3 py-2 font-bold text-ems-navy">呼吸徐緩 Bradypnea</td><td class="px-3 py-2 text-slate-700">呼吸速率減少，每分鐘小於 10 次。</td></tr>
                            <tr><td class="px-3 py-2 font-bold text-ems-navy">閉氣式呼吸 Apneustic</td><td class="px-3 py-2 text-slate-700">在吸氣末期後發生長時間之閉氣，為<strong>腦幹–橋腦處之病變</strong>。</td></tr>
                            <tr class="bg-orange-50"><td class="px-3 py-2 font-bold text-ems-orange">瀕死或喘息式 Agonal/Gasping</td><td class="px-3 py-2 text-slate-700">極慢、不規則和長之深呼吸，常為<strong>突然心跳停止</strong>病人之呼吸徵候。</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 臨床敘述 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🩺 臨床上與呼吸有關之病人敘述</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-navy mb-1">呼吸困難 Dyspnea</div>
                        <p class="text-xs text-slate-600">病人主觀上感覺呼吸困難、不適、無力感、急促或窒息感等。</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-navy mb-1">端坐呼吸 Orthopnea</div>
                        <p class="text-xs text-slate-600">躺臥時呼吸困難。可見於<strong>左心室心臟衰竭</strong>或<strong>慢性阻塞性肺疾病 (COPD)</strong>等。</p>
                    </div>
                </div>
            </div>

            <!-- 生理表徵 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🔍 呼吸窘迫的異常表徵</h4>
                <p class="text-sm text-slate-700 mb-3">注意病人是否有呼吸作功的增加（呼吸費力）。呼吸窘迫通常先表現呼吸過速和心搏過速，再併有下列任一項：</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-white p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-navy mb-2">A. 呼吸聲異常</div>
                        <ul class="text-xs text-slate-600 space-y-1 list-disc pl-4">
                            <li><strong>哮鳴 Wheezing</strong>：吐氣時高音調口哨音 → 下呼吸道阻塞</li>
                            <li><strong>喘鳴 Stridor</strong>：吸氣時高音調聲音 → 上呼吸道阻塞</li>
                            <li><strong>咕嚕聲 Grunting</strong>：吐氣時低音調呻吟 → 呼吸窘迫</li>
                        </ul>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-navy mb-2">B. 異常的姿勢</div>
                        <ul class="text-xs text-slate-600 space-y-1 list-disc pl-4">
                            <li><strong>聞東西的姿勢 Sniffing Position</strong>：上呼吸道阻塞</li>
                            <li><strong>三角架姿勢 Tripod Position</strong>：下呼吸道阻塞</li>
                        </ul>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-navy mb-2">C. 鼻翼外張</div>
                        <p class="text-xs text-slate-600">常見於兒童或嚴重呼吸窘迫。</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-navy mb-2">D. 使用呼吸輔助肌</div>
                        <p class="text-xs text-slate-600">肋間肌、肋下肌、胸骨下/上、鎖骨上肌肉內縮，或腹部肌肉協助呼吸。</p>
                    </div>
                </div>

                <div class="mt-4 bg-orange-50 border-l-4 border-ems-orange p-4 rounded-r-lg">
                    <p class="text-sm text-slate-700"><strong class="text-ems-orange">即將呼吸停止的徵候：</strong>肺音微弱、呼吸變慢、喘息式呼吸、心搏過慢或發紺。</p>
                    <p class="text-sm text-slate-700 mt-2"><strong class="text-ems-navy">處置原則：</strong>呼吸窘迫（意識不安/焦慮）→ 非再吸入型面罩高濃度氧氣；呼吸衰竭（意識不清）→ 立刻給予<strong>袋瓣罩甦醒球人工呼吸</strong>。</p>
                </div>
            </div>

            <!-- 影響因素 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🎯 影響呼吸頻率的因素</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                    <div class="bg-slate-50 p-3 rounded border border-slate-200"><strong class="text-ems-navy">大腦皮質：</strong><span class="text-slate-600">可暫時性控制呼吸，但平時為自發性、不隨意。</span></div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200"><strong class="text-ems-navy">化學刺激：</strong><span class="text-slate-600">CO₂ 上升 → 呼吸加快；O₂ 不足 → 呼吸變快加深。</span></div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200"><strong class="text-ems-navy">疾病：</strong><span class="text-slate-600">心臟病、糖尿病酮酸中毒等。</span></div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200"><strong class="text-ems-navy">藥物：</strong><span class="text-slate-600">某些止痛劑抑制呼吸中樞 → 呼吸變慢。</span></div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200"><strong class="text-ems-navy">情緒壓力：</strong><span class="text-slate-600">興奮、害怕、急性疼痛 → 呼吸增加。</span></div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200"><strong class="text-ems-navy">活動：</strong><span class="text-slate-600">需氧量增加 → 呼吸加快。</span></div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200 md:col-span-2 lg:col-span-3"><strong class="text-ems-navy">氣壓改變：</strong><span class="text-slate-600">高山或高空空氣稀薄 → 血氧降低 → 代償性呼吸加快加深。</span></div>
                </div>
            </div>
        </div>
        `
    },

    3: {
        page: "P.55",
        t: "3. 脈搏（Pulse）",
        c: `
        <div class="space-y-6">
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-2 border-l-4 border-ems-orange pl-3">📌 定義</h4>
                <p class="text-slate-700 leading-relaxed">當心臟每次收縮並把血液擠壓通過血管時，壓力波形成脈搏，亦即<strong>有效的心臟輸出反應在周邊動脈血管上的表現</strong>。成人正常脈搏速率每分鐘約 <strong class="text-ems-orange">60~100 次</strong>。</p>
            </div>

            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🧪 評估或測量方式</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div class="font-bold text-ems-navy mb-1">初級評估</div>
                        <p class="text-sm text-slate-600">以觸摸法評估<strong>頸動脈或橈動脈</strong>是否摸得到。</p>
                    </div>
                    <div class="bg-orange-50 p-4 rounded-lg border border-orange-100">
                        <div class="font-bold text-ems-navy mb-1">生命徵象量測</div>
                        <p class="text-sm text-slate-600">以量測<strong>數值</strong>為主，分為電子儀器量測法與觸摸量測法。</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-white p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-blue text-sm mb-1">電子儀器量測法</div>
                        <p class="text-xs text-slate-600">依各廠牌之操作模式。</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-blue text-sm mb-1">觸摸量測法</div>
                        <p class="text-xs text-slate-600">以 <strong>2~3 個指尖腹</strong>在橈骨接近腕關節處測量脈搏。</p>
                    </div>
                </div>
                <div class="mt-3 bg-ems-navy text-white p-3 rounded text-center">
                    <strong class="text-ems-orange">公式：</strong>每分鐘脈搏數（次/分）= 測量 10 秒鐘脈搏次數 <strong>× 6</strong>
                </div>
            </div>

            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🎯 影響脈搏變化的 8 大因素</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">1. 荷爾蒙</div>
                        <p class="text-xs text-slate-600 mt-1">腎上腺素和甲狀腺素分泌增加 → 脈搏增快。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">2. 血壓</div>
                        <p class="text-xs text-slate-600 mt-1">血壓下降 → 脈搏加快（代償性）。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">3. 體溫</div>
                        <p class="text-xs text-slate-600 mt-1">發燒每上升 <strong>1°C</strong>，脈搏每分鐘上升 <strong>8~10 次</strong>；體溫過低則脈搏減慢。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">4. 情緒激動</div>
                        <p class="text-xs text-slate-600 mt-1">緊張或興奮 → 脈搏次數增加。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">5. 疼痛</div>
                        <p class="text-xs text-slate-600 mt-1"><strong>輕中度</strong>：交感興奮 → 血壓↑、脈搏↑、呼吸↑；<strong>重度</strong>：副交感反應 → 血壓↓、脈搏↓、呼吸↓。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">6. 運動</div>
                        <p class="text-xs text-slate-600 mt-1">運動量增加 → 脈搏速率增加。<strong>運動員休息時脈搏比一般人慢</strong>。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">7. 食物</div>
                        <p class="text-xs text-slate-600 mt-1">咖啡、茶或吸菸可使脈搏增加。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">8. 藥物</div>
                        <p class="text-xs text-slate-600 mt-1">心臟強心劑、毛地黃可能使脈搏變慢。</p>
                    </div>
                </div>
            </div>
        </div>
        `
    },

    4: {
        page: "P.56-57",
        t: "4. 血壓（Blood Pressure）",
        c: `
        <div class="space-y-6">
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-2 border-l-4 border-ems-orange pl-3">📌 定義</h4>
                <p class="text-slate-700 leading-relaxed">血壓單位是<strong>毫米汞柱 (mmHg)</strong>，係指循環血液在心臟收縮及舒張時對動脈血管所產生的壓力。</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div class="bg-orange-50 p-3 rounded border border-orange-100">
                        <strong class="text-ems-orange">收縮壓 Systolic：</strong>心臟收縮、左心室將血液擠到主動脈時產生的<strong>最高壓力</strong>。
                    </div>
                    <div class="bg-blue-50 p-3 rounded border border-blue-100">
                        <strong class="text-ems-blue">舒張壓 Diastolic：</strong>心臟舒張時的<strong>最低壓力</strong>。
                    </div>
                </div>
            </div>

            <!-- 血壓參考標準表 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">📊 血壓參考標準表（表 2-4）</h4>
                <div class="overflow-hidden rounded-lg border border-slate-200">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="bg-ems-navy text-white">
                                <th class="px-3 py-2 text-left" rowspan="2">分類</th>
                                <th class="px-3 py-2 text-center" colspan="3">衛生福利部國民健康署</th>
                                <th class="px-3 py-2 text-center" colspan="3">2019 美國心臟協會</th>
                            </tr>
                            <tr class="bg-slate-700 text-white text-xs">
                                <th class="px-3 py-2 text-center">收縮壓</th>
                                <th class="px-3 py-2 text-center">　</th>
                                <th class="px-3 py-2 text-center">舒張壓</th>
                                <th class="px-3 py-2 text-center">收縮壓</th>
                                <th class="px-3 py-2 text-center">　</th>
                                <th class="px-3 py-2 text-center">舒張壓</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200 bg-white text-center">
                            <tr><td class="px-3 py-2 font-bold text-ems-navy text-left">正常</td>            <td>&lt; 120</td><td>且</td><td>&lt; 80</td>     <td>&lt; 120</td><td>且</td><td>&lt; 80</td></tr>
                            <tr><td class="px-3 py-2 font-bold text-ems-navy text-left">高血壓前期</td>      <td>120 – 139</td><td>或</td><td>80 – 89</td>  <td>120 – 129</td><td>且</td><td>&lt; 80</td></tr>
                            <tr><td class="px-3 py-2 font-bold text-ems-navy text-left">高血壓第一期</td>    <td>140 – 159</td><td>或</td><td>90 – 99</td>  <td>130 – 139</td><td>或</td><td>80 – 89</td></tr>
                            <tr class="bg-orange-50"><td class="px-3 py-2 font-bold text-ems-orange text-left">高血壓第二期</td><td>≥ 160</td><td>或</td><td>≥ 100</td><td>≥ 140</td><td>或</td><td>≥ 90</td></tr>
                        </tbody>
                    </table>
                    <div class="bg-slate-50 px-3 py-1 text-xs text-slate-500 text-right">單位：mmHg</div>
                </div>
            </div>

            <!-- 量測方式 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🧪 評估或測量方式</h4>
                <p class="text-sm text-slate-700 mb-3">可使用<strong>手動式血壓計、肘式電子血壓計</strong>或<strong>手腕式電子血壓計</strong>。</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div class="font-bold text-ems-navy mb-1">肘式電子血壓計</div>
                        <p class="text-xs text-slate-600">能較正確測量肱動脈血壓，與醫院結果相近，但機型大且攜帶不便。</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-navy mb-1">手腕式電子血壓計</div>
                        <p class="text-xs text-slate-600">測量手腕橈動脈，因離心臟遠，準確度較肘式差，但<strong>小巧輕便</strong>可隨時測量。</p>
                    </div>
                </div>

                <div class="bg-white p-4 rounded-lg border border-slate-200 mb-3">
                    <div class="font-bold text-ems-navy mb-2">📍 操作步驟（肘式血壓計）</div>
                    <ol class="text-sm text-slate-700 space-y-1 list-decimal pl-5">
                        <li>固定壓脈帶於病人肘關節上 <strong>2 指高度或約 3 公分</strong>處，膠管放在內側肱動脈搏動點（約中指至手肘中心線位置）；手腕式則置於腕關節。</li>
                        <li>壓脈帶鬆緊需留下 <strong>1~2 根手指能進出</strong>的空隙。</li>
                        <li><strong>電子式：</strong>按下加壓開關，儀器自動測量。</li>
                        <li><strong>手動式：</strong>
                            <ul class="list-disc pl-5 mt-1 space-y-0.5 text-xs">
                                <li>聽診器放於手肘關節內側肱動脈上。</li>
                                <li>關緊加壓球旁汽門，擠壓加壓球將氣打到壓脈帶，直到脈搏聲消失後再繼續加 <strong>30 mmHg</strong>。</li>
                                <li>慢慢鬆開汽門，以每次下降 <strong>2~3 mmHg</strong> 的速度放氣。</li>
                                <li><strong>第一次聽到的脈搏聲 = 收縮壓</strong>；放氣至脈搏聲消失 <strong>= 舒張壓</strong>。</li>
                            </ul>
                        </li>
                        <li>測量結束後記錄血壓值（收縮壓/舒張壓 mmHg）於救護紀錄表上，鬆開壓脈帶。</li>
                    </ol>
                </div>
            </div>

            <!-- 影響因素 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🎯 影響血壓變化的因素</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">1. 活動及運動</div>
                        <p class="text-xs text-slate-600 mt-1">心輸出量增加 → 血壓上升。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">2. 情緒壓力</div>
                        <p class="text-xs text-slate-600 mt-1">腎上腺素分泌、末梢血管收縮 → 血壓升高。</p>
                    </div>
                    <div class="bg-orange-50 p-3 rounded border border-orange-100">
                        <div class="font-bold text-ems-orange">3. 姿勢（重要）</div>
                        <p class="text-xs text-slate-600 mt-1"><strong>站姿 &gt; 坐姿 &gt; 平躺</strong>。長期臥床驟然起身，收縮壓下降 <strong>≥ 20 mmHg</strong> 即為<strong>姿勢性低血壓</strong>。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">4. 溫度</div>
                        <p class="text-xs text-slate-600 mt-1">冷天血管收縮 → 血壓較高；暖天血管擴張 → 血壓下降。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">5. 疼痛</div>
                        <p class="text-xs text-slate-600 mt-1">低/中度疼痛 → 交感被刺激 → 周邊血管收縮 → 血壓上升。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">6. 體型</div>
                        <p class="text-xs text-slate-600 mt-1">肥胖或體重過重者血壓有偏高傾向。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200 md:col-span-2 lg:col-span-3">
                        <div class="font-bold text-ems-navy">7. 疾病</div>
                        <p class="text-xs text-slate-600 mt-1">如動脈管壁硬化或荷爾蒙改變促使血壓上升。</p>
                    </div>
                </div>
            </div>
        </div>
        `
    },

    5: {
        page: "P.57-58",
        t: "5. 瞳孔（Pupil）",
        c: `
        <div class="space-y-6">
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-2 border-l-4 border-ems-orange pl-3">📌 定義</h4>
                <p class="text-slate-700 leading-relaxed">瞳孔正常為<strong>等大且對光有反應</strong>。藥物、缺氧、強烈情緒刺激（恐懼、生氣）都會影響瞳孔大小。人類由<strong>虹膜伸縮</strong>不自主控制瞳孔大小調節進光量。</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div class="bg-yellow-50 p-3 rounded border border-yellow-100">
                        <strong class="text-yellow-700">☀️ 白天/明亮處：</strong>約 <strong>2~4 mm</strong>
                    </div>
                    <div class="bg-slate-100 p-3 rounded border border-slate-300">
                        <strong class="text-slate-700">🌙 晚上/暗處：</strong>約 <strong>4~8 mm</strong>
                    </div>
                </div>
                <div class="mt-3 bg-blue-50 border-l-4 border-ems-blue p-3 rounded-r text-sm text-slate-700">
                    <strong>反射神經迴路：</strong>光線訊息傳入 → <strong>視神經（第二對腦神經）</strong>；縮瞳訊息傳出 → 副交感神經（伴隨<strong>動眼神經，第三對腦神經</strong>）一起由中腦發出。
                </div>
            </div>

            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🧪 評估或測量方式</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-white p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-blue mb-1">1. 用瞳孔筆檢查二側瞳孔是否等大</div>
                        <p class="text-xs text-slate-600">（圖 2-36）</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-blue mb-1">2. 對光反應檢查</div>
                        <p class="text-xs text-slate-600">瞳孔筆從眼睛<strong>外側水平 45 度角</strong>照射，觀察二邊瞳孔對光反應（圖 2-37）。</p>
                    </div>
                </div>
            </div>

            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🔍 瞳孔變化的各項表徵</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-orange-50 p-4 rounded-lg border border-orange-100 border-l-4 border-l-ems-orange">
                        <h5 class="font-bold text-ems-orange mb-2">⚠️ 1. 瞳孔放大（&gt; 4 mm）</h5>
                        <p class="text-xs text-slate-700">常會對光沒有反應。可能原因：嚴重<strong>腦出血、顱內壓上升</strong>；抗乙醯膽鹼藥物中毒、重度缺氧症、點散瞳劑等病人（圖 2-38）。</p>
                    </div>
                    <div class="bg-orange-50 p-4 rounded-lg border border-orange-100 border-l-4 border-l-ems-orange">
                        <h5 class="font-bold text-ems-orange mb-2">⚠️ 2. 瞳孔不等大（&gt; 1 mm 差距）</h5>
                        <p class="text-xs text-slate-700">兩眼相差 1 mm 以上時（圖 2-39），可能有：嚴重眼疾（虹膜肌肉、交感/副交感神經異常），或<strong>顱內病變</strong>（嚴重腦出血、腦腫瘤、顱內壓上升等）。</p>
                    </div>
                    <div class="bg-orange-50 p-4 rounded-lg border border-orange-100 border-l-4 border-l-ems-orange">
                        <h5 class="font-bold text-ems-orange mb-2">⚠️ 3. 針狀瞳孔（&lt; 2 mm）</h5>
                        <p class="text-xs text-slate-700">可能出現於：<strong>橋腦出血、鴉片類或有機磷農藥中毒</strong>的病人（圖 2-40）。</p>
                    </div>
                </div>
            </div>

            <div class="bg-ems-navy text-white p-4 rounded-lg border-t-4 border-ems-orange">
                <p class="text-sm">
                    <strong class="text-ems-orange">🚑 救護重點：</strong>瞳孔是直接觀察<strong>腦幹功能</strong>的窗口。對昏迷病人，瞳孔大小、對稱性與對光反射是判斷顱內壓變化的重要線索之一，務必在救護紀錄表中註明。
                </p>
            </div>
        </div>
        `
    },

    6: {
        page: "P.58-59",
        t: "6. 體溫（Body Temperature）",
        c: `
        <div class="space-y-6">
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-2 border-l-4 border-ems-orange pl-3">📌 定義</h4>
                <p class="text-slate-700 leading-relaxed mb-2">身體量測的溫度。人體<strong>腦部視丘</strong>為體溫調節中樞，在此處有體溫定位點，各種<strong>產熱</strong>（發抖等新陳代謝）及<strong>散熱</strong>（血管收縮舒張，與外在環境藉對流、傳導、輻射或蒸發等）的生理反應，會隨定位點高低而維持恆定。</p>
                <div class="bg-blue-50 border-l-4 border-ems-blue p-3 rounded-r">
                    <p class="text-sm text-slate-700">正常成年人體溫 <strong class="text-ems-blue">36.5 ~ 37.5°C</strong>（攝氏 36.5~37.5 度），但<strong>體溫並非 24 小時都固定</strong>，會受身體活動、日夜時間、月經週期等影響。</p>
                </div>
            </div>

            <!-- 核心 vs 體表 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🌡 核心體溫 vs 體表溫度</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg border border-slate-200 border-t-4 border-t-ems-orange">
                        <h5 class="font-bold text-ems-navy mb-2">核心體溫（Core）</h5>
                        <p class="text-xs text-slate-600 mb-3">指身體維持生命重要器官（腦、心臟、腎等）的溫度。</p>
                        <div class="space-y-2 text-sm">
                            <div class="bg-slate-50 p-2 rounded border-l-2 border-ems-orange">
                                <strong class="text-ems-navy">A. 肛溫：</strong> 約 <strong>36.5°C</strong>。測量時間 2~3 分鐘，會讓病人不舒服，<strong>較不適用於救護勤務</strong>。
                            </div>
                            <div class="bg-slate-50 p-2 rounded border-l-2 border-ems-blue">
                                <strong class="text-ems-navy">B. 耳溫：</strong> 約 <strong>36.5°C</strong>，<strong>最常用</strong>。須加耳溫套避免交叉感染，把耳道拉直（耳廓往外往上稍微拉住）以避免位置不正確。
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-slate-200 border-t-4 border-t-slate-400">
                        <h5 class="font-bold text-ems-navy mb-2">體表溫度（Shell）</h5>
                        <p class="text-xs text-slate-600 mb-3">指身體表層溫度，包括皮膚、皮下組織和肌肉等。</p>
                        <div class="space-y-2 text-sm">
                            <div class="bg-slate-50 p-2 rounded border-l-2 border-slate-400">
                                <strong class="text-ems-navy">A. 額溫：</strong> 約 <strong>36.0°C</strong>，用於快速篩檢。測量前需做室溫校正，置於額前 <strong>2~5 cm</strong>，按壓 1~5 秒，<strong>紅外線不可接觸受測者眼睛</strong>。
                            </div>
                            <div class="bg-slate-50 p-2 rounded border-l-2 border-slate-400">
                                <strong class="text-ems-navy">B. 腋溫：</strong> 約 <strong>36.0°C</strong>。
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🧪 評估或測量方式</h4>
                <p class="text-sm text-slate-700">執行救護勤務通常使用<strong>額溫及耳溫</strong>來測量體溫。初級評估時以<strong>手背</strong>觸摸病人皮膚感覺體溫；生命徵象則用體溫計測量。</p>
            </div>

            <!-- 體溫變化表徵 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">⚠️ 體溫變化的各種表徵</h4>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div class="bg-orange-50 p-4 rounded-lg border border-orange-100">
                        <h5 class="font-bold text-ems-orange mb-2">1. 體溫過高 Hyperthermia</h5>
                        <p class="text-xs text-slate-700">人體產熱或吸熱多於散熱，<strong>體溫調節失效但體溫定位點未上升</strong>。如中暑、運動、熱天衣服穿太多、洗三溫暖。</p>
                    </div>
                    <div class="bg-red-50 p-4 rounded-lg border border-red-100">
                        <h5 class="font-bold text-red-700 mb-2">2. 發燒（Fever）</h5>
                        <p class="text-xs text-slate-700">常見生理警訊，通常以<strong>核心體溫 ≥ 38°C</strong> 來判定，係體溫調節中樞受影響使<strong>體溫定位點上升</strong>。原因：發炎、感染、惡性腫瘤、藥物或麻醉、自體免疫或內分泌疾病等。</p>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h5 class="font-bold text-ems-blue mb-2">3. 體溫過低 Hypothermia</h5>
                        <p class="text-xs text-slate-700">較易發生於老人、新生兒、溺水、營養不良、酒醉、路倒、酒癮、藥癮、敗血症、重度外傷等病人。定義為<strong>核心體溫 &lt; 35°C</strong>。</p>
                    </div>
                </div>

                <!-- 低體溫分級表 -->
                <div class="overflow-hidden rounded-lg border border-slate-200">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="bg-ems-navy text-white">
                                <th class="px-3 py-2 text-left">低體溫等級</th>
                                <th class="px-3 py-2 text-center">核心體溫</th>
                                <th class="px-3 py-2 text-left">身體反應</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200 bg-white">
                            <tr><td class="px-3 py-2 font-bold text-ems-blue">輕度</td>            <td class="text-center text-slate-700">32 ~ 35°C</td><td class="px-3 py-2 text-slate-700">身體會<strong>發抖</strong>以增加熱能製造</td></tr>
                            <tr><td class="px-3 py-2 font-bold text-orange-600">中度</td>          <td class="text-center text-slate-700">28 ~ 32°C</td><td class="px-3 py-2 text-slate-700">意識會開始<strong>改變</strong>且<strong>發抖減少</strong></td></tr>
                            <tr class="bg-orange-50"><td class="px-3 py-2 font-bold text-red-700">重度</td><td class="text-center text-slate-700">≤ 28°C</td><td class="px-3 py-2 text-slate-700"><strong>意識昏迷且不再發抖</strong></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `
    },

    7: {
        page: "P.60",
        t: "7. 膚色（Skin Color）",
        c: `
        <div class="space-y-6">
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-2 border-l-4 border-ems-orange pl-3">📌 定義</h4>
                <p class="text-slate-700 leading-relaxed">膚色為身體循環及氧合狀況呈現於外在皮膚之表現。皮膚的<strong>顏色、溫度及潮溼度</strong>可以增加病人評估的資訊。</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div class="bg-blue-50 p-3 rounded border border-blue-100">
                        <strong class="text-ems-blue">✅ 正常：</strong>溫暖而乾燥
                    </div>
                    <div class="bg-orange-50 p-3 rounded border border-orange-100">
                        <strong class="text-ems-orange">⚠️ 異常：</strong>非常乾燥可能脫水；<strong>溼而冷可能代表休克</strong>
                    </div>
                </div>
            </div>

            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🧪 評估或測量方式</h4>
                <p class="text-sm text-slate-700">評估生命徵象之膚色與評估循環中之膚色方式相同，<strong>目視</strong>是否蒼白、發紺或異常。</p>
            </div>

            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🔍 膚色變化的各項表徵</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg border border-slate-200 border-l-4 border-l-slate-400">
                        <h5 class="font-bold text-slate-700 mb-2">⚪ 1. 蒼白 Pale</h5>
                        <p class="text-sm text-slate-700">一般代表皮膚的<strong>灌流不足、失血或體液流失</strong>所致，也可能為暴露在寒冷環境或強烈情緒反應引起。</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-slate-200 border-l-4 border-l-blue-700">
                        <h5 class="font-bold text-blue-700 mb-2">🔵 2. 發紺 Cyanosis</h5>
                        <p class="text-sm text-slate-700">代表<strong>血液含氧量太低</strong>，可能是肺的微血管與肺泡氣體交換不足或發生<strong>呼吸道阻塞</strong>。</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-slate-200 border-l-4 border-l-red-500">
                        <h5 class="font-bold text-red-600 mb-2">🔴 3. 潮紅 Flushed</h5>
                        <p class="text-sm text-slate-700">可能是受<strong>運動、熱急症（如中暑）</strong>或脊髓受傷所導致的<strong>神經性休克</strong>所引起。</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-slate-200 border-l-4 border-l-yellow-500">
                        <h5 class="font-bold text-yellow-700 mb-2">🟡 4. 黃疸色 Jaundice</h5>
                        <p class="text-sm text-slate-700">可能表示病人有<strong>肝膽方面的疾病</strong>。</p>
                    </div>
                </div>
            </div>

            <div class="bg-ems-navy text-white p-4 rounded-lg border-t-4 border-ems-orange">
                <p class="text-sm">
                    <strong class="text-ems-orange">🚑 救護重點：</strong>記住「<strong class="text-white">溼冷蒼白 = 休克</strong>」這個經典徵象組合。配合脈搏加快與血壓下降，是失血性或低血容休克的典型表現，應立即執行休克處置。
                </p>
            </div>
        </div>
        `
    },

    8: {
        page: "P.60-61",
        t: "8. 血氧濃度（SpO₂ Pulse Oximetry）",
        c: `
        <div class="space-y-6">
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-2 border-l-4 border-ems-orange pl-3">📌 定義</h4>
                <p class="text-slate-700 leading-relaxed">血液中血紅素攜帶氧的程度，又稱<strong>血氧飽和度</strong>，亦即血紅素與氧結合達到飽和程度的百分比數值。</p>
                <div class="mt-3 bg-orange-50 border-l-4 border-ems-orange p-3 rounded-r">
                    <p class="text-sm text-slate-700">一般以<strong class="text-ems-orange">血氧濃度 &lt; 94%</strong> 代表病人有<strong>供氧不足</strong>情況。</p>
                </div>
            </div>

            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">🧪 重要性及測量方式</h4>
                <div class="space-y-3">
                    <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div class="font-bold text-ems-navy mb-1">為何重要？</div>
                        <p class="text-sm text-slate-700">SpO₂ 可代表<strong>心肺能力是否正常</strong>。呼吸循環系統把吸入的氧氣與體內 CO₂ 交換出來；血液中運氧能力來自於心臟強弱，若心臟或肺有狀況，血液含氧量自然降低。</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-slate-200">
                        <div class="font-bold text-ems-navy mb-1">測量方式</div>
                        <p class="text-sm text-slate-700">將血氧濃度分析儀感測器套入病人手指上（通常為<strong>食指或中指</strong>，圖 2-43），即可量測血氧濃度數值，然後記錄分析儀所顯示之數值（%）。</p>
                    </div>
                </div>
            </div>

            <!-- 影響血氧因素 -->
            <div>
                <h4 class="text-lg font-bold text-ems-navy mb-3 border-l-4 border-ems-orange pl-3">⚠️ 影響血氧變化的 7 大因素</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">1. 指套位移</div>
                        <p class="text-xs text-slate-600 mt-1">指甲床未對正紅光，探頭過深、過淺或寬鬆均會儀器讀數偏低或不顯示。<strong>對策：</strong>調整位置使紅光正對指甲床，必要時用紙膠布固定。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">2. 指尖皮膚冰冷</div>
                        <p class="text-xs text-slate-600 mt-1">身體長時間處低溫環境造成皮膚冰冷，會導致指端讀出數值偏低或不顯示。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">3. 指端皮膚或顏色異常</div>
                        <p class="text-xs text-slate-600 mt-1"><strong>指甲塗指甲油、指甲有污垢、指甲床過厚、灰指甲</strong>等情形，均會影響血氧濃度數值。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">4. 監測肢體血氧障礙</div>
                        <p class="text-xs text-slate-600 mt-1">將壓脈帶及血氧儀<strong>使用於同一側</strong>，或躁動病人約束帶過緊，都會影響血氧濃度精準度。</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <div class="font-bold text-ems-navy">5. 藥物使用影響</div>
                        <p class="text-xs text-slate-600 mt-1">使用<strong>升壓劑（如腎上腺素）</strong>或周邊血管收縮藥劑會影響監測。</p>
                    </div>
                    <div class="bg-orange-50 p-3 rounded border border-orange-100 border-l-4 border-l-ems-orange">
                        <div class="font-bold text-ems-orange">6. 血紅素載體異常（重要）</div>
                        <p class="text-xs text-slate-600 mt-1">血氧儀<strong>無法偵測</strong>變性血紅素及<strong>一氧化碳血紅素</strong>。對<strong>火災或疑似 CO 中毒</strong>的病人，<strong>不可以過度依賴</strong>血氧儀！</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200 md:col-span-2">
                        <div class="font-bold text-ems-navy">7. 高海拔（低氧氣分壓）</div>
                        <p class="text-xs text-slate-600 mt-1">大氣中氧氣濃度在任何高度均為 <strong>21%</strong>，但隨高度增加，大氣壓力會從海平面逐漸降低，<strong>氧氣分壓也隨著降低</strong>。</p>
                    </div>
                </div>
            </div>

            <div class="bg-ems-navy text-white p-4 rounded-lg border-t-4 border-ems-orange">
                <p class="text-sm">
                    <strong class="text-ems-orange">🚑 救護重點：</strong>火災現場的傷員若意識不清但 SpO₂ 顯示正常，<strong class="text-white">不要被數字騙了</strong>—— CO 中毒病人的血氧儀讀數會「假性正常」。應以臨床判斷為主，給予高濃度氧氣，並盡速送往可做血液氣體分析的醫院。
                </p>
            </div>
        </div>
        `
    }
};

function showVital(id) {
    const data = vitalsData[id];
    if (!data) return;

    document.getElementById('vital-title').innerText = data.t;
    document.getElementById('vital-page').innerText = data.page;
    const contentDiv = document.getElementById('vital-content');
    contentDiv.innerHTML = data.c;

    document.querySelectorAll('.vital-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('btn-vital-' + id).classList.add('active');

    // Fade animation
    contentDiv.style.opacity = '0';
    setTimeout(() => {
        contentDiv.style.transition = 'opacity 0.25s ease-in';
        contentDiv.style.opacity = '1';
    }, 50);

    // Scroll to top of content on smaller screens
    contentDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
