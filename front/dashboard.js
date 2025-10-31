function graficoTipos(dados) {
    const tipos = {};
    dados.forEach(d => {
      tipos[d.tipo] = (tipos[d.tipo] || 0) + 1;
    });
  
    new Chart(document.getElementById("graficoTipos"), {
      type: 'bar',
      data: {
        labels: Object.keys(tipos),
        datasets: [{
          label: 'Unidades por tipo',
          data: Object.values(tipos)
        }]
      }
    });
  }
  
  const res = await fetch('/api/unidades');
    if (res.ok) {
        const dados = await res.json();
        graficoTipos(dados);
    } else {
        console.error('Falha ao buscar dados das unidades de saúde');
    }