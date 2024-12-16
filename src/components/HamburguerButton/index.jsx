import * as S from "./style";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isMenuActiveState } from "../../state/atom";

export const HamburguerButton = () => {
  const isActive = useRecoilValue(isMenuActiveState);
  const setIsActive = useSetRecoilState(isMenuActiveState);

  const onHaburgerClick = () => {
    setIsActive(() => !isActive);
  };

  return (
    <>
      <S.Button
        className={`hamburger hamburger--slider ${isActive ? "" : "is-active"}`}
        type="button"
        onClick={onHaburgerClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </S.Button>
    </>
  );
};
