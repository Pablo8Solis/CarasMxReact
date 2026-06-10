import React, { useState } from 'react';
import { SubscribeStyles, SubscribeTitle, Form, Input, Button, SuccessMessage, ErrorMessage, Title,Text, Span } from './styles';

const Subscribe = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [error, setError] = useState('');

  const validateEmail = (value: string): boolean => /\S+@\S+\.\S+/.test(value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!name.trim() || !validateEmail(email)) {
      setError('Por favor ingresa un nombre y un correo válido.');
      setStatus('error');
      return;
    }

    // Simular envío
    setTimeout(() => {
      setStatus('success');
      setError('');
      setName('');
      setEmail('');
    }, 600);
  };

  return (
    <SubscribeStyles>
      <SubscribeTitle>Suscríbete</SubscribeTitle>
      <Title>Todo Caras <br></br> <Span>en tu correo</Span></Title>
      <Text>Moda, belleza y celebrities. Cada semana.</Text>
      <Form onSubmit={handleSubmit}>
        <Input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          placeholder="Nombre"
          aria-label="Nombre"
        />
        <Input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          aria-label="Correo electrónico"
        />
        <Button type="submit">Suscribirme</Button>
      </Form>

      {status === 'success' && <SuccessMessage>Gracias por suscribirte.</SuccessMessage>}
      {status === 'error' && <ErrorMessage>{error}</ErrorMessage>}
    </SubscribeStyles>
  );
};

export default Subscribe;
