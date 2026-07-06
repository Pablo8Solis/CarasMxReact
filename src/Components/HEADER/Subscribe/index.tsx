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
    <SubscribeStyles id="suscripcion">
      <SubscribeTitle>Suscríbete</SubscribeTitle>
      <Title>Todo Caras <br></br> <Span>en tu correo</Span></Title>
      <Text>Moda, belleza y celebrities. Cada semana.</Text>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: '0' }}>
          Ingresa tu nombre
        </label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          placeholder="Nombre"
          aria-label="Nombre"
          aria-invalid={!!nameError}
          aria-describedby={nameError ? "name-error" : undefined}
          required
        />
        {nameError && <FieldError id="name-error" data-testid="name-error">{nameError}</FieldError>}
        <label htmlFor="email" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: '0' }}>
          Ingresa tu correo electrónico
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          aria-label="Correo electrónico"
          aria-invalid={!!emailError}
          aria-describedby={emailError ? "email-error" : undefined}
          required
        />
        {emailError && <FieldError id="email-error" data-testid="email-error">{emailError}</FieldError>}
        <Button type="submit" aria-label="Suscribirme a la revista Caras">
          Suscribirme
        </Button>
      </Form>

      {status === 'success' && <SuccessMessage role="status" aria-live="polite">Gracias por suscribirte.</SuccessMessage>}
      {status === 'error' && <ErrorMessage role="alert" aria-live="assertive">{error}</ErrorMessage>}
    </SubscribeStyles>
  );
};

export default Subscribe;
