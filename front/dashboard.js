/* dashboard.js */
let unidadesChart;

function atualizarDashboard() {
fetch('getData.php')
.then(response => response.json())
.then(data => {
document.getElementById('upasCount').innerText = data.upas;
document.getElementById('ubsCount').innerText = data.ubs;
document.getElementById('capsCount').innerText = data.caps;


        if(unidadesChart){
            unidadesChart.data.datasets[0].data = [data.upas, data.ubs, data.caps];
            unidadesChart.update();
        }
    })
    .catch(error => console.error('Erro ao atualizar dashboard:', error));
}


function criarGrafico() {
const ctx = document.getElementById('unidadesChart').getContext('2d');
unidadesChart = new Chart(ctx, {
type: 'bar',
data: {
labels: ['UPAs', 'UBSs', 'CAPS'],
datasets: [{
label: 'Número de unidades',
data: [0, 0, 0],
backgroundColor: [
'rgba(0, 123, 255, 0.7)',
'rgba(40, 167, 69, 0.7)',
'rgba(255, 193, 7, 0.7)'
],
borderColor: [
'rgba(0, 123, 255, 1)',
'rgba(40, 167, 69, 1)',
'rgba(255, 193, 7, 1)'
],
borderWidth: 1
}]
},
options: {
responsive: true,
scales: {
y: { beginAtZero: true }
}
}

});



criarGrafico();
atualizarDashboard();
setInterval(atualizarDashboard, 10000); // Atualiza a cada 10 segundos