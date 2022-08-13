import { Container } from './style';

import BxLogo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <Container>
      <img src={BxLogo} alt="Logo" />
    </Container>
  );
};
