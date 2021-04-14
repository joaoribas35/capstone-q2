import React from "react";
import { Line } from "react-chartjs-2";
import * as Style from "./style";

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Moeda 1",
        backgroundColor: "pink",
        data: [65, 59, 80],
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
        <h2>Lucro/Prejuizo</h2>
      </header>

      <div>
        <Style.Dados>
          <div>
            <p>$ 100.00</p>
            <p>+10.32 (24h)</p>
          </div>
          <Style.Porcent>+2,34%</Style.Porcent>
        </Style.Dados>

        <Line data={data} options={options} />
      </div>
    </Style.ConstaineLine>
  );
};

export default LineChart;
