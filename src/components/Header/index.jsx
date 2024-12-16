import * as S from "./style";
import logo from "../../assets/logo_js_2025.webp";

import photoMobile from "./img/header_picture_mobile.webp";
import symbol from "../../assets/logo_symbol.webp";
import { HamburguerButton } from "../HamburguerButton";
import { Offcanva } from "../NavBar/OffCanva";
import { socialLinks } from "../../common";
import { Button } from "./../Button";

export const Header = () => {
  return (
    <>
      <S.Wrapper>
        <S.OverLay />
        <Offcanva />
        <S.ContainerTop>
          <S.Logo src={logo} alt="Brand logo" />
          <HamburguerButton />
        </S.ContainerTop>
        <S.Container>
          <S.ContainerLeftContent>
            <S.Symbol src={symbol} alt="Logo Symbol" />
            <S.Text>
              Nossa missão é promover saúde e autoestima para nossos pacientes.
            </S.Text>
            <Button link={socialLinks[2].link}>Agende uma consulta</Button>
          </S.ContainerLeftContent>
          <S.Picture
            src={photoMobile}
            alt="Dra Jaqueline Sayonara s photo"
            width="60%"
          />
        </S.Container>
      </S.Wrapper>
    </>
  );
};
