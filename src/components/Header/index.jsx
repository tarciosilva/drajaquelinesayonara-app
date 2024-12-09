import * as S from "./style";
import logo from "../../assets/logo_js_2025.webp";
import photo from "./img/header_picture.webp";
import symbol from "../../assets/logo_symbol.webp";
import { HamburguerButton } from "../HamburguerButton";
import { Offcanva } from "../NavBar/OffCanva";

export const Header = () => {
  return (
    <>
      <S.Wrapper>
        <S.OverLay />
        <Offcanva />
        <S.ContainerTop>
          <S.Logo src={logo} />
          <HamburguerButton />
        </S.ContainerTop>
        <S.Container>
          <S.ContainerLeftContent>
            <S.Symbol src={symbol} />
            <S.Text>
              Nossa missão é promover saúde e autoestima para nossos pacientes.
            </S.Text>
          </S.ContainerLeftContent>
          <S.Picture src={photo} />
        </S.Container>
      </S.Wrapper>
    </>
  );
};
