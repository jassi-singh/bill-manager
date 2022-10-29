import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useAppSelector } from "../../../app/hooks";
import { selectTotalAmountByMonth } from "../billSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyBillingChart = () => {
  const amountByMonth = useAppSelector(selectTotalAmountByMonth);
  return (
    <Line
      options={{
        scales: {
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
          y: {
            title: {
              display: true,
              text: "Amount",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
      data={{
        labels: amountByMonth.map((d) => d.month),
        datasets: [
          {
            data: amountByMonth.map((d) => d.amount.toFixed(2)),
            borderColor: "#60a5fa",
            backgroundColor: "#60a5fa",
            tension: 0.1,
          },
        ],
      }}
    />
  );
};

export default MonthlyBillingChart;
