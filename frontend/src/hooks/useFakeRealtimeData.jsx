
import { useEffect, useState } from "react";

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

      const newPoint = {
        time,
        current: Number((Math.random() * 10 + 1).toFixed(2)),     // 1–11 A
        voltage: Number((220 + Math.random() * 10).toFixed(2)),   // ~220 V
        frequency: Number((50 + Math.random() * 0.5).toFixed(2)), // ~50 Hz
      };

      setData((prev) => [...prev, newPoint].slice(-50));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return data; // ✅ hook returns only data
}
