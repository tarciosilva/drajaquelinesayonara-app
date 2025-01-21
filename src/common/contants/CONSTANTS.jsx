import aboutIcon from "../../components/NavBar/Menu/icons/ABOUT.webp";
import homeIcon from "../../components/NavBar/Menu/icons/HOME.webp";
import caretIcon from "../../components/NavBar/Menu/icons/CARE.webp";
import confotabletIcon from "../../components/NavBar/Menu/icons/CONFORTABLE.webp";
import locationIcon from "../../components/NavBar/Menu/icons/LOCATION.webp";
import placeIcon from "../../components/NavBar/Menu/icons/PLACE.webp";
import ratingIcon from "../../components/NavBar/Menu/icons/RATING.webp";
import facebook from "../../assets/icons_social/facebook.webp";
import instagram from "../../assets/icons_social/instagram.webp";
import whatsapp from "../../assets/icons_social/whatsapp.webp";

export const navItens = [
  {
    text: "INÍCIO",
    icon: homeIcon,
    link: "#home"
  },
  {
    text: "SOBRE",
    icon: aboutIcon,
    link: "#about"
  },
  {
    text: "NOSSA CLÍNICA",
    icon: placeIcon,
    link: "#company"
  },
  {
    text: "TRATAMENTOS",
    icon: caretIcon,
    link: "#care"
  },
  {
    text: "COMODIDADES",
    icon: confotabletIcon,
    link: "#conveniencies"
  },
  {
    text: "LOCALIZAÇÃO",
    icon: locationIcon,
    link: "#map"
  },
  {
    text: "AVALIAÇÕES",
    icon: ratingIcon,
    link: "#rating"
  }
];
export const socialLinks = [
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
