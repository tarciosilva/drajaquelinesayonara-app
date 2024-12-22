import styled from "styled-components";

export const Text = styled.h2`
    color: var(--golden-pink-dark);
    font-family: "JuliusSansOne", sans-serif;
    font-size: 2rem;
    padding-left: ${(props) => props.$padding || "0"};
`;
