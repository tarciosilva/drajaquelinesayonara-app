import aboutIcon from "./icons/ABOUT.webp";
import homeIcon from "./icons/HOME.webp";
import caretIcon from "./icons/CARE.webp";
import confotabletIcon from "./icons/CONFORTABLE.webp";
import locationIcon from "./icons/LOCATION.webp";
import placeIcon from "./icons/PLACE.webp";
import ratingIcon from "./icons/RATING.webp";
import * as S from "./style";

const navItens = [
  {
    text: "INÍCIO",
    icon: homeIcon,
    link: ""
  },
  {
    text: "SOBRE",
    icon: aboutIcon,
    link: ""
  },
  {
    text: "NOSSA CLÍNICA",
    icon: placeIcon,
    link: ""
  },
  {
    text: "TRATAMENTOS",
    icon: caretIcon,
    link: ""
  },
  {
    text: "COMODIDADES",
    icon: confotabletIcon,
    link: ""
  },
  {
    text: "AVALIAÇÕES",
    icon: ratingIcon,
    link: ""
  },
  {
    text: "LOCALIZAÇÃO",
    icon: locationIcon,
    link: ""
  }
];

export const Menu = () => {
  return (
    <>
      <S.Wrapper>
        <ul>
          {navItens.map((item) => (
            <S.ContainerNavItem key={item.icon}>
              <img src={item.icon} alt={item.text} />
              <a href="#"><p>{item.text}</p></a>
            </S.ContainerNavItem>
          ))}
        </ul>
      </S.Wrapper>
    </>
  );
};
