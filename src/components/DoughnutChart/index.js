import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ContainerPie } from "./style";
import { chartColors } from "./colors";

const PieChart = ({ title, inputLabels, inputData }) => {
  const data = {
    labels: inputLabels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: chartColors,
        borderColor: "#2c405a",
        data: inputData,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    legend: {
      labels: false,
    },
  };

  return (
    <ContainerPie>
      <header>
        <h2>{title}</h2>
      </header>

      <div>
        <Doughnut data={data} options={options} />
      </div>
    </ContainerPie>
  );
};

export default PieChart;
