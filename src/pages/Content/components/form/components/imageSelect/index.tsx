import { Container } from './style';

import selectorImage from '../../../../../../assets/image_selector.svg';

export const ImageSelect = () => {
  return (
    <Container>
      <img src={selectorImage} alt="Selecione image" />
    </Container>
  );
};
