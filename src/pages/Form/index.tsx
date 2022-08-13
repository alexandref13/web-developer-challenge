import { Buttons } from './components/buttons';
import { ImageSelect } from './components/imageSelect';
import { Container, Content } from './style';

export const Form = () => {
  return (
    <Container>
      <Content>
        <ImageSelect />
        <input type="text" placeholder="Digite seu nome" />
        <textarea name="Mensagem" placeholder="Mensagem" rows={3}></textarea>
        <Buttons />
      </Content>
    </Container>
  );
};
