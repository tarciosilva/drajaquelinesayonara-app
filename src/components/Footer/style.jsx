import styled from "styled-components";

export const Wrappper = styled.footer`
    align-items: center;
    background-color: var(--golden-pink-light);
    box-shadow: 0px -1px 10px var(--golden-pink-medium);
    display: flex;
    flex-direction: column;
    padding: 2rem;
    position: absolute;
    
    text-align: center;
    width: 100%;
`;
export const SocialContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1rem 0;
    width: 100%;
`;
export const Text = styled.p`
    font-size: 1.5rem;
    margin: 1rem 0;
`;
export const LogoContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;
export const Logo = styled.img`
    width: 90%;
    margin: 1rem 0;
`;