import styled from 'styled-components';

export const Container = styled.div.attrs(
  (props: { hasClick: boolean }) => props
)`
  margin-bottom: 16px;

  padding: ${(props) => (props.hasClick ? `0px` : `32px`)};

  display: flex;

  flex-direction: column;

  align-self: center;
  align-items: center;
  justify-content: center;

  border: solid 1px #4b4b4b;
  border-radius: 36px;

  cursor: pointer;
`;
