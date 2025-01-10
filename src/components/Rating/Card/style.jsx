import styled from "styled-components";

export const ContainerCard = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
`;
export const Photo = styled.img`
    border: 4px solid #fff;
    border-radius: 50%;
    width: 25%;
    z-index: 1000;
`;
export const ContainerContent = styled.article`
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    height: 150px;
    
    margin-top: -12.5%;
    padding: 12.5% 2rem 1rem 2rem;
    width: 300px;
`;