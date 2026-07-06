import styled from 'styled-components';

const SubscribeStyles = styled.section`
  margin-top: 2rem;
  width: 100%;
  //background-color: ${props => props.theme.colors.colorFondoProfundidad};
  padding: 2rem 10rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    border-radius: 0.75rem;
  }
`;

const SubscribeTitle = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.colors.colorGrisTexto};
  font-family: ${props => props.theme.fonts.title};
  text-transform: uppercase;
  font-weight: 200;
  text-align: center;
  text-decoration: underline ${props => props.theme.colors.colorPrincipal} 4px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction:column;
  gap: 0.8rem;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.85rem 1rem;
  border-radius: 0.6rem;
  border: 1px solid #e6e6e6;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.colorPrincipal};
    box-shadow: 0 0 0 3px rgba(208, 58, 43, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  padding: 0.85rem 1.2rem;
  background: ${props => props.theme.colors.colorPrincipal};
  color: ${props => props.theme.colors.colorBlanco};
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 2px 6px rgba(208, 58, 43, 0.2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 12px rgba(208, 58, 43, 0.35);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(208, 58, 43, 0.2);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 3px solid ${props => props.theme.colors.colorBlack};
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SuccessMessage = styled.p`
  margin-top: 1rem;
  color: ${props => props.theme.colors.colorGrisTexto};
  font-family: monserrat, sans-serif;
    background-color: #c8f7c5;
    padding: 0.1rem;
    border: solid 2px #27ae60;

`;

const ErrorMessage = styled.p`
  margin-top: 1rem;
  fonf-family: monserrat, sans-serif;
  color: ${props => props.theme.colors.colorGrisTexto};
  background-color: #f8adad;
    padding: 0.1rem;
    border: solid 2px #ED1E1E;
`;

const Title = styled.h3`
    font-size: 5.5rem;
    margin-top: 1rem;
    color: ${props => props.theme.colors.colorGrisTexto};
    font-family: ${props => props.theme.fonts.titles};

    @media (max-width: 1024px) {
      font-size: 4rem;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
`;

const Text = styled.p`
    font-size: 1.2rem;
    margin-top: 1rem;
    color: ${props => props.theme.colors.colorGrisTexto};
    font-family: monserrat, sans-serif;
    font-weight: 100;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
`;

const Span = styled.span`
    display: block;
    font-style: italic;
    font-weight: bold;
    color: ${props => props.theme.colors.colorPrincipal};
    `;

const FieldError = styled.span`
  color: #ED1E1E;
  font-size: 1.1rem;
  font-family: monserrat, sans-serif;
  align-self: flex-start;
  margin-top: -0.4rem;
  margin-bottom: 0.4rem;
`;

export { SubscribeStyles, SubscribeTitle, Form, Input, Button, SuccessMessage, ErrorMessage, Title, Text, Span, FieldError };