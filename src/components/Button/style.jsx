import styled from "styled-components";
import { Link } from "react-router";

export const Button = styled(Link)`
  all: initial;
  background-color: var(--golden-pink-light);
  border-radius: 5px;
  box-shadow: 1px 1px 5px var(--golden-pink-medium);
  cursor: pointer;
  padding: 0.85rem;
  transition: background .5s ease-in-out;
 
  &:focus {
    background-color: var(--golden-pink-medium);
    box-shadow: 1px 2px 5px var(--golden-pink-light);
  }
  `;
export const ButtonText = styled.p`
  color: var(--golden-pink-dark);
  font-size: 1rem;
  margin: auto 0;
  padding: auto 0;
  text-align: center;
`;