import * as S from "./style";
import symbol from "../../../assets/logo_symbol.webp";
import facebook from "../../../assets/icons_social/facebook.webp";
import instagram from "../../../assets/icons_social/instagram.webp";
import whatsapp from "../../../assets/icons_social/whatsapp.webp";

export const MenuHeader = () => {
  const social = [
    {
      icon: instagram,
      link: "https://www.instagram.com/drajaquelinesayonara/?igsh=MTBrMXM3bHBhZm5hdg%3D%3D",
      key: 1
    },
    {
      icon: facebook,
      link: "https://www.facebook.com/drajaquelinesayonara?mibextid=LQQJ4d",
      key: 2
    },
    {
      icon: whatsapp,
      link: "https://wa.me/+5583994058749/?text=Gostaria%20de%20agendar%20uma%20consulta",
      key: 3
    }
  ];

  return (
    <>
      <S.Wrapper>
        <S.BackGraound
          $width="100px"
          $height="100px"
        >
          <S.Symbol src={symbol} />
        </S.BackGraound>
        <S.ContainerSocial>
          {social.map((social) => (
            <S.BackGraound
              key={social.key}
              $width="50px"
              $height="50px"
            >
              <a href={social.link}>
                <img key={social.key} src={social.icon} />
              </a>
            </S.BackGraound>
          ))}
        </S.ContainerSocial>
      </S.Wrapper>
    </>
  );
};
