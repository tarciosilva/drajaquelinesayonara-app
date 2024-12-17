import * as S from "./style";
import { Carousel } from "./Carousel";
import { Title } from "./../Title";

export const Company = () => {
  return (
    <>
      <S.Wrapper>
        <S.ContainerTitle>
          <Title>Nosso Espaço</Title>
        </S.ContainerTitle>
        <Carousel />
      </S.Wrapper>
    </>
  );
};
