function atualizarDashboard() {
    fetch('getdata.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('upasCount').innerText = data.upas;
            document.getElementById('ubsCount').innerText = data.ubs;
            document.getElementById('capsCount').innerText = data.caps;
        })
        .catch(error => console.error('Erro ao atualizar dashboard:', error));
}

// Atualiza a cada 10 segundos
atualizarDashboard(); // primeira vez
setInterval(atualizarDashboard, 10000);
