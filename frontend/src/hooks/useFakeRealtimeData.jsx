

import { useEffect, useState } from "react";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function useFakeRealtimeData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();

      // Format time with AM/PM
      let hours = now.getHours();
      const minutes = pad(now.getMinutes());
      const seconds = pad(now.getSeconds());
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

      const newPoint = {
        time: formattedTime,
        current: Number((Math.random() * 10 + 1).toFixed(2)),     // 1–11 A
        voltage: Number((220 + Math.random() * 10).toFixed(2)),   // ~220 V
        frequency: Number((50 + Math.random() * 0.5).toFixed(2)), // ~50 Hz

        // Extra fields for monitoring
        breaker: Math.random() > 0.5 ? "ON" : "OFF",
        lastTransfer: formattedTime,
      };

      // keep last 50 entries only
      setData((prev) => [...prev, newPoint].slice(-50));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return data; // ✅ returns array of latest readings
}
