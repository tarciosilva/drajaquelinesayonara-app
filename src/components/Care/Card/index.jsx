import * as S from "./style";

export const Card = ({ icon, text }) => {
  return (
    <>
      <S.Wrapper>
        <img src={icon} />
        <S.CardText>{text}</S.CardText>
      </S.Wrapper>
    </>
  );
};
