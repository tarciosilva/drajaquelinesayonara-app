import * as S from "./style";
import { MenuHeader } from "../MenuHeader";
import { Menu } from "../Menu";
import { useRecoilValue } from "recoil";
import { isMenuActiveState } from "../../../state/atom";

export const Offcanva = () => {
  const isActive = useRecoilValue(isMenuActiveState);
  return (
    <>
      <S.OffCanva $isActive={isActive}>
        <MenuHeader />
        <Menu />
      </S.OffCanva>
    </>
  );
};
