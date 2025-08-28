
import Navbar from "./components/Navbar";
import ChartCard from "./components/ChartCard";
import useFakeRealtimeData from "./hooks/useFakeRealtimeData";
import Footer from "./components/Footer";

export default function Home() {
  const data = useFakeRealtimeData(); // ✅ hook returns live data
  const latest = data[data.length - 1] || {};

  return (
    <div className="bg-gray-950">
      <Navbar />
      <div className="p-4 justify-center text-white flex flex-col">
        <h1 className="text-3xl flex flex-col justify-center items-center mb-4">
          Real-Time Monitoring
        </h1>

        {/* Status Section */}
        <div className="mb-4 text-xl flex flex-col justify-center items-center p-4 rounded-xl">
          <p>
            Breaker Status:{" "}
            <span className="font-bold">{latest.breaker || "-"}</span>
          </p>
          <p>
            Last Transfer:{" "}
            <span className="text-blue-400">{latest.lastTransfer || "-"}</span>
          </p>
        </div>

        {/* Charts Section */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <ChartCard title="Current" dataKey="current" data={data} />
          <ChartCard title="Voltage" dataKey="voltage" data={data} />
          <ChartCard title="Frequency" dataKey="frequency" data={data} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
