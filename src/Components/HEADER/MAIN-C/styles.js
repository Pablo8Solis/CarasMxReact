import styled from 'styled-components';


const MainStyles = styled.section`
    //background-color: ${props => props.theme.colors.colorPrincipal};
    padding: 4rem 10rem 0rem 10rem;
    //margin-left: 5rem;
    //margin-right: 5rem;

    @media (max-width: 1024px) {
        padding: 3rem 4rem 0rem 4rem;
    }

    @media (max-width: 768px) {
        padding: 2rem 1rem 0rem 1rem;
    }
`
const MainStylesP= styled.p`
    font-size: 1.3rem;
    text-transform: uppercase;
    font-family: monserrat, sans-serif;
    letter-spacing: 0.2rem;
    font-weight: 200;
    color: ${props => props.theme.colors.colorGrisTexto};

    @media (max-width: 768px) {
        font-size: 1rem;
        letter-spacing: 0.12rem;
    }
`

const MainSectionFlex = styled.section`
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`

const MainImg = styled.img`
    width: 100%;
    max-width: 500px;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`

const MainSection1 = styled.section`
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    gap: 2rem;
    flex: 1;
    h1 {
        font-size: 3.5rem;
        font-family: ${props => props.theme.fonts.titles};
        color: ${props => props.theme.colors.colorGrisTexto};
    }
    p {
        font-size: 2rem;
        color: ${props => props.theme.colors.colorGrisTexto};
        font-family: monserrat, sans-serif;
        font-weight: 100;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 2.8rem;
        }

        p {
            font-size: 1.7rem;
        }
    }

    @media (max-width: 768px) {
        gap: 1rem;

        h1 {
            font-size: 2.2rem;
            line-height: 1.15;
        }

        p {
            font-size: 1.4rem;
        }
    }
`
const MainSection2 = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    //flex: 1;
    img{
        width: 100%;
        max-width: 700px;
    }

    @media (max-width: 768px) {
        width: 100%;

        img {
            max-width: 100%;
        }
    }
`;

    //SECCION TENDECIAS

const MainTendencia = styled.section`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 8px;

.div1 {
    grid-column: span 3 / span 3;
    grid-row: span 6 / span 6;

    img{
        width: 55rem;
        max-width: 100%;
        display: block;
    }
}

.div2 {
    grid-row: span 3 / span 3;
    grid-column-start: 4;
}

.div3 {
    grid-row: span 3 / span 3;
    grid-column-start: 5;
}

.div4 {
    grid-row: span 3 / span 3;
    grid-column-start: 4;
    grid-row-start: 4;
}

.div5 {
    grid-row: span 3 / span 3;
    grid-column-start: 5;
    grid-row-start: 4;
}

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: auto;

        .div1,
        .div2,
        .div3,
        .div4,
        .div5 {
            grid-column: auto;
            grid-row: auto;
        }

        .div1 img {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
        margin-top: 2.5rem;

        .div1,
        .div2,
        .div3,
        .div4,
        .div5 {
            grid-column: auto;
            grid-row: auto;
        }

        .div1 img {
            width: 100%;
        }
    }
`;

//SECCION PROFUNDIDAD
const ProfundidadStyles = styled.section`
   margin-top: 4rem;
   width: 100%;
   background-color: ${props => props.theme.colors.colorBeige};
   padding: 2rem;
  border-radius: 1rem;

    @media (max-width: 768px) {
        padding: 1.25rem;
        border-radius: 0.75rem;
    }
`;

const ProfundidadP = styled.p`
    font-size: 5rem;
    color: ${props => props.theme.colors.colorGrisTexto};
    font-family: ${props => props.theme.fonts.titles};
    text-transform: uppercase;
    text-align: center;
    font-weight: 100;
    text-decoration: underline ${props => props.theme.colors.colorPrincipal} 4px;
    letter-spacing: 1;

    @media (max-width: 1024px) {
        font-size: 3.5rem;
    }

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`;
const ProfundidadFlex = styled.section`
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
    flex-direction: column;
    justify-content: center;`;
export { MainStyles, MainSectionFlex, MainImg, MainSection1, MainStylesP ,MainSection2, MainTendencia, ProfundidadP, ProfundidadStyles, ProfundidadFlex};