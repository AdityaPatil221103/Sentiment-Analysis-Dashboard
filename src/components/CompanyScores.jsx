import { useEffect, useState } from "react";
import { getCompanyScores } from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function CompanyScores() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCompanyScores().then(res => {
      console.log("Company API:", res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Company Sentiment</h2>

      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <BarChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="symbol" fill="#160ccb" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#160ccb" />
        </BarChart>
      )}
    </div>
  );
}