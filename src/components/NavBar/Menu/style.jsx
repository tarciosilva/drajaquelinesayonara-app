import styled from "styled-components";
import { Link } from "react-router";

export const Wrapper = styled.nav`
  color: var(--golden-pink-light);
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
`;
export const NavLink = styled(Link)`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1.75rem;
  gap: 1rem;
  margin: 1rem 0;

  &:hover {
    color: var(--golden-pink-medium);
  }
  &:focus {
    outline: 2px solid var(--golden-pink-light);
    border-radius: 5px;
  }
`;
export const NavIcon = styled.img`
    &:hover {
        background-color: var(--golden-pink-medium);
    }
`;