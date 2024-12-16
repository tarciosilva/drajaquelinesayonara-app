import * as S from "./style";
import symbol from "../../../assets/logo_symbol.webp";
import { socialLinks } from "../../../common";
import { Link } from "react-router";

export const MenuHeader = () => {
  return (
    <>
      <S.Wrapper>
        <S.BackGraound $width="100px" $height="100px">
          <S.Symbol src={symbol} />
        </S.BackGraound>
        <S.ContainerSocial>
          {socialLinks.map((socialLinks) => (
            <S.BackGraound key={socialLinks.key} $width="50px" $height="50px">
              <Link to={socialLinks}>
                <img key={socialLinks.key} src={socialLinks.icon} />
              </Link>
            </S.BackGraound>
          ))}
        </S.ContainerSocial>
      </S.Wrapper>
    </>
  );
};
