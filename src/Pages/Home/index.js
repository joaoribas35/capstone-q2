import FormAddTransaction from "../../components/FormAddTransaction";
import MenuNavBar from "../../components/MenuNavBar";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MenuNavBar />
      <h1>Bem Vindo a minha Aplicação</h1>

      <FormAddTransaction />
    </div>
  );
};

export default Home;
