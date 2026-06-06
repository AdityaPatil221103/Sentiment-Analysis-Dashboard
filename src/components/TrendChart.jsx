import { useEffect, useState } from "react";
import { getTrend } from "../services/api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

export default function TrendChart() {

  const [data, setData] = useState([]);
  const [selectedStock, setSelectedStock] = useState("ALL");

  useEffect(() => {

    getTrend().then((res) => {

      console.log("TREND DATA:", res.data);

      setData(res.data);

    });

  }, []);

  // to get unique stock symbols for filter dropdown
  const stocks = [
    "ALL",
    ...new Set(data.map(item => item.symbol))
  ];

  // to filter data based on selected stock
  const filteredData =
    selectedStock === "ALL"
      ? data
      : data.filter(
          item => item.symbol === selectedStock
        );

  return (

    <div style={{ padding: "20px" }}>

      <h2>7-Day Sentiment Trend</h2>

      {/* STOCK FILTER */}

      <select
        value={selectedStock}
        onChange={(e) =>
          setSelectedStock(e.target.value)
        }
        style={{
          padding: "8px",
          marginBottom: "20px"
        }}
      >

        {stocks.map((stock, index) => (

          <option key={index} value={stock}>

            {stock}

          </option>

        ))}

      </select>

      {/* TABLE */}

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          marginBottom: "40px"
        }}
      >

        <thead>

          <tr>

            <th>Stock</th>
            <th>Date</th>
            <th>Positive</th>
            <th>Negative</th>
            <th>Neutral</th>

          </tr>

        </thead>

        <tbody>

          {filteredData.map((item, index) => (

            <tr key={index}>

              <td>{item.symbol}</td>
              <td>{item.date}</td>
              <td>{item.positive}</td>
              <td>{item.negative}</td>
              <td>{item.neutral}</td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* MULTI LINE CHART */}

      <LineChart
        width={800}
        height={400}
        data={filteredData}
      >

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="date" />

        <YAxis />

        <Tooltip />

        <Legend />

        <Line
          type="monotone"
          dataKey="positive"
          stroke="blue"
        />

        <Line
          type="monotone"
          dataKey="negative"
          stroke="red"
        />

        <Line
          type="monotone"
          dataKey="neutral"
          stroke="green"
        />

      </LineChart>

    </div>
  );
}