import styled from "styled-components";

export const Wrapper = styled.section`
  align-items: center;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  border-top: 1px solid var(--golden-pink-dark);
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: -10px;
  width: 100%;
  z-index: 4;
`;
export const ContainerText = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.25rem;
  height: 260px;
  gap: 1rem;
  padding-right: 1rem;
  width: 50%;
`;

export const Photo = styled.div`
  margin: 0 0;
  padding: 0 0;
  width: 40%;
`;
