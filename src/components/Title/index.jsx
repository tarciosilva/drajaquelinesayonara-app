import * as S from "./style";

export const Title = ({ children, padding }) => {
  return (
    <>
      <S.Text $padding={padding} >{children}</S.Text>
    </>
  );
};
