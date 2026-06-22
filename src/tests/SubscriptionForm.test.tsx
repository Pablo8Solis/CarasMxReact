import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Subscribe from '../Components/HEADER/Subscribe';

describe('SubscriptionForm Component (Subscribe)', () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    );
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('debería renderizar los campos de entrada y el botón de envío', () => {
    renderWithTheme(<Subscribe />);
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /suscribirme/i })).toBeInTheDocument();
  });

  test('debería mostrar mensajes de error cuando los campos están vacíos y se envía el formulario', () => {
    renderWithTheme(<Subscribe />);
    const submitButton = screen.getByRole('button', { name: /suscribirme/i });

    fireEvent.click(submitButton);

    expect(screen.getByText('El nombre es requerido.')).toBeInTheDocument();
    expect(screen.getByText('El correo electrónico no es válido.')).toBeInTheDocument();
    expect(screen.getByText('Por favor ingresa un nombre y un correo válido.')).toBeInTheDocument();
  });

  test('debería mostrar error de correo cuando el nombre es válido pero el correo no lo es', () => {
    renderWithTheme(<Subscribe />);
    const nameInput = screen.getByPlaceholderText('Nombre');
    const emailInput = screen.getByPlaceholderText('Correo electrónico');
    const submitButton = screen.getByRole('button', { name: /suscribirme/i });

    fireEvent.change(nameInput, { target: { value: 'Juan' } });
    fireEvent.change(emailInput, { target: { value: 'correo-invalido' } });
    fireEvent.click(submitButton);

    expect(screen.queryByText('El nombre es requerido.')).not.toBeInTheDocument();
    expect(screen.getByText('El correo electrónico no es válido.')).toBeInTheDocument();
    expect(screen.getByText('Por favor ingresa un nombre y un correo válido.')).toBeInTheDocument();
  });

  test('debería mostrar mensaje de éxito cuando los datos ingresados son válidos', () => {
    renderWithTheme(<Subscribe />);
    const nameInput = screen.getByPlaceholderText('Nombre');
    const emailInput = screen.getByPlaceholderText('Correo electrónico');
    const submitButton = screen.getByRole('button', { name: /suscribirme/i });

    fireEvent.change(nameInput, { target: { value: 'Juan' } });
    fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
    
    fireEvent.click(submitButton);

    // Avanzar el timer simulado de 600ms
    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(screen.getByText('Gracias por suscribirte.')).toBeInTheDocument();
    expect(screen.queryByText('El nombre es requerido.')).not.toBeInTheDocument();
    expect(screen.queryByText('El correo electrónico no es válido.')).not.toBeInTheDocument();
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  });
});
