import styled from 'styled-components';

const NewsStyles = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    //background-color: ${props => props.theme.colors.colorBeige};
    padding: 1rem;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 0.5rem 0;
    }
`;


const NewsCategoriaText = styled.p`
    font-size: 1.3rem;
    color: ${props => props.theme.colors.colorPrincipal};
    font-family: monserrat, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-align: start;
`;

const NewsImg = styled.img`
   width: 30rem;
    height: auto;

    @media (max-width: 1024px) {
        width: 100%;
        max-width: 100%;
    }
`;

const NewsTitle = styled.h2`
    font-size: 2rem;
    color: ${props => props.theme.colors.colorGrisTexto};
    font-family: ${props => props.theme.fonts.titles};

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const NewsFecha = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.colorGrisTexto};
    font-family: monserrat, sans-serif;
    font-weight: 100;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export {NewsStyles, NewsImg, NewsTitle, NewsFecha, NewsCategoriaText};