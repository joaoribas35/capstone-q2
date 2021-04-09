import Modal from './components/Modal/Modal'

import GlobalStyle from "./global/styles";
import Routes from "./routes";

function App() {
  return (
    <>
      <div>Meu app</div>;
      <GlobalStyle />;
      <Modal title={"Adicionar Transação"}>Ola</Modal>
    </>
  );
}

export default App;
