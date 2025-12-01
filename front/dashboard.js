async function loadDashboard() {
    const resp = await fetch("getData.php");
    const data = await resp.json();

    // Atualizar cards
    document.getElementById("upasCount").textContent = data.upas;
    document.getElementById("ubsCount").textContent = data.ubs;
    document.getElementById("capsCount").textContent = data.caps;

    const total = data.upas + data.ubs + data.caps;
    document.getElementById("totalVagas").textContent = total;

    // Atualizar tabela
    const tableBody = document.querySelector("#units-table tbody");
    tableBody.innerHTML = "";

    data.unidades.forEach(u => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${u.nome}</td>
            <td>${u.tipo}</td>
            <td>${u.regiao}</td>
        `;
        tableBody.appendChild(tr);
    });

    // Atualizar gráficos
    updatePieChart(data);
    updateUPAGraph(data);
}

// CHAMAR ao carregar a página
loadDashboard();
setInterval(loadDashboard, 15000); // atualiza a cada 15s
