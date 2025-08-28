
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function ChartCard({ title, dataKey, data = [], rowLimit = 10 }) {
  const [tableData, setTableData] = useState([]);

  // keep only the last `rowLimit` rows in the table + chart
  useEffect(() => {
    const safe = Array.isArray(data) ? data : [];
    setTableData(safe.length > rowLimit ? safe.slice(-rowLimit) : safe);
  }, [data, rowLimit]);

  return (
    <div className="bg-blue-950 p-4 rounded-2xl text-white shadow-md w-full">
      <h2 className="text-xl mb-4">{title}</h2>

      {/* Chart + Table side by side on md+ */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Line Chart */}
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={tableData} margin={{ top: 10, right: 16, bottom: 8, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="time" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Line
                type="monotone" 
                dataKey={dataKey}
                stroke="#00f5d4"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="flex-1 max-h-[300px] overflow-y-auto border border-gray-600 rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-700 sticky top-0">
              <tr>
                <th className="px-4 py-2 text-left">Time</th>
                <th className="px-4 py-2 text-left">{dataKey}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className="odd:bg-gray-800 even:bg-gray-700 border-t border-gray-600"
                >
                  <td className="px-4 py-2">{row.time}</td>
                  <td className="px-4 py-2">{row[dataKey]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
