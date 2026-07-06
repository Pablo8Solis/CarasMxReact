import { ProfundidadStyles2 , ProfundidadImg, SectionInfo} from "./styes";

interface ProfundidadComponentProps {
    genero: string;
    titulo: string;
    descripcion: string;
    imagen: string;
    tituloImg: string;
    width?: number;
    height?: number;
    loading?: "lazy" | "eager";
}

const ProfundidadComponent = ({ 
    genero, 
    titulo, 
    descripcion, 
    imagen, 
    tituloImg,
    width = 100,
    height = 133,
    loading = "lazy"
}: ProfundidadComponentProps): JSX.Element => {
    return (
        <ProfundidadStyles2 tabIndex={0}>
            <section>
                <ProfundidadImg src={imagen} alt={tituloImg} width={width} height={height} loading={loading} />
            </section>
            <SectionInfo>
                <p>{genero}</p>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </SectionInfo>
        </ProfundidadStyles2>
    )
}

export default ProfundidadComponent;