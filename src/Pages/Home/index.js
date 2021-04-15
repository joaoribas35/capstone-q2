import FormAddActive from "../../components/FormAddActive";
import FormAddTransaction from "../../components/FormAddTransaction";
import FormEditTransaction from "../../components/FormEditTransaction";
import MenuNavBar from "../../components/MenuNavBar";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MenuNavBar />
      <h1>Bem Vindo a minha Aplicação</h1>

      <FormAddTransaction />
      <FormEditTransaction idTransaction={1} />
      <FormAddActive />
    </div>
  );
};

export default Home;
