import styled from 'styled-components';

export const Container = styled.div.attrs(
  (props: { isAbleToPost: boolean }) => props
)`
  margin-top: 36px;

  display: flex;

  align-items: center;
  justify-content: flex-end;

  span {
    cursor: pointer;

    color: #5f5f5f;
    background-color: #313131;

    border-bottom: 1px solid;

    font-size: 14px;

    margin-right: 24px;
  }

  button {
    color: ${(props) => (props.isAbleToPost ? 'white' : `#313131`)};
    background-color: ${(props) =>
      props.isAbleToPost ? `#71bb00` : `#5f5f5f`};

    border-radius: 8px;

    padding: 12px 24px;

    font-size: 14px;

    line-height: 1.29;
    letter-spacing: normal;
  }
`;
