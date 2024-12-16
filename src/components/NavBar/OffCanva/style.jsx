import styled from "styled-components";

export const OffCanva = styled.aside`
  background-color: var(--golden-pink-dark);
  bottom: 0;
  left: ${(props) => props.$isActive ? "-310px" : "0"};
  overflow-y: auto; /*rolagem autmoática */
  padding: 0 15px;
  position: fixed;
  top: 0;
  transition: 0.5s ease-out;
  width: 310px;
  z-index: 997;
`;
