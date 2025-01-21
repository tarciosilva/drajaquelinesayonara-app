import { Carousel } from "../Carousel";
import photo1 from "./img/1.png";
import photo2 from "./img/2.png";
import photo3 from "./img/3.png";
import * as S from "./style";
import { Title } from "../Title";
import { v4 as uuidv4 } from "uuid";

export const Gallery = () => {
  const id = uuidv4();
  const cards = [
    {
      key: uuidv4(),
      photo: photo1,
      active: "active",
      title: "",
      alt: "",
      description: ""
    },
    {
      key: uuidv4(),
      photo: photo2,
      active: "",
      title: "",
      alt: "",
      description: ""
    },
    {
      key: uuidv4(),
      photo: photo3,
      active: "",
      title: "",
      alt: "",
      description: ""
    }
  ];
  return (
    <>
      <S.Wrapper>
        <Title left="2rem" botton="1rem">Galeria de resultados</Title>
        <Carousel id={id} elements={cards} />
      </S.Wrapper>
    </>
  );
};
