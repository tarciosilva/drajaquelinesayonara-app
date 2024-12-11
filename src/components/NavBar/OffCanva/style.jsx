import styled from "styled-components";

export const OffCanva = styled.aside`
  background-color: var(--golden-pink-dark);
  bottom: 0;
  left: 0;
  overflow-y: auto; /*rolagem autmoática */
  padding: 0 15px;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  width: 310px;
  z-index: 997;
`;
