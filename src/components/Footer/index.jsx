import * as S from "./style";
import logoJS from "../../assets/logo_js_2025.webp";
import logoTS from "../../assets/logo_ts_2025.webp";
import { socialLinks } from "../../common";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <>
      <S.Wrappper>
        <S.SocialContainer>
          {socialLinks.map((social) => (
            <Link to={social.link} key={social.key}>
              <img src={social.icon} alt={`Link to ${social.link}`} />
            </Link>
          ))}
        </S.SocialContainer>
        <S.Text>r. lourival lacerda, 06, sl 207, centro, cep:58340000, sapé-pb</S.Text>
        <S.LogoContainer>
          <S.Logo src={logoJS} alt="Logo do consultório Dra Jaqueline Sayonara" />
          <S.Logo src={logoTS} alt="Logo do desenvolvedor tsilva.dev" />
        </S.LogoContainer>
      </S.Wrappper>
    </>
  );
};
