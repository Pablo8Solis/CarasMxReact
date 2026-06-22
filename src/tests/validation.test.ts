import { validateEmail, validateName } from '../utils/validation';

describe('Validation Helpers', () => {
  describe('validateEmail', () => {
    test('debería retornar true para correos válidos', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true);
      expect(validateEmail('a@b.c')).toBe(true);
    });

    test('debería retornar false para correos no válidos', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
      expect(validateEmail('test@domain')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('validateName', () => {
    test('debería retornar true para nombres válidos', () => {
      expect(validateName('Juan')).toBe(true);
      expect(validateName('Maria del Carmen')).toBe(true);
      expect(validateName('J')).toBe(true);
    });

    test('debería retornar false para nombres vacíos o que solo contienen espacios', () => {
      expect(validateName('')).toBe(false);
      expect(validateName('   ')).toBe(false);
    });
  });
});
