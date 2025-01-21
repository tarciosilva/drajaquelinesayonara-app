import * as S from "./style";

export const Title = ({ children, top, right, botton, left }) => {
  return (
    <>
      <S.Text $top={top} $right={right} $botton={botton} $left={left}>
        {children}
      </S.Text>
    </>
  );
};
