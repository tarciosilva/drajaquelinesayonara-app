import * as S from "./style";
import { Title } from "./../Title";
import braces from "./img/braces.webp";
import cleaning from "./img/cleaning.webp";
import prostesis from "./img/prostesis.webp";
import restoration from "./img/restoration.webp";
import surgery from "./img/surgery.webp";
import whitening from "./img/whitening.webp";
import veneers from "./img/veneers.webp";
import { Card } from "./Card";
import { v4 as uuidv4 } from "uuid";

export const Care = () => {
  const care = [
    {
      name: "ortodontia",
      icon: braces,
      key: uuidv4()
    },
    {
      name: "prótese",
      icon: prostesis,
      key: uuidv4()
    },
    {
      name: "restauração",
      icon: restoration,
      key: uuidv4()
    },
    {
      name: "restauração",
      icon: restoration,
      key: uuidv4()
    },
    {
      name: "facetas",
      icon: veneers,
      key: uuidv4()
    },
    {
      name: "clareamento",
      icon: whitening,
      key: uuidv4()
    },
    {
      name: "limpeza",
      icon: cleaning,
      key: uuidv4()
    },
    {
      name: "extração",
      icon: surgery,
      key: uuidv4()
    }
  ];

  return (
    <>
      <S.Wrapper>
        <Title padding="2rem">Tratamentos</Title>
        <S.ContainerCards className="container text-center">
          <div className="row p-2">
            {care.map((care) => (
              <div className="col-4 p-3" key={care.key}>
                <Card icon={care.icon} text={care.name} />
              </div>
            ))}
          </div>
        </S.ContainerCards>
      </S.Wrapper>
    </>
  );
};
