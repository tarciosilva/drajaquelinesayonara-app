import { Carousel } from "../Carousel";
import photo1 from "./img/1.png";
import photo2 from "./img/2.png";
import photo3 from "./img/3.png";
import * as S from "./style";
import { Title } from "../Title";

export const Gallery = () => {
  return (
    <>
      <S.Wrapper>
        <Title padding="2rem">
            Galeria de resultados
        </Title>
        <Carousel photo1={photo1} photo2={photo2} photo3={photo3} />
      </S.Wrapper>
    </>
  );
};
