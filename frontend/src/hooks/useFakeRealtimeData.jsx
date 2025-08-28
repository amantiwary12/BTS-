import React, { useEffect, useState } from "react";
import ChartCard from "../components/ChartCard"; // <-- adjust the path if needed

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function useFakeRealtimeData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(
        now.getSeconds()
      )}`;

      // Generate NUMBERS (not strings)
      const newPoint = {
        time,
        current: Number((Math.random() * 10 + 1).toFixed(2)),     // 1–11 A
        voltage: Number((220 + Math.random() * 10).toFixed(2)),   // ~220 V
        frequency: Number((50 + Math.random() * 0.5).toFixed(2)), // ~50 Hz
      };

      // keep last 50 points
      setData((prev) => [...prev, newPoint].slice(-50));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ChartCard title="Current (A)"   dataKey="current"   data={data} rowLimit={10} />
      <ChartCard title="Voltage (V)"   dataKey="voltage"   data={data} rowLimit={10} />
      <ChartCard title="Frequency (Hz)" dataKey="frequency" data={data} rowLimit={10} />
    </div>
  );
}
