import { useEffect, useState } from "react";
import { getAlerts } from "../services/api";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getAlerts().then(res => {
      console.log("Alerts API:", res.data);
      setAlerts(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Alerts</h2>

      {alerts.length === 0 ? (
        <p>No alerts</p>
      ) : (
        alerts.map((a, i) => (
          <div key={i} style={{ color: "red" }}>
             {a.message} ({a.symbol})
          </div>
        ))
      )}
    </div>
  );
}