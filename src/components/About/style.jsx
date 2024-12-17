import styled from "styled-components";
import symbol from "./img/symbol_about_background.webp";

export const Wrapper = styled.section`
  align-items: center;
  background: center / cover no-repeat url(${symbol});
  border-radius: 20px 20px 0 0;
  border-top: 2px solid var(--golden-pink-dark);
  display: flex;
  justify-content: center;
  position: absolute;
  
  margin-top: -10px;


  width: 100%;
`;
export const ContainerText = styled.article`
  background-color: #fff2f5c6;
  color: var(--golden-pink-dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.15rem;
  height: 260px;
  gap: 1rem;
  padding-right: 1rem;
  text-align: justify;
  width: 50%;
`;

export const Photo = styled.div`
  margin: 0 0;
  padding: 0 0;
  width: 40%;
`;
