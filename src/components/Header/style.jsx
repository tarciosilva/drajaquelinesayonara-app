import styled from "styled-components";
import backGroundImage from "./img/header_back.webp";

export const Wrapper = styled.header`
  background: center / cover no-repeat url(${backGroundImage});
  justify-content: center;
  display: flex;
  height: 500px;
  padding: 5px;
  width: 100%;
`;
export const ContainerTop = styled.div`
  background-color: var(--golden-pink-light);
  display: flex;
  justify-items: center;
  justify-content: space-between;
  padding: 0.75rem 0 2rem 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  background-color: var(--golden-pink-light);
  opacity: 0.9;
`;
export const Logo = styled.img`
  aspect-ratio: auto;
  width: 50%;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15% auto auto auto;
  padding: 0.5rem 0.5rem 0 0;
  position: absolute;
  width: 100%;
`;
export const Picture = styled.img``;
export const ContainerLeftContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
  width: 40%;
`;
export const Symbol = styled.img`
  margin: 0 0 10px 0;
  height: 150px;
  width: 70px;
`;
export const Text = styled.p`
  color: var(--golden-pink-dark);
  font-family: "JuliusSansOne", sans-serif;
  font-size: 1.7rem;
  padding: 0.5rem;
  text-align: center;
`;
