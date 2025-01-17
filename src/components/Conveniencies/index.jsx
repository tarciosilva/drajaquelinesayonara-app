import * as S from "./style";
import { Title } from "../Title";
import confortable from "./img/confortable.webp";
import experts from "./img/experts.webp";
import humanized_care from "./img/humanized_care.webp";
import { v4 as uuidv4 } from "uuid";

export const Conveniencies = () => {
  const conveniencies = [
    {
      icon: confortable,
      text: "ambiente confortável",
      key: uuidv4()
    },
    {
      icon: experts,
      text: "profissionais capacitados",
      key: uuidv4()
    },
    {
      icon: humanized_care,
      text: "atendimento humanizado",
      key: uuidv4()
    }
  ];
  return (
    <>
      <S.Wrapper id="conveniencies">
        <Title padding="2rem">O que oferecemos</Title>
        <S.ContainerConveniencies>
          {conveniencies.map((convenience) => (
            <S.Conveniencie key={convenience.key}>
              <img src={convenience.icon} />
              <p>{convenience.text}</p>
            </S.Conveniencie>
          ))}
        </S.ContainerConveniencies>
      </S.Wrapper>
    </>
  );
};
