import React, { useState } from 'react';
import { SubscribeStyles, SubscribeTitle, Form, Input, Button, SuccessMessage, ErrorMessage, Title, Text, Span, FieldError } from './styles';
import { validateEmail, validateName } from '../../../utils/validation';

const Subscribe = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setStatus(null);
    setError('');

    let hasError = false;

    if (!validateName(name)) {
      setNameError('El nombre es requerido.');
      hasError = true;
    }

    if (!validateEmail(email)) {
      setEmailError('El correo electrónico no es válido.');
      hasError = true;
    }

    if (hasError) {
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
      setNameError('');
      setEmailError('');
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
        {nameError && <FieldError data-testid="name-error">{nameError}</FieldError>}
        <Input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          aria-label="Correo electrónico"
        />
        {emailError && <FieldError data-testid="email-error">{emailError}</FieldError>}
        <Button type="submit">Suscribirme</Button>
      </Form>

      {status === 'success' && <SuccessMessage>Gracias por suscribirte.</SuccessMessage>}
      {status === 'error' && <ErrorMessage>{error}</ErrorMessage>}
    </SubscribeStyles>
  );
};

export default Subscribe;
