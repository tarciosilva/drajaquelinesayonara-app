import * as S from "./style";
import { Title } from "../Title";

export const Map = () => {
  return (
    <S.Wrapper>
      <Title padding={"2rem"}>Localização</Title>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2688094869527!2d-35.234407825001874!3d-7.094808892908339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac590010a76c1b%3A0x902c86499af4513!2sConsult%C3%B3rio%20dra%20Jaqueline%20Sayonara!5e0!3m2!1spt-BR!2sbr!4v1737057905079!5m2!1spt-BR!2sbr"
        width="100%"
        height="400px"
        style={{ border: 0, marginTop: 1 + "rem" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </S.Wrapper>
  );
};
