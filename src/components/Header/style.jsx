import styled from "styled-components";
import backGroundImage from "./img/header_back.webp";

export const Wrapper = styled.header`
  background: center / cover no-repeat url(${backGroundImage});
  justify-content: center;
  display: flex;
  height: 100vh;
  padding: 5px;
  width: 100%;
`;
export const ContainerTop = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-between;
  position: absolute;
`;
export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--golden-pink-light);
  opacity: .9;
`;
export const Logo = styled.img`
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
export const Picture = styled.img`
    width: 55%;
`;
export const ContainerLeftContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 45%;
`;
export const Symbol = styled.img`
    margin: 20px 0 10px 0;
    height: 200px;
    width: 100px;
`;
export const Text = styled.p`
    color: var(--golden-pink-dark);
    font-family: "JuliusSansOne", sans-serif;
    font-size: 2rem;
    text-align: center;
`;