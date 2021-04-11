import DoughnutChart from "../../components/DoughnutChart";
import LineChart from "../../components/LineChart";
import MenuNavBar from "../../components/MenuNavBar";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MenuNavBar />
      <h1>Bem Vindo a minha Aplicação</h1>
      <DoughnutChart />
      <LineChart />
    </div>
  );
};

export default Home;
