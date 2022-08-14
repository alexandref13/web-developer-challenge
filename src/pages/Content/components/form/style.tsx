import styled from 'styled-components';

export const Container = styled.div`
  max-height: 353px;
  max-width: 516px;
  border-radius: 3px;

  background-color: #313131;

  padding: 24px;

  display: flex;

  flex-direction: column;

  align-items: stretch;

  justify-content: stretch;

  input {
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #494949;

    border: none;
  }

  textarea {
    margin-top: 8px;
    padding: 12px 16px;
    border-radius: 8px;

    border: none;
    background-color: #494949;

    resize: none;
  }
`;
