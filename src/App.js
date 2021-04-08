import GlobalStyle from "./global/styles";
import {Container} from './styles.js'

function App() {
  return (
    <>
      <div>Meu app</div>
      <GlobalStyle />
      <Container>
        <h1>ola</h1>
        <h2>como vai</h2>
      </Container>
    </>
  );
}

export default App;
