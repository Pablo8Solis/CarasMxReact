import styled from 'styled-components';

const ButtonsStyles = styled.button`
    background-color: ${props => props.theme.colors.colorPrincipal};
    color: ${props => props.theme.colors.colorBlanco};
    border: none;
    border-radius: 4px;
    padding: 1rem 2.2rem;
    font-family: monserrat, sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 2px 6px rgba(208, 58, 43, 0.2);

    &:hover {
        background-color: ${props => props.theme.colors.colorPrincipal};
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(208, 58, 43, 0.45);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(208, 58, 43, 0.2);
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: 3px solid ${props => props.theme.colors.colorBlack};
        outline-offset: 3px;
    }
`;

export {ButtonsStyles};