import styled from "styled-components";

export const Wrapper = styled.section`
  align-items: center;
  background-color: var(--golden-pink-light);
  border-radius: 20px 20px 0 0;
  border-top: 1px solid var(--golden-pink-dark);
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: -10px;

  width: 100%;
`;
export const ContainerText = styled.article`
  color: var(--golden-pink-dark);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px;
  width: 55%;
`;

export const Photo = styled.div`
  margin: 0 0;
  padding: 0 0;
  width: 40%;
`;
