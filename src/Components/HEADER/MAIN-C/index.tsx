import Buttons from "../Buttons";
import NewsComponent from "../NewsComponent";
import ProfundidadComponent from "../ProfundidadComponent";
import Testimonials from "../Testimonials";
import Subscribe from "../Subscribe";
import { MainImg, MainSectionFlex, MainStyles, MainSection1, MainStylesP, MainSection2, MainTendencia, ProfundidadP, ProfundidadStyles, ProfundidadFlex} from "./styles";

const Main = (): JSX.Element => {
    return (
       <MainStyles>
            <MainStylesP>Portada de la semana</MainStylesP>
            <MainSectionFlex>
                <MainSection1>
                        <h1>Gracie Abrams revela por qué le dio miedo vivir con su pareja, el actor Paul Mescal</h1>
                        <p>La cantante confesó que la estabilidad que encontró junto al actor de “Gladiator II” la hizo cuestionar su propia carrera musical.</p>
                        <Buttons nameOfButton="Leer historia" />
                </MainSection1>
                <MainSection2>
                        <MainImg src="/img/Portada2-H.webp" alt="Portada de la semana" />
                </MainSection2>
           </MainSectionFlex>

           <MainTendencia>
                <NewsComponent 
                    className="div1"
                    categoria="Sports"
                    imagen="/img/Portada-V.png"
                    alt="Tendencia 1"
                    titulo="EN PORTADA Israel Reyes nos habla sobre el orgullo de representar a México"
                    fecha="Mayo 19, 2026"
                />
                <NewsComponent 
                    className="div2"
                    categoria="Entretenimiento"
                    imagen="/img/Tendencia2.webp"
                    alt="Tendencia 1"
                    titulo="Revelan quién fue el gran amor que marcó para siempre a Johnny Depp y no es Winona Ryder"
                    fecha="Junio 09, 2026
"
                />
                <NewsComponent 
                    className="div3"
                    categoria="Entretenimiento"
                    imagen="/img/Tendencia3.webp"
                    alt="Tendencia 1"
                    titulo="Isaac Moreno sorprende a Galilea Montijo con emotiva fiesta de cumpleaños"
                    fecha="Junio 09, 2026
 "
                />
                 <NewsComponent 
                    className="div4"
                    categoria="Entretenimiento"
                    imagen="/img/Tendencia4.webp"
                    alt="Tendencia 1"
                    titulo="Katy Perry y Justin Trudeau debutan en la alfombra del Tribeca Film Festival"
                    fecha="Junio 09, 2026"
                />
                 <NewsComponent 
                    className="div5"
                    categoria="Entretenimiento"
                    imagen="/img/Tendencia5.webp"
                    alt="Tendencia 1"
                    titulo="Grace Gummer rompe el silencio tras las críticas del hijo de Caroline Kennedy a su actuación en ‘Love Story’"
                        fecha="20 de septiembre de 2024"
                    />
                    
            </MainTendencia>

            <ProfundidadStyles>
                <ProfundidadP>En profundidad</ProfundidadP>
                <ProfundidadFlex>
                    <ProfundidadComponent
                        genero="Entretenimiento"
                        imagen="/img/Profundidad1.webp"
                        titulo="Hublot presenta el Big Bang Reloaded Kylian Mbappé"
                        descripcion="Se trata de la primera edición limitada creada junto con el icono del fútbol y embajador de Hublot, Kylian Mbappé."
                        tituloImg="Imagen de profundidad 1"
                    />
                    <ProfundidadComponent
                        genero="Entretenimiento"
                        imagen="/img/Profundidad2.webp"
                        titulo="HardWear by Tiffany: la nueva joya relojera que transforma el tiempo en una declaración de estilo"
                        descripcion="Recientemente Tiffany & Co. lanzó la campaña Summer Icons destacando el reloj Tiffany Hardwear. La inspiración de HardWear proviene de un brazalete de 1962."
                        tituloImg="Imagen de profundidad 2"
                    />
                    <ProfundidadComponent
                        genero="Entretenimiento"
                        imagen="/img/Profundidad3.webp"
                        titulo="Tiempo que se hereda: tres relojes Bulova para celebrar el legado de papá"
                        descripcion="Un análisis profundo sobre cómo la crisis económica afecta a la industria del entretenimiento."
                        tituloImg="Imagen de profundidad 3"
                    />
                </ProfundidadFlex>
            </ProfundidadStyles>

            <Testimonials />

            <Subscribe />
        </MainStyles>

        
    )
}

export default Main;