import styled from "styled-components";

export const Wrapper = styled.header`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    height: 225px;
`;
export const BackGraound = styled.div`
    align-items: center;
    background-color: var(--golden-pink-light);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${(props) => props.$height};
    width: ${(props) => props.$width};
`;
export const Symbol = styled.img`
    width: 40px;
`;
export const ContainerSocial = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
