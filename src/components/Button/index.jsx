import * as S from "./style";

export const Button = ({ link, children }) => {
  return (
    <>
      <S.Button to={link}>
        <S.ButtonText>{children}</S.ButtonText>
      </S.Button>
    </>
  );
};
