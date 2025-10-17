async function loadUnits(){
    try{
    const res = await fetch('/api/unidades');
    if (!res.ok) throw new Error('Resposta da API não OK');
    const data = await res.json();
    processData(data);
    }catch(err){
    console.warn('Falha ao buscar API, carregando dados de exemplo:', err.message);
    loadSampleData();
    }
    }
    
    
    function processData(data){
    markers.clearLayers();
    const tbody = document.querySelector('#units-table tbody');
    tbody.innerHTML = '';
    
    
    let total = data.length;
    let patientsToday = 0;
    const typeCounts = {};
    
    
    data.forEach(unit=>{
    const { nome, tipo, lat, lon, regiao, atendimentosHoje } = unit;
    if (lat && lon){
    const m = L.marker([lat, lon]).bindPopup(`<strong>${nome}</strong><br>${tipo} — ${regiao || ''}`);
    markers.addLayer(m);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${nome}</td><td>${tipo}</td><td>${regiao || ''}</td>`;
    tbody.appendChild(tr);
    
    
    patientsToday += Number(atendimentosHoje || 0);
    typeCounts[tipo] = (typeCounts[tipo] || 0) + 1;
    });
    
    
    document.getElementById('total-units').innerText = total;
    document.getElementById('patients-today').innerText = patientsToday;
    
    
    const labels = Object.keys(typeCounts);
    const values = labels.map(l=>typeCounts[l]);
    createTypeChart(labels, values);
    
    
    const top = data.slice().sort((a,b)=> (b.atendimentosHoje||0)-(a.atendimentosHoje||0)).slice(0,5);
    const topList = document.getElementById('top-list'); topList.innerHTML = '';
    top.forEach(u=>{ const li = document.createElement('li'); li.textContent = `${u.nome} — ${u.atendimentosHoje || 0} atendimentos`; topList.appendChild(li); });
    
    
    const allMarkers = markers.getLayers();
    if (allMarkers.length){ const group = new L.featureGroup(allMarkers); map.fitBounds(group.getBounds().pad(0.1)); }
    }
    
    
    function loadSampleData(){
    const sample = [
    { id:1, nome:'UBS Centro', tipo:'UBS', lat:-30.0277, lon:-51.2287, regiao:'Centro', atendimentosHoje:34 },
    { id:2, nome:'UPA Leste', tipo:'UPA', lat:-30.0112, lon:-51.2001, regiao:'Leste', atendimentosHoje:87 },
    { id:3, nome:'CAPS Vila', tipo:'CAPS', lat:-30.045, lon:-51.26, regiao:'Vila', atendimentosHoje:12 },
    { id:4, nome:'Clínica da Família Sul', tipo:'Clínica', lat:-30.06, lon:-51.21, regiao:'Sul', atendimentosHoje:21 },
    { id:5, nome:'UBS Norte', tipo:'UBS', lat:-29.99, lon:-51.18, regiao:'Norte', atendimentosHoje:45 }
    ];
    // Simula atraso de fetch
    setTimeout(()=> processData(sample), 250);
    }
    
    
    // Inicia ao carregar DOM
    document.addEventListener('DOMContentLoaded', ()=>{
    loadUnits();
    });