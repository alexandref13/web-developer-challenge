import { Container } from './AppStyle';
import GlobalStyle from './globalStyle';
import { Content } from './pages/Content';
import { Header } from './pages/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Content />
      </Container>
    </>
  );
}

export default App;
