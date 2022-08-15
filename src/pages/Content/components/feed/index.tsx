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

import baseImage from '../../../../assets/photo-base.png';
import deleteIcon from '../../../../assets/delete.svg';
import { FeedContext } from '../../../../contexts/Feed/FeedContext';
import { useContext } from 'react';

export const Feed = () => {
  const { jsons, handleDeletePost } = useContext(FeedContext);

  return (
    <Container>
      <p>Feed</p>
      {jsons.map((json) => {
        return (
          <Content key={json.id}>
            <Close
              onClick={() => {
                handleDeletePost(json.id);
              }}
            >
              <img src={deleteIcon} alt="Ícone de deleção" />
            </Close>
            <div>
              <Image src={baseImage}></Image>
              <Message>
                <Text>{json.message}</Text>
                <div>
                  <Send>Enviado por</Send>
                  <Name>{json.user}</Name>
                </div>
              </Message>
            </div>
          </Content>
        );
      })}
    </Container>
  );
};
