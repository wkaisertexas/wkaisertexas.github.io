import React from "react";
import { useContext, useState, useEffect } from "react";
import { DatabaseContext } from "./database";
import { type Database } from "sql.js";
import { Cell, Legend, Pie, PieChart } from "recharts";

const sms_dist = (db: Database): Object => {
  console.log("DB:", db);
  const sms = db.exec(
    'select count(*) as total, h.service from message m join handle h where h.service = "SMS";'
  );
  console.log("SMS:", sms);

  const total = db.exec(
    "select count(*) as total from message m join handle h;"
  );

  const sms_percent = sms[0].values[0][0] / total[0].values[0][0]; // should be right

  const formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });

  const data = [
    {
      name: "SMS",
      value: (100 * sms_percent).toFixed(0) / 100,
    },
    {
      name: "iMessage",
      value: (100 * (1 - sms_percent)).toFixed(0) / 100,
    },
  ];

  console.log("SMS Data:", data);
  return data;
};

const COLORS = ["#0088FE", "#00C49F"];

export const SMS = () => {
  const [smsData, setSMSData] = useState(null);
  const db = useContext(DatabaseContext);

  useEffect(() => {
    if (!smsData && db) {
      setSMSData(sms_dist(db));
    }
  }, [db]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col h-full">
        <div className="h-min sticky top-0">
          <h1>SMS Text Messages</h1>
          <p> You send a lot of iMessages! </p>
        </div>
      </div>
      <div id="sms_graph">
        {smsData && (
          <PieChart width={300} height={300}>
            <Pie
              data={smsData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
              label
            >
              {smsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        )}
      </div>
    </div>
  );
};
