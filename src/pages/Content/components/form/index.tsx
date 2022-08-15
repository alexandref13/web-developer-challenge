import React, { useContext } from 'react';
import { FormContext } from '../../../../contexts/Form/FormContext';
import { Buttons } from './components/buttons';
import { ImageSelect } from './components/imageSelect';
import { Container } from './style';

export const Form = () => {
  const { name, setName, message, setMessage } = useContext(FormContext);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <Container>
      <ImageSelect />
      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={handleName}
      />
      <textarea
        name="Mensagem"
        placeholder="Mensagem"
        rows={3}
        value={message}
        onChange={handleMessage}
      ></textarea>
      <Buttons />
    </Container>
  );
};
