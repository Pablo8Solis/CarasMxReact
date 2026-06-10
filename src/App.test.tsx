import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /gracie abrams revela por qué le dio miedo vivir con su pareja/i });
  expect(headingElement).toBeInTheDocument();
});
