/* script.js - faz fetch em getData.php e atualiza elementos + charts */
let pieChart = null;
let barChart = null;


async function fetchData(){
try{
const resp = await fetch('getData.php');
if(!resp.ok) throw new Error('Resposta não OK');
const data = await resp.json();
return data;
}catch(err){
console.error('Erro fetch:',err);
return null;
}}

function formatDateTime(sqlDatetime){
if(!sqlDatetime) return '-';
const d = new Date(sqlDatetime + 'Z'); // assume UTC-like timestamp
return d.toLocaleString();
}


function updateCards(counts, totalVagas){
document.getElementById('upasCount').innerText = counts.upas;
document.getElementById('ubsCount').innerText = counts.ubs;
document.getElementById('capsCount').innerText = counts.caps;
document.getElementById('totalVagas').innerText = totalVagas;
}


function updateTable(units){
const tbody = document.querySelector('#unitsTable tbody');
tbody.innerHTML = '';
units.forEach(u=>{
const tr = document.createElement('tr');
tr.innerHTML = `
<td>${u.type}</td>
<td>${u.name}</td>
<td>${u.address || '-'}</td>
<td>${u.available_beds}</td>
<td>${formatDateTime(u.last_update)}</td>
`;
tbody.appendChild(tr);
});
}


function updateCharts(counts, units){
// Pie chart: quantidade por tipo
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieData = [counts.upas, counts.ubs, counts.caps];
if(pieChart) pieChart.destroy();
pieChart = new Chart(pieCtx, {
type: 'pie',
data: {
labels: ['UPA','UBS','CAPS'],
datasets: [{data: pieData}]
},
options: {responsive:true,plugins:{legend:{position:'bottom'}}}
});


// Bar chart: top 8 unidades por vagas
const sorted = units.slice().sort((a,b)=>b.available_beds - a.available_beds).slice(0,8);
const barCtx = document.getElementById('barChart').getContext('2d');
if(barChart) barChart.destroy();
barChart = new Chart(barCtx, {
type: 'bar',
data: {
labels: sorted.map(s=>s.name),
datasets: [{label:'Vagas disponíveis',data: sorted.map(s=>s.available_beds)}]
},
options: {indexAxis:'y',responsive:true,plugins:{legend:{display:false}}}
});
}


async function atualizarDashboard(){
const data = await fetchData();
if(!data) return;
updateCards(data.counts, data.total_vagas);
updateTable(data.units);
updateCharts(data.counts, data.units);
}


// Primeira carga e intervalo
atualizarDashboard();
setInterval(atualizarDashboard, 5000); // 5s (ajuste conforme necessidade)