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

export { SubscribeStyles, SubscribeTitle, Form, Input, Button, SuccessMessage, ErrorMessage, Title, Text, Span };