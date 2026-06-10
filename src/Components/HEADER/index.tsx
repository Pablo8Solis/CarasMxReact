import { HeaderStyles, Img, SectionNav, SectionImg } from "./styles";


const Header = (): JSX.Element => {
  return (
    <HeaderStyles>
      <SectionImg>
            <Img src="/img/Logo 1.png" alt="Logo de Caras" />
      </SectionImg>
      <SectionNav>
            <nav>
                  <ul>
                        <li><a href="#">LifeStyle</a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Belleza</a></li>
                        <li><a href="#">Entretenimiento</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Personalidades</a></li>
                        <li><a href="#">Caras Travel</a></li>
                  </ul>
            </nav>
        </SectionNav>
   </HeaderStyles>
  );
};

export default Header;