import * as S from "./style";
import logoDefault from "../../assets/logo_horizontal.webp";
import photoMobile from "./img/header_picture_mobile.webp";
import symbol from "../../assets/logo_symbol.webp";
import { HamburguerButton } from "../HamburguerButton";
import { Offcanva } from "../NavBar/OffCanva";
import { socialLinks } from "../../common";
import { Button } from "./../Button";

export const Header = () => {
  return (
    <>
      <S.Wrapper id="home">
        <S.OverLay />
        <Offcanva />
        <S.ContainerTop>
          <S.Logo src={logoDefault} alt="newest logo" />
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
          <div className="container w-75 m-0 p-0">
            <S.Picture
              src={photoMobile}
              alt="Dra Jaqueline Sayonara s photo"
              
            />
          </div>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
