import styled from "styled-components";

export const Text = styled.h2`
    font-size: 2rem;
    padding-left: ${(props) => props.$padding || "0"};
    margin: 0 0;
`;
