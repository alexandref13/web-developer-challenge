import {
  Close,
  Container,
  Content,
  Image,
  Message,
  Name,
  Send,
  Text
} from './style';

import selectorImage from '../../../../assets/logo.svg';
import deleteIcon from '../../../../assets/delete.svg';

export const Feed = () => {
  return (
    <Container>
      <p>Feed</p>
      <Content>
        <Close>
          <img src={deleteIcon} alt="Ícone de deleção" />
        </Close>
        <div>
          <Image src={selectorImage}></Image>
          <Message>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
            <div>
              <Send>Enviado por</Send>
              <Name>Manuela Oliveira</Name>
            </div>
          </Message>
        </div>
      </Content>
    </Container>
  );
};
