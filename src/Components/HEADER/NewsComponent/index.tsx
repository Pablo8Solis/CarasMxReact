import { NewsStyles, NewsImg, NewsTitle, NewsFecha, NewsCategoriaText } from "./styles";

interface NewsComponentProps {
    categoria: string;
    imagen: string;
    alt: string;
    titulo: string;
    fecha: string;
    className?: string;
}

const NewsComponent = ({ categoria, imagen, alt, titulo, fecha, className }: NewsComponentProps): JSX.Element => {
    return (
        <NewsStyles className={className} tabIndex={0}>
            <NewsCategoriaText>{categoria}</NewsCategoriaText>
            <NewsImg src={imagen} alt={alt} />
            <NewsTitle>{titulo}</NewsTitle>
            <NewsFecha>{fecha}</NewsFecha>
        </NewsStyles>
    );
}

export default NewsComponent;