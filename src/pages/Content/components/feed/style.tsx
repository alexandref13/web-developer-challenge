import styled from 'styled-components';

export const Container = styled.div`
  max-height: 353px;
  max-width: 516px;

  font-size: 14px;
  color: #7a7a7a;

  p {
    margin-top: 56px;
    margin-bottom: 8px;
  }

  margin: 10px;
`;

export const Content = styled.div`
  padding-left: 24px;

  border-radius: 3px;

  display: flex;
  flex-direction: column;

  background-color: #313131;

  div {
    display: flex;
  }

  @media (max-width: 530px) {
    div {
      display: flex;
      flex-direction: column;

      justify-content: center;
    }
  }
`;

export const Message = styled.div`
  display: flex;

  flex-direction: column;

  margin-right: 24px;

  div {
    display: flex;
    flex-direction: column;

    padding-bottom: 32px;
  }

  @media (max-width: 530px) {
    div {
      align-items: flex-start;
    }
  }
`;

export const Text = styled.span`
  display: flex;

  flex-direction: column;

  margin-bottom: 24px;

  text-align: left;

  @media (max-width: 530px) {
    text-align: left;
  }
`;

export const Send = styled.span`
  font-size: 12px;

  color: #5f5f5f;
`;

export const Name = styled.span`
  font-size: 14px;

  color: #7a7a7a;
`;

export const Close = styled.button`
  padding: 24px;

  display: flex;

  align-self: flex-end;

  background-color: #313131;
`;

export const Image = styled.img`
  height: 89px;
  width: 89px;

  margin-right: 32px;

  background-color: #000;

  object-fit: contain;
  border-radius: 36px;

  @media (max-width: 530px) {
    align-self: center;
    margin-bottom: 8px;
  }
`;
