import * as S from "./style";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isMenuActiveState } from "../../../state/atom";
import { navItens } from "../../../common";

export const Menu = () => {
  const isActive = useRecoilValue(isMenuActiveState);
  const setIsActive = useSetRecoilState(isMenuActiveState);

  const onLinkClick = () => {
    setIsActive(() => !isActive);
  };

  return (
    <>
      <S.Wrapper>
        <ul>
          {navItens.map((item) => (
            <S.NavLink key={item.icon} onClick={onLinkClick}>
              <S.NavIcon
                src={item.icon}
                alt={`Link para ${item.text}`}
                width="24px"
              />
              <S.NavText>{item.text}</S.NavText>
            </S.NavLink>
          ))}
        </ul>
      </S.Wrapper>
    </>
  );
};
