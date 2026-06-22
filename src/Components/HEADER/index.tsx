import { HeaderStyles, Img, SectionNav, SectionImg } from "./styles";


const Header = (): JSX.Element => {
  return (
    <HeaderStyles>
      <SectionImg>
            <Img src="/img/Logo 1.png" alt="Logo de Caras" />
            <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: '0' }}>
              Revista CARAS
            </h1>
            <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: '0' }}>
              Moda, belleza y celebridades
            </h2>
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