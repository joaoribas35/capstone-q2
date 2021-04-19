import React from "react";
import { Bar } from "react-chartjs-2";
import * as Style from "./style";
import formatValue from "../../utils";

const LineChart = ({ title, inputData, sum, labelData }) => {
  const data = {
    labels: labelData,
    datasets: [
      {
        label: "total",
        backgroundColor: "#6699CC",
        data: inputData,
        pointBackgroundColor: "#fff",
        fontColor: "#fff",
        pointBorderColor: "#000",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    plugins: {
      tooltip: {
        backgroundColor: "#fff",
      },
    },

    elements: {
      point: {
        hoverRadius: 6,
      },
      line: {
        borderWidth: 2,
        borderJoinStyle: "round",
        tension: 0,
      },
    },

    legend: {
      labels: {
        fontColor: "#fff",
        fontSize: 12,
      },
    },
  };

  return (
    <Style.ConstaineLine>
      <header>
        <h2>{title}</h2>
      </header>

      <div>
        <Style.Dados>
          <div>
            <p>{formatValue(sum)}</p>
          </div>
        </Style.Dados>

        <Bar data={data} options={options} />
      </div>
    </Style.ConstaineLine>
  );
};

export default LineChart;
