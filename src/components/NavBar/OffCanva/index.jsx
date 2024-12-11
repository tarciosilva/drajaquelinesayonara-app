import * as S from "./style";
import { MenuHeader } from "../MenuHeader";
import { Menu } from "../Menu";

export const Offcanva = () => {
 


  return (
    <>
      <S.OffCanva className="off-canva">
        <MenuHeader />
        <Menu />
      </S.OffCanva>
    </>
  );
};
