import * as S from "./style";

export const HamburguerButton = () => {
 
  return (
    <>
      <S.Button
        className="hamburger hamburger--slider"
        type="button"
        
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </S.Button>
    </>
  );
};
