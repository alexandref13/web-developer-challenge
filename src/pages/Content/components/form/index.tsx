import { Buttons } from './components/buttons';
import { ImageSelect } from './components/imageSelect';
import { Container } from './style';

export const Form = () => {
  return (
    <Container>
      <ImageSelect />
      <input type="text" placeholder="Digite seu nome" />
      <textarea name="Mensagem" placeholder="Mensagem" rows={3}></textarea>
      <Buttons />
    </Container>
  );
};
