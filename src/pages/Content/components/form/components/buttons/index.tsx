import { useContext } from 'react';
import { FormContext } from '../../../../../../contexts/Form/FormContext';
import { Container } from './style';

export const Buttons = () => {
  const { handlePost, handleClear, isAbleToPost } = useContext(FormContext);

  return (
    <Container isAbleToPost={isAbleToPost}>
      <span onClick={handleClear}>Descartar</span>
      <button onClick={handlePost}>Publicar</button>
    </Container>
  );
};
