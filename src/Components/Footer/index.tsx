import { FooterStyles, FooterText } from './styles';

const Footer = (): JSX.Element => {
  return (
    <FooterStyles>
      <img src="/img/Logo 1.png" alt="Caras" width={84} height={23} loading="lazy" />
      <FooterText>© 2026 Caras</FooterText>
    </FooterStyles>
  );
};

export default Footer;