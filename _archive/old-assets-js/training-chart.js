/* ----------------------------------------------------------------
 * training-chart.js — initialises the Chart.js bar chart on the
 * training page. Expects a <canvas id="trainingChart"> in the DOM.
 * ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('trainingChart');
    if (!canvas || typeof Chart === 'undefined') return;

    new Chart(canvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['初級 (EMT-1)', '中級 (EMT-2)', '高級 (EMTP)'],
            datasets: [{
                label: '法規訓練時數',
                data: [56, 336, 1296],
                backgroundColor: ['#94a3b8', '#0ea5e9', '#1e293b'],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: { label: ctx => ctx.raw + ' 小時' },
                    padding: 10,
                    titleFont: { size: 14 },
                    bodyFont:  { size: 14 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: '訓練時數 (小時)' },
                    grid:  { color: '#f1f5f9' }
                },
                x: {
                    grid:  { display: false },
                    ticks: { font: { weight: 'bold' } }
                }
            }
        }
    });
});
