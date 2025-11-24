let chartUPA = null;
let chartUBS = null;
let chartCAPS = null;
let chartVagas = null;

function renderMiniCharts(data) {

    // Mini-chart do card UPAs
    const ctxUPA = document.getElementById("chartUPA");
    if (chartUPA) chartUPA.destroy();
    chartUPA = new Chart(ctxUPA, {
        type: "doughnut",
        data: {
            labels: ["UPAs"],
            datasets: [{
                data: [data.contagem.upas],
            }],
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            cutout: "70%"
        }
    });

    // Mini-chart do card UBSs
    const ctxUBS = document.getElementById("chartUBS");
    if (chartUBS) chartUBS.destroy();
    chartUBS = new Chart(ctxUBS, {
        type: "doughnut",
        data: {
            labels: ["UBSs"],
            datasets: [{
                data: [data.contagem.ubs],
            }],
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            cutout: "70%"
        }
    });

    // Mini-chart do card CAPS
    const ctxCAPS = document.getElementById("chartCAPS");
    if (chartCAPS) chartCAPS.destroy();
    chartCAPS = new Chart(ctxCAPS, {
        type: "doughnut",
        data: {
            labels: ["CAPS"],
            datasets: [{
                data: [data.contagem.caps],
            }],
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            cutout: "70%"
        }
    });

    // Mini-chart do card VAGAS
    const ctxVagas = document.getElementById("chartVagas");
    if (chartVagas) chartVagas.destroy();
    chartVagas = new Chart(ctxVagas, {
        type: "bar",
        data: {
            labels: ["Vagas"],
            datasets: [{
                data: [data.total_vagas],
            }],
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { display: false }
            }
        }
    });
}
