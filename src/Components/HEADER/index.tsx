import { HeaderStyles, Img, SectionNav, SectionImg } from "./styles";


const Header = (): JSX.Element => {
  return (
    <HeaderStyles>
      <SectionImg>
            <Img src="/img/Logo 1.png" alt="Logo de Caras" width={150} height={41} />
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
                        <li><a href="#portada" aria-label="Ir a sección Portada" lang="en">LifeStyle</a></li>
                        <li><a href="#tendencias" aria-label="Ir a sección Moda" lang="es">Moda</a></li>
                        <li><a href="#tendencias" aria-label="Ir a sección Belleza" lang="es">Belleza</a></li>
                        <li><a href="#tendencias" aria-label="Ir a sección Entretenimiento" lang="es">Entretenimiento</a></li>
                        <li><a href="#tendencias" aria-label="Ir a sección Sports" lang="en">Sports</a></li>
                        <li><a href="#profundidad" aria-label="Ir a sección Personalidades" lang="es">Personalidades</a></li>
                        <li><a href="#profundidad" aria-label="Ir a sección Caras Travel" lang="es">Caras Travel</a></li>
                  </ul>
            </nav>
        </SectionNav>
   </HeaderStyles>
  );
};

export default Header;