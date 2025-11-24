let pieChart = null;
let barChart = null;

// =========================
// 1) Buscar dados da API
// =========================
async function fetchDashboardData() {
    try {
        const response = await fetch("/api/unidades");
        if (!response.ok) {
            throw new Error("Erro ao buscar dados da API.");
        }

        return await response.json();
    } catch (err) {
        console.error("Erro na requisição:", err);
        return null;
    }
}

// =========================
// 2) Atualizar cards
// =========================
function updateCards(data) {
    document.getElementById("upasCount").innerText = data.contagem.upas;
    document.getElementById("ubsCount").innerText = data.contagem.ubs;
    document.getElementById("capsCount").innerText = data.contagem.caps;
    document.getElementById("totalVagas").innerText = data.total_vagas;
}

// =========================
// 3) Atualizar tabela
// =========================
function updateTable(units) {
    const tbody = document.querySelector("#unitsTable tbody");
    tbody.innerHTML = "";

    units.forEach(unit => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${unit.tipo}</td>
            <td>${unit.nome}</td>
            <td>${unit.endereco}</td>
            <td>${unit.vagas}</td>
            <td>${unit.atualizado}</td>
        `;
        tbody.appendChild(tr);
    });
}

// =========================
// 4) Criar gráfico de pizza
// =========================
function renderPieChart(counts) {
    const ctx = document.getElementById("pieChart").getContext("2d");

    if (pieChart) pieChart.destroy();

    pieChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["UPA", "UBS", "CAPS"],
            datasets: [{
                data: [counts.upas, counts.ubs, counts.caps],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "bottom" }
            }
        }
    });
}

// =========================
// 5) Criar gráfico de barras
// =========================
function renderBarChart(units) {
    const ctx = document.getElementById("barChart").getContext("2d");

    if (barChart) barChart.destroy();

    // Ordenar unidades por vagas e pegar top 8
    const sorted = units
        .slice()
        .sort((a, b) => b.vagas - a.vagas)
        .slice(0, 8);

    barChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: sorted.map(u => u.nome),
            datasets: [{
                label: "Vagas disponíveis",
                data: sorted.map(u => u.vagas),
            }]
        },
        options: {
            responsive: true,
            indexAxis: "y",
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// =========================
// 6) Atualizar tudo
// =========================
async function updateDashboard() {
    const data = await fetchDashboardData();
    if (!data) return;

    updateCards(data);
    updateTable(data.unidades);
    renderPieChart(data.contagem);
    renderBarChart(data.unidades);
}

// Primeira execução
updateDashboard();

// Atualização automática a cada 5 segundos
setInterval(updateDashboard, 5000);
