import { embedDashboard } from "@superset-ui/embedded-sdk";

embedDashboard({
  id: "3", // Dashboard ID
  supersetDomain: "http://localhost:8088",
  mountPoint: document.getElementById("dashboard-container"),
  fetchGuestToken: () =>
    fetch("http://localhost:5000/get_embed_token")
      .then(res => res.json())
      .then(data => data.token),
  dashboardUiConfig: {
    hideTitle: true,
    hideChartControls: true,
  },
});
