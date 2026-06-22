import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Header from '../Components/HEADER';

describe('Header Component', () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    );
  };

  test('debería renderizar correctamente el logotipo con su alt text', () => {
    renderWithTheme(<Header />);
    const logoElement = screen.getByAltText('Logo de Caras');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', '/img/Logo 1.png');
  });

  test('debería renderizar correctamente el título de la cabecera', () => {
    renderWithTheme(<Header />);
    const titleElement = screen.getByRole('heading', { level: 1, name: /revista caras/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('debería renderizar correctamente el subtítulo de la cabecera', () => {
    renderWithTheme(<Header />);
    const subtitleElement = screen.getByRole('heading', { level: 2, name: /moda, belleza y celebridades/i });
    expect(subtitleElement).toBeInTheDocument();
  });
});
