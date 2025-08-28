// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

// export default function ChartCard({ title, dataKey, data }) {
//   return (
//     <div className="bg-gray-800 p-4 rounded-2xl text-white shadow-md w-full md:w-1/2">
//       <h2 className="text-xl mb-2">{title}</h2>
//       <ResponsiveContainer width="100%" height={250}>
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//           <XAxis dataKey="time" stroke="#fff" />
//           <YAxis stroke="#fff" />
//           <Tooltip />
//           <Bar dataKey={dataKey} fill="#00f5d4" radius={[8, 8, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }


// this is with table and graph 

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// export default function ChartCard({ title, dataKey, data }) {
//   return (
//     <div className="bg-gray-800 p-4 rounded-2xl text-white shadow-md w-full md:w-1/2">
//       <h2 className="text-xl mb-4">{title}</h2>

//       {/* Chart */}
//       <ResponsiveContainer width="100%" height={250}>
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//           <XAxis dataKey="time" stroke="#fff" />
//           <YAxis stroke="#fff" />
//           <Tooltip />
//           <Bar dataKey={dataKey} fill="#00f5d4" radius={[8, 8, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>

//       {/* Table */}
//       <div className="mt-6 overflow-x-auto">
//         <table className="w-full border border-gray-600 rounded-lg">
//           <thead className="bg-gray-700">
//             <tr>
//               <th className="px-4 py-2 text-left">Time</th>
//               <th className="px-4 py-2 text-left">{dataKey}</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, index) => (
//               <tr
//                 key={index}
//                 className="odd:bg-gray-800 even:bg-gray-700 border-t border-gray-600"
//               >
//                 <td className="px-4 py-2">{row.time}</td>
//                 <td className="px-4 py-2">{row[dataKey]}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }





// this is with table and graph with flex

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
// import { useEffect, useState } from "react";

// export default function ChartCard({ title, dataKey, data, rowLimit = 10 }) {
//   const [tableData, setTableData] = useState(data);

//   // Limit rows to 'rowLimit'
//   useEffect(() => {
//     if (data.length > rowLimit) {
//       setTableData(data.slice(-rowLimit)); // keep only last 'rowLimit' rows
//     } else {
//       setTableData(data);
//     }
//   }, [data, rowLimit]);

//   return (
//     <div className="bg-gray-800 p-4 rounded-2xl text-white shadow-md w-full">
//       <h2 className="text-xl mb-4">{title}</h2>

//       {/* Flex Layout for Graph & Table */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Chart */}
//         <div className="flex-1">
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={tableData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//               <XAxis dataKey="time" stroke="#fff" />
//               <YAxis stroke="#fff" />
//               <Tooltip />
//               <Bar dataKey={dataKey} fill="#00f5d4" radius={[8, 8, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Table */}
//         <div className="flex-1 max-h-[300px] overflow-y-auto border border-gray-600 rounded-lg">
//           <table className="w-full">
//             <thead className="bg-gray-700 sticky top-0">
//               <tr>
//                 <th className="px-4 py-2 text-left">Time</th>
//                 <th className="px-4 py-2 text-left">{dataKey}</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((row, index) => (
//                 <tr
//                   key={index}
//                   className="odd:bg-gray-800 even:bg-gray-700 border-t border-gray-600"
//                 >
//                   <td className="px-4 py-2">{row.time}</td>
//                   <td className="px-4 py-2">{row[dataKey]}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";
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
    <div className="bg-gray-800 p-4 rounded-2xl text-white shadow-md w-full">
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
