import React, { useState, useContext, useEffect } from "react";
import { DatabaseContext } from "./database";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const by_hour =
  "SELECT count(*) as count, CAST(STRFTIME('%H', DATETIME(ROUND(date / 1000000000 + 978307200), 'unixepoch')) AS INTEGER) AS hour_sent from message group by hour_sent;";
const by_day =
  "SELECT count(*) as count, CAST(STRFTIME('%d', DATETIME(ROUND(date / 1000000000 + 978307200), 'unixepoch')) AS INTEGER) AS day_of_the_week from message group by day_of_the_week;";
const by_month =
  "SELECT count(*) as count, CAST(STRFTIME('%m', DATETIME(ROUND(date / 1000000000 + 978307200), 'unixepoch')) AS INTEGER) AS month_sent from message group by month_sent;";
const by_year =
  "SELECT count(*) as count, CAST(STRFTIME('%Y', DATETIME(ROUND(date / 1000000000 + 978307200), 'unixepoch')) AS INTEGER) AS year_sent from message group by year_sent;";

// I could do this by phone number.. this could make it more interactive

const get_data = (db, cmd) => {
  const data = db.exec(cmd);
  console.log(data, "data");
  console.log(cmd, "cmd");
  console.log(data, "data");

  return data[0].values.map((row) => ({
    count: row[0],
    time: row[1],
  }));
};

const int_to_month = (month: int): string => {
  return {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  }[month];
};

const fix_time_zone = (hour: number) => {
  let offset_in_hours = new Date().getTimezoneOffset() / 60;

  return Math.round(hour - offset_in_hours + 24) % 24;
};

const convertToAMPM = (hour) => {
  if (hour === 0) {
    return "12 AM";
  } else if (hour < 12) {
    return hour + " AM";
  } else if (hour === 12) {
    return "12 PM";
  } else {
    return hour - 12 + " PM";
  }
};

const LineGraph = ({ data }) => {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="count" stroke="#8884d8" />
    </LineChart>
  );
};

export const Timing = () => {
  const db = useContext(DatabaseContext);

  const [byHour, setByHour] = useState([]);
  const [byDay, setByDay] = useState([]);
  const [byMonth, setByMonth] = useState([]);
  const [byYear, setByYear] = useState([]);

  useEffect(() => {
    if (
      db &&
      !byHour.length &&
      !byDay.length &&
      !byMonth.length &&
      !byYear.length
    ) {
      let byHourData = get_data(db, by_hour);
      const byDayData = get_data(db, by_day);
      let byMonthData = get_data(db, by_month);
      const byYearData = get_data(db, by_year);

      byHourData = byHourData
        .map((row) => ({
          count: row.count,
          time: fix_time_zone(row.time),
        }))
        .sort((a, b) => a.time - b.time)
        .map((row) => ({
          count: row.count,
          time: convertToAMPM(row.time),
        }));

      byMonthData = byMonthData.map((row) => ({
        count: row.count,
        time: int_to_month(row.time),
      }));

      setByHour(byHourData);
      setByDay(byDayData);
      setByMonth(byMonthData);
      setByYear(byYearData);
    }
  }, [db]);

  return (
    <div>
      {byHour.length && <LineGraph data={byHour} />}
      {byDay.length && <LineGraph data={byDay} />}
      {byMonth.length && <LineGraph data={byMonth} />}
      {byYear.length && <LineGraph data={byYear} />}
    </div>
  );
};
