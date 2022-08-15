import { FeedProvider } from '../../contexts/Feed/FeedContext';
import { FormProvider } from '../../contexts/Form/FormContext';
import { Feed } from './components/feed';
import { Form } from './components/form';
import { Container } from './style';

export const Content = () => {
  return (
    <Container>
      <FeedProvider>
        <FormProvider>
          <Form />
          <Feed />
        </FormProvider>
      </FeedProvider>
    </Container>
  );
};
