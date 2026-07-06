import { NewsStyles, NewsImg, NewsTitle, NewsFecha, NewsCategoriaText } from "./styles";

interface NewsComponentProps {
    categoria: string;
    imagen: string;
    alt: string;
    titulo: string;
    fecha: string;
    className?: string;
    width?: number;
    height?: number;
    loading?: "lazy" | "eager";
}

const NewsComponent = ({ 
    categoria, 
    imagen, 
    alt, 
    titulo, 
    fecha, 
    className,
    width = 300,
    height = 400,
    loading = "lazy"
}: NewsComponentProps): JSX.Element => {
    return (
        <NewsStyles className={className} tabIndex={0}>
            <NewsCategoriaText>{categoria}</NewsCategoriaText>
            <NewsImg src={imagen} alt={alt} width={width} height={height} loading={loading} />
            <NewsTitle>{titulo}</NewsTitle>
            <NewsFecha>{fecha}</NewsFecha>
        </NewsStyles>
    );
}

export default NewsComponent;