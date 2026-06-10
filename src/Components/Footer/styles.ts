import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  padding: 1.75rem 1rem;
  border-top: 1px solid rgba(64, 64, 64, 0.12);
  background-color: ${props => props.theme.colors.colorBlanco};

  img {
    width: 84px;
    height: auto;
    display: block;
  }
`;

const FooterText = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.colorGrisTexto};
  font-family: ${props => props.theme.fonts.base}, sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export { FooterStyles, FooterText };