/**
 * Valida si una cadena tiene el formato de un correo electrónico válido.
 * @param value Correo electrónico a validar
 */
export const validateEmail = (value: string): boolean => {
  if (!value) return false;
  return /\S+@\S+\.\S+/.test(value);
};

/**
 * Valida si un nombre es válido (no vacío y con longitud mínima).
 * @param value Nombre a validar
 */
export const validateName = (value: string): boolean => {
  if (!value) return false;
  return value.trim().length > 0;
};
