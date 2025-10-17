document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([-30.03, -51.23], 12);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);
  

    const markers = L.layerGroup().addTo(map);
    const markerRefs = [];
  
  
    function extractLatLon(unit) {
      const lat = unit.latitude !== undefined ? unit.latitude : (unit.lat !== undefined ? unit.lat : (unit.latitud !== undefined ? unit.latitud : null));
      const lon = unit.longitude !== undefined ? unit.longitude : (unit.lng !== undefined ? unit.lng : (unit.lon !== undefined ? unit.lon : (unit.longitude !== undefined ? unit.longitude : null)));
      const lon2 = unit.longitude !== undefined ? unit.longitude : lon;
      return { lat, lon: lon2 };
    }
  

    function makePopupHtml(u) {
      const endereco = u.endereco ? `<div><strong>Endereço:</strong> ${u.endereco}</div>` : '';
      const bairro = u.bairro ? `<div><strong>Bairro:</strong> ${u.bairro}</div>` : '';
      const telefone = u.telefone ? `<div><strong>Telefone:</strong> ${u.telefone}</div>` : '';
      const tipo = u.tipo ? `<div><strong>Tipo:</strong> ${u.tipo}</div>` : '';
      return `<div style="min-width:200px">
                <strong style="font-size:1.03rem">${u.nome}</strong>
                ${tipo}
                ${bairro}
                ${endereco}
                ${telefone}
              </div>`;
    }
  
    function processUnits(units) {
      markers.clearLayers();
      markerRefs.length = 0;
  
      const tbody = document.querySelector('#units-table tbody');
      tbody.innerHTML = '';
  
      let total = units.length;
      let patientsToday = 0; 
  
      const typeCounts = {};
  
      units.forEach((u, index) => {
        const lat = (u.latitude !== undefined) ? u.latitude : (u.lat !== undefined ? u.lat : (u.latitud !== undefined ? u.latitud : null));
        const lon = (u.longitude !== undefined) ? u.longitude : (u.lng !== undefined ? u.lng : (u.lon !== undefined ? u.lon : (u.long !== undefined ? u.long : null)));

        let marker = null;
        if (lat !== null && lon !== null && !isNaN(lat) && !isNaN(lon)) {
          marker = L.marker([Number(lat), Number(lon)]);
          marker.bindPopup(makePopupHtml(u));
          markers.addLayer(marker);
          markerRefs.push({ marker, unit: u });
        } else {
          markerRefs.push({ marker: null, unit: u });
        }
  
        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        const bairroOrRegiao = u.bairro ?? u.regiao ?? '';
        tr.innerHTML = `<td>${u.nome}</td><td>${u.tipo ?? ''}</td><td>${bairroOrRegiao}</td>`;
        tr.addEventListener('click', () => {
          if (marker) {
            map.flyTo([Number(lat), Number(lon)], 15, { duration: 0.8 });
            marker.openPopup();
          } else {
            alert('Localização não disponível para esta unidade.');
          }
        });
        tbody.appendChild(tr);
  
        patientsToday += Number(u.atendimentosHoje || 0);
        const tipoKey = u.tipo || 'Não informado';
        typeCounts[tipoKey] = (typeCounts[tipoKey] || 0) + 1;
      });
  
      document.getElementById('total-units').innerText = total;
      document.getElementById('patients-today').innerText = patientsToday;
  
      const top = units.slice().sort((a, b) => (Number(b.atendimentosHoje || 0) - Number(a.atendimentosHoje || 0))).slice(0, 5);
      const topList = document.getElementById('top-list');
      topList.innerHTML = '';
      top.forEach(u => {
        const li = document.createElement('li');
        li.textContent = `${u.nome} — ${u.atendimentosHoje || 0} atendimentos`;
        topList.appendChild(li);
      });
  
      const allMarkers = markers.getLayers();
      if (allMarkers.length) {
        const group = new L.featureGroup(allMarkers);
        map.fitBounds(group.getBounds().pad(0.1));
      }
    }
  

    if (typeof unidadesSaude !== 'undefined' && Array.isArray(unidadesSaude)) {
      processUnits(unidadesSaude);
    } else {
      fetch('/api/unidades')
        .then(r => {
          if (!r.ok) throw new Error('API não disponível');
          return r.json();
        })
        .then(data => processUnits(data))
        .catch(err => {
          console.warn('API indisponível e datamap.js não encontrado. Forneça datamap.js ou /api/unidades', err);
          const tbody = document.querySelector('#units-table tbody');
          tbody.innerHTML = '<tr><td colspan="3">Nenhuma unidade carregada. Verifique datamap.js ou /api/unidades.</td></tr>';
        });
    }
  });
  