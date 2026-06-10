import styled from "styled-components";

const ProfundidadStyles2 = styled.section`
   display: flex;
   gap: 1rem;
   width: 100%;

   @media (max-width: 768px) {
       flex-direction: column;
   }
`;
const ProfundidadImg = styled.img`
    width: 100%;
    max-width: 100px;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const SectionInfo = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
        font-size: 1.3rem;
        color: ${props => props.theme.colors.colorPrincipal};
        font-family: monserrat, sans-serif;
        font-weight: bold;
        text-transform: uppercase;
    }
    h3 {
        font-size: 2rem;
        color: ${props => props.theme.colors.colorGrisTexto};
        font-family: ${props => props.theme.fonts.titles};
    }
    p:last-child {
        font-size: 1.2rem;
        color: ${props => props.theme.colors.colorGrisTexto};
        font-family: monserrat, sans-serif;
        font-weight: 100;
    }

    @media (max-width: 768px) {
        gap: 0.75rem;

        p {
            font-size: 1.1rem;
        }

        h3 {
            font-size: 1.6rem;
        }

        p:last-child {
            font-size: 1.05rem;
        }
    }
`;

export {ProfundidadStyles2, ProfundidadImg, SectionInfo};