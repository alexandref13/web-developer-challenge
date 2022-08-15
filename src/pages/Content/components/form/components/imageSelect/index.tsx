import { useContext } from 'react';

import { Container } from './style';

import selectorImage from '../../../../../../assets/image_selector.svg';
import baseImage from '../../../../../../assets/photo-base.png';
import { FormContext } from '../../../../../../contexts/Form/FormContext';

export const ImageSelect = () => {
  const { hasClick, handleClick } = useContext(FormContext);

  return (
    <Container hasClick={hasClick} onClick={handleClick}>
      {hasClick ? (
        <img src={baseImage} alt="Imagem selecionada" />
      ) : (
        <img src={selectorImage} alt="Selecione image" />
      )}
    </Container>
  );
};
