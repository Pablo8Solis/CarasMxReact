import styled from 'styled-components';

const TestimonialsStyles = styled.section`
    margin-top: 4rem;
    width: 100%;
    background-color: ${props => props.theme.colors.colorFondoBlanco};
    padding: 2.5rem 10rem;
    border-radius: 1rem;

    @media (max-width: 1024px) {
        padding: 2.5rem 4rem;
    }

    @media (max-width: 768px) {
        padding: 2rem 1rem;
        border-radius: 0.75rem;
    }
`;

const TestimonialsTitle = styled.p`
    font-size: 3rem;
    color: ${props => props.theme.colors.colorGrisTexto};
    font-family: ${props => props.theme.fonts.titles};
    text-transform: uppercase;
    text-align: center;
    font-weight: 200;
    text-decoration: underline ${props => props.theme.colors.colorPrincipal} 4px;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const TestimonialsGrid = styled.section`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;

const TestimonialCard = styled.article`
    background-color: ${props => props.theme.colors.colorBlanco};
    padding: 1.5rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
        padding: 1.25rem;
    }
`;

const Avatar = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
`;

const Quote = styled.p`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.colorGrisTexto};
    font-family: ${props => props.theme.fonts.base};
    font-weight: 200;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const Author = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    font-family: ${props => props.theme.fonts.base};
    color: ${props => props.theme.colors.colorBlack};

    @media (max-width: 768px) {
        font-size: 1.15rem;
    }
`;

const Role = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.colors.colorGrisTexto};
    font-weight: 200;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
`;

export { TestimonialsStyles, TestimonialsTitle, TestimonialsGrid, TestimonialCard, Avatar, Quote, Author, Role };
