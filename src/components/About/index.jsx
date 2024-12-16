import * as S from "./style";
import aboutPhoto from "./img/photos.webp";

export const About = () => {

  return (
    <>
      <S.Wrapper>
        <S.ContainerText>
          <p>
            Sou uma profissional apaixonada pela odontologia e comprometida em
            transformar sorrisos e elevar a autoestima dos meus pacientes! Para
            mim, a odontologia vai além de tratar dentes - é uma oportunidade de
            fazer a diferença na vida das pessoas, ajudando-as a alcançar um
            sorriso saudável e lindo que irradie confiança e felicidade. .
          </p>
        </S.ContainerText>
        <S.Photo>
          <img src={aboutPhoto} alt="" width="100%" />
        </S.Photo>
      </S.Wrapper>
    </>
  );
};
