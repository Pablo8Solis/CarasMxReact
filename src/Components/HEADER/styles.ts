import styled from 'styled-components';


const HeaderStyles = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    //gap: 2.4rem;
    //padding: 2rem 3.2rem;
    //background-color: ${props => props.theme.colors.colorFondoBlanco};
    color: ${props => props.theme.colors.colorBlack};

    @media (max-width: 768px) {
        width: 100%;
    }

`;

const SectionImg = styled.section`
    background-color: ${props => props.theme.colors.colorBlanco};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;

    @media (max-width: 768px) {
        padding: 1.2rem 0;
    }
`;

const Img = styled.img`
    width: 150px;

    @media (max-width: 768px) {
        width: 120px;
    }
`;

const SectionNav = styled.nav`
    width: 97%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 7px 16px 1px rgba(0,0,0,0.21);
    border-radius: 10px;
    background-color: ${props => props.theme.colors.colorPrincipal};
    ul {
        display: flex;
        gap: 2.4rem;
        list-style: none;
        gap:5rem;

        @media (max-width: 768px) {
            width: 100%;
            gap: 1.25rem;
            padding: 0 1rem;
            overflow-x: auto;
            justify-content: flex-start;
            scrollbar-width: none;
        }
    }

    a {
        color: ${props => props.theme.colors.colorBlanco};
        font-family: monserrat, sans-serif;
        font-size: 1.3rem;
        font-weight: 400;
        transition: color 0.3s ease;
        text-transform: uppercase;
        transition: all 0.3s ease;
        &:hover {
            //color: ${props => props.theme.colors.colorFooter};
            text-decoration: underline ${props => props.theme.colors.colorBlanco} 1px;
            transition: all 0.3s ease;

        }

        @media (max-width: 768px) {
            font-size: 1rem;
            white-space: nowrap;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0;
        height: auto;
        padding: 0.75rem 0;
    }
`;

export { HeaderStyles, Img, SectionNav, SectionImg };