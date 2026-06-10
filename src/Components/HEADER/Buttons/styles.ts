import styled from 'styled-components';

const ButtonsStyles = styled.button`
    background-color: ${props => props.theme.colors.colorPrincipal};
    color: ${props => props.theme.colors.colorBlanco};
    border: none;
    padding: 0.8rem 1.6rem;
    font-family: monserrat, sans-serif;
    font-size: 1.3rem;
    font-weight: 200;
    transition: background-color 0.3s ease;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.colorGrisTexto}cc; /* Agrega transparencia al color de fondo */
        transition: background-color 0.3s ease;
    }
`;

export {ButtonsStyles};