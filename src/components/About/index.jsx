import * as S from "./style";
import aboutPhoto from "./img/photos.webp";
import { Button } from "./../Button";

export const About = () => {
  return (
    <>
      <S.Wrapper>
        <S.ContainerText>
          <h1>A Profissional</h1>
          <p>
            Sou uma profissional apaixonada pela odontologia e comprometida em
            transformar sorrisos e elevar a autoestima dos meus pacientes!
          </p>
          <Button>
            Clique para saber mais
          </Button>
        </S.ContainerText>
        <S.Photo>
          <img src={aboutPhoto} alt="" width="100%" />
        </S.Photo>
      </S.Wrapper>
    </>
  );
};
