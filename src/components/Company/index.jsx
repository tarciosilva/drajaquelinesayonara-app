import * as S from "./style";
import { Carousel } from "../Carousel";
import { Title } from "./../Title";
import photo1 from "./img/1.png";
import photo2 from "./img/2.png";
import photo3 from "./img/3.png";


export const Company = () => {
  return (
    <>
      <S.Wrapper>
        <S.ContainerTitle>
          <Title>Nosso Espaço</Title>
        </S.ContainerTitle>
        <Carousel photo1={photo1} photo2={photo2} photo3={photo3}/>
      </S.Wrapper>
    </>
  );
};
