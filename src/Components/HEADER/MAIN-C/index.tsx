import Buttons from "../Buttons";
import NewsComponent from "../NewsComponent";
import ProfundidadComponent from "../ProfundidadComponent";
import Testimonials from "../Testimonials";
import Subscribe from "../Subscribe";
import { MainImg, MainSectionFlex, MainStyles, MainSection1, MainStylesP, MainSection2, MainTendencia, ProfundidadP, ProfundidadStyles, ProfundidadFlex} from "./styles";

const Main = (): JSX.Element => {
    return (
       <MainStyles id="contenido-principal">
            <MainStylesP>Portada de la semana</MainStylesP>
            <MainSectionFlex id="portada">
                <MainSection1>
                        <h1>Gracie Abrams revela por qué le dio miedo vivir con su pareja, el actor Paul Mescal</h1>
                        <p>La cantante confesó que la estabilidad que encontró junto al actor de “Gladiator II” la hizo cuestionar su propia carrera musical.</p>
                        <Buttons nameOfButton="Leer historia" />
                </MainSection1>
                <MainSection2>
                        <MainImg src="/img/Portada2-H.webp" alt="Portada de la semana de caras" width={500} height={375} loading="eager" />
                </MainSection2>
           </MainSectionFlex>

           <MainTendencia id="tendencias">
                <NewsComponent 
                    className="div1"
                    categoria="Sports"
                    imagen="/img/portada-V-opt.jpg"
                    alt="Imagen de Isac Reyes en cancha del estadio Azteca"
                    titulo="EN PORTADA Israel Reyes nos habla sobre el orgullo de representar a México"
                    fecha="Mayo 19, 2026"
                    width={300}
                    height={345}
                    loading="lazy"
                />
                <NewsComponent
                    className="div2"
                    categoria="Entretenimiento"
                    imagen="/img/Tendencia2.webp"
                    alt="Imgaen de Johnny Depp"
                    titulo="Revelan quién fue el gran amor que marcó para siempre a Johnny Depp y no es Winona Ryder"
                    fecha="Junio 09, 2026
"
                    width={300}
                    height={400}
                    loading="lazy"
                />
                <NewsComponent 
                    className="div3"
                    categoria="Entretenimiento"
                    imagen="/img/tendencia3.webp"
                    alt="Imagen de Isaac Moreno con Galilea Montijo tomados de la mano"
                    titulo="Isaac Moreno sorprende a Galilea Montijo con emotiva fiesta de cumpleaños"
                    fecha="Junio 09, 2026
 "
                    width={300}
                    height={400}
                    loading="lazy"
                />
                 <NewsComponent 
                    className="div4"
                    categoria="Entretenimiento"
                    imagen="/img/tendencia4.webp"
                    alt="Imagen de Katy Perry y Justin Trudeau en la alfombra del Tribeca Film Festival"
                    titulo="Katy Perry y Justin Trudeau debutan en la alfombra del Tribeca Film Festival"
                    fecha="Junio 09, 2026"
                    width={300}
                    height={400}
                    loading="lazy"
                />
                 <NewsComponent 
                    className="div5"
                    categoria="Entretenimiento"
                    imagen="/img/Tendencia5.webp"
                    alt="Imagen de Grace Gummer"
                    titulo="Grace Gummer rompe el silencio tras las críticas del hijo de Caroline Kennedy a su actuación en ‘Love Story’"
                        fecha="20 de septiembre de 2024"
                    width={300}
                    height={400}
                    loading="lazy"
                    />
                    
            </MainTendencia>

            <ProfundidadStyles id="profundidad">
                <ProfundidadP>En profundidad</ProfundidadP>
                <ProfundidadFlex>
                    <ProfundidadComponent
                        genero="Entretenimiento"
                        imagen="/img/Profundidad1.webp"
                        titulo="Hublot presenta el Big Bang Reloaded Kylian Mbappé"
                        descripcion="Se trata de la primera edición limitada creada junto con el icono del fútbol y embajador de Hublot, Kylian Mbappé."
                        tituloImg="Imagen de Mbappé con el reloj Hublot Big Bang Reloaded"
                        width={100}
                        height={133}
                        loading="lazy"
                    />
                    <ProfundidadComponent
                        genero="Entretenimiento"
                        imagen="/img/Profundidad2.webp"
                        titulo="HardWear by Tiffany: la nueva joya relojera que transforma el tiempo en una declaración de estilo"
                        descripcion="Recientemente Tiffany & Co. lanzó la campaña Summer Icons destacando el reloj Tiffany Hardwear. La inspiración de HardWear proviene de un brazalete de 1962."
                        tituloImg="Imagen de reloj Tiffany Hardwear"
                        width={100}
                        height={133}
                        loading="lazy"
                    />
                    <ProfundidadComponent
                        genero="Entretenimiento"
                        imagen="/img/Profundidad3.webp"
                        titulo="Tiempo que se hereda: tres relojes Bulova para celebrar el legado de papá"
                        descripcion="Un análisis profundo sobre cómo la crisis económica afecta a la industria del entretenimiento."
                        tituloImg="Imagen de reloj Bulova"
                        width={100}
                        height={133}
                        loading="lazy"
                    />
                </ProfundidadFlex>
            </ProfundidadStyles>

            <Testimonials />

            <Subscribe />
        </MainStyles>

        
    )
}

export default Main;