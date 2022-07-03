import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
const MyChart = ({ data, day }) => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
  const options = {
    responsive: true,
    elements: {
      point: {
        radius: 1,
      },
    },
    
  };
  return (
    <div>
      <Line
        options={options}
        data={{
          labels: data.map((item) => {
            let date = new Date(item[0]);
            return day === 1
              ? date.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })
              : date.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                });
          }),
          datasets: [
            {
              label: "Price",
              data: data.map((item) => {
                return item[1];
              }),
              borderColor: "#EBCF17",
            },
          ],
        }}
      />
    </div>
  );
};

export default React.memo(MyChart);
