import styled from "styled-components";

export const Text = styled.h2`
  font-size: 2rem;
  padding: ${(props) => props.$top || "0"} ${(props) => props.$right || "0"}
    ${(props) => props.$botton || "0"} ${(props) => props.$left || "0"};
  margin: 0 0;
`;
