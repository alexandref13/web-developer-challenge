import { Feed } from './components/feed';
import { Form } from './components/form';
import { Container } from './style';

export const Content = () => {
  return (
    <Container>
      <Form />
      <Feed />
    </Container>
  );
};
