//Components logos
import AdobeXD from "../components/logos/adobe-xd/adobe-xd";
import Bootstrap from "../components/logos/bootstrap/bootstrap";
import Css from "../components/logos/css/css-3";
import Figma from "../components/logos/figma/figma";
import Firebase from "../components/logos/firebase/firebase";
import Git from "../components/logos/git/git";
import Html5 from "../components/logos/html5/html5";
import Illustrator from "../components/logos/illustrator/illustrator";
import Jquery from "../components/logos/jquery/jquery";
import JS from "../components/logos/JS/JS";
import Mui from "../components/logos/material-ui/material-ui";
import Miro from "../components/logos/miro/miro";
import React from "../components/logos/react/react";
import Sass from "../components/logos/sass/sass";
import Photoshop from "../components/logos/photoshop/photoshop";
import Optimal from "../components/logos/optimal-workshop/optimal-workshop";
import Coderhouse from "../components/logos/coderhouse/coderhouse";

import Restaurantpe from "../components/logos/restaurant.pe/logo-restaurantpe";
import Bicicleters from "../components/logos/bicicleters/bicicleters";
import WkLogo from "../components/logos/wkLogo/wk-logo";

//Spanish

const NavBarOptions = [
  { title: "Acerca de mí", href: "sectionAboutUs", id: 1 },
  { title: "Trabajos", href: "works", id: 2 },
  { title: "Herramientas", href: "skills-area", id: 3 },
  { title: "Certificaciones", href: "courses-area", id: 4 },
];

const AboutMeText = [
  {
    paragraph:
      "Hace mas de 2 años me he reconvertido al mundo digital y me capacito para especializarme en el desarrollo front end y el diseño UX/UI. Me gusta diseñar sitios visualmente atractivos, simples y minimalistas, con énfasis en la experiencia de los usuarios y el código. Me considero una persona dedicada, con mucho compromiso en todo lo que hago, muy atento a los detalles y con ganas de ayudar a los demas. Me encanta la tecnología y como simplifica la vida de las personas, la música, los amigos, la familia y el kitesurf. Vivo en Galicia, España, rodeado entre el mar, las montañas y la buena comida!",
  },
];

const CardsText = [
  {
    title: "Bicicleters",
    image: <Bicicleters/>,
    paragraph:
      "E-commerce de bicicletas y productos relacionados al ciclismo. Posee login de usuarios e integración de pagos con PayPal",
    skills: "HTML5 - CSS -  Bootstrap 5 - API PayPal Sandbox - Javscript",
    linkGitHub: "https://github.com/sebastianbarcia/bicicleters",
    linkpage: "https://bicicleters.netlify.app/",
    id: 1,
  },
  {
    title: "WK welding",
    image: <WkLogo/>,
    paragraph:
      "Reediseño del sitio WK con E-commerce de soldadoras eléctricas. Integración con Firebase como base de datos.",
    skills: "ReactJS - SASS - MUI - Firebase",
    linkGitHub: "https://github.com/sebastianbarcia/wk-welding",
    linkpage: "https://wkwelding.netlify.app/",
    id: 2,
  },
  {
    title: "Restaurant.pe.mx",
    image: <Restaurantpe/>,
    paragraph:
      "Sitio web creado para dar a conocer el nuevo software para controlar la gestión de locales gastronómicos en Mexico.",
    skills: "HTML5 - SASS -  Bootstrap5 - Javascript",
    linkGitHub: "https://github.com/sebastianbarcia/restaurant.pe",
    linkpage: "https://restaurant.rowe.mx/",
    id: 3,
  },
];

const Courses = [
  {
    img: <Coderhouse />,
    nameLogo: "Photoshop e Illustrator",
    link: "https://api.coderhouse.com/ch-www-api//certifications/5f0cb011bfd5c30092aa52e0/download",
    id: 1,
  },
  {
    img: <Coderhouse />,
    nameLogo: "Diseño UX/UI",
    link: "https://api.coderhouse.com/ch-www-api//certifications/5fb2d8d262d2c400134b8aa0/download",
    id: 2,
  },
  {
    img: <Coderhouse />,
    nameLogo: "Desarrollo web",
    link: "https://api.coderhouse.com/ch-www-api//certifications/61ae81720342500047aa0e8e/download",
    id: 3,
  },
  {
    img: <Coderhouse />,
    nameLogo: "Javascript",
    link: "https://api.coderhouse.com/ch-www-api//certifications/620e4bf86c55be12c1a21e35/download",
    id: 4,
  },
  {
    img: <Coderhouse />,
    nameLogo: "React JS",
    link: "https://sebastianbarcia.github.io/portfolio/reactjs-certificado.png",
    id: 5,
  },
];
//English
const NavBarOptionsEN = [
  { title: "About me", href: "sectionAboutUs", id: 1 },
  { title: "Works", href: "works", id: 2 },
  { title: "Tools", href: "skills-area", id: 3 },
  { title: "Certifications", href: "courses-area", id: 4 },
];

const AboutMeTextEN = [
  {
    paragraph:
      "More than 2 years ago I converted to the digital world and trained myself to specialize in front end development and UX/UI design. I like to design visually appealing, simple and minimal sites with an emphasis on user experience and code. I consider myself a dedicated person, with a lot of commitment in everything I do, very attentive to details and eager to help others. I love technology and how it simplifies people's lives, music, friends, family and kitesurfing. I live in Galicia, Spain, surrounded by the sea, the mountains and good food!",
  },
];

const CardsTextEN = [
  {
    title: "Bicicleters",
    image: <Bicicleters/>,
    paragraph:
      "E-commerce of bicycles and products related to cycling. It has user login and payment integration with PayPal",
    skills: "HTML5 - CSS -  Bootstrap 5 - API PayPal Sandbox - Javscript",
    linkGitHub: "https://github.com/sebastianbarcia/bicicleters",
    linkpage: "https://bicicleters.netlify.app/",
    id: 1,
  },
  {
    title: "WK welding",
    image: <WkLogo/>,
    paragraph:
      "Redesign of the WK site with E-commerce of electric welders. Integration with Firebase as a database",
    skills: "ReactJS - SASS - MUI - Firebase",
    linkGitHub: "https://github.com/sebastianbarcia/wk-welding",
    linkpage: "https://wkwelding.netlify.app/",
    id: 2,
  },
  {
    title: "Restaurant.pe.mx",
    image: <Restaurantpe/>,
    paragraph:
      "Website created to publicize the new software to control the management of gastronomic establishments in Mexico",
    skills: "HTML5 - SASS -  Bootstrap5 - Javascript",
    linkGitHub: "https://github.com/sebastianbarcia/restaurant.pe",
    linkpage: "https://restaurant.rowe.mx/",
    id: 3,
  },
];

const CoursesEN = [
  {
    img: <Coderhouse />,
    nameLogo: "Photoshop & Illustrator",
    link: "https://api.coderhouse.com/ch-www-api//certifications/5f0cb011bfd5c30092aa52e0/download",
    id: 1,
  },
  {
    img: <Coderhouse />,
    nameLogo: "Design UX/UI",
    link: "https://api.coderhouse.com/ch-www-api//certifications/5fb2d8d262d2c400134b8aa0/download",
    id: 2,
  },
  {
    img: <Coderhouse />,
    nameLogo: "Web development",
    link: "https://api.coderhouse.com/ch-www-api//certifications/61ae81720342500047aa0e8e/download",
    id: 3,
  },
  {
    img: <Coderhouse />,
    nameLogo: "Javascript",
    link: "https://api.coderhouse.com/ch-www-api//certifications/620e4bf86c55be12c1a21e35/download",
    id: 4,
  },
  {
    img: <Coderhouse />,
    nameLogo: "React JS",
    link: "https://api.coderhouse.com/ch-www-api//certifications/62cde42389e7090019566454/download",
    id: 5,
  },
];

//NO translate
const SkillsLogos = [
  { img: <Html5 />, nameLogo: "HTML5", id: 1 },
  { img: <Bootstrap />, nameLogo: "Bootstrap", id: 2 },
  { img: <JS />, nameLogo: "Javascript", id: 3 },
  { img: <Css />, nameLogo: "CSS3", id: 4 },
  { img: <Git />, nameLogo: "Git", id: 5 },
  { img: <React />, nameLogo: "ReactJs", id: 6 },
  { img: <Mui />, nameLogo: "Mui", id: 7 },
  { img: <Jquery />, nameLogo: "Jquery", id: 8 },
  { img: <AdobeXD />, nameLogo: "Adobe XD", id: 9 },
  { img: <Figma />, nameLogo: "Figma", id: 10 },
  { img: <Miro />, nameLogo: "Miro", id: 11 },
  { img: <Firebase />, nameLogo: "Firebase", id: 12 },
  { img: <Sass />, nameLogo: "Sass", id: 13 },
  { img: <Illustrator />, nameLogo: "Illustrator", id: 14 },
  { img: <Photoshop />, nameLogo: "Photoshop", id: 15 },
  { img: <Optimal />, nameLogo: "Optimal Workshop", id: 16 },
];

export default NavBarOptions;
export {
  AboutMeText,
  CardsText,
  SkillsLogos,
  Courses,
  CoursesEN,
  NavBarOptionsEN,
  CardsTextEN,
  AboutMeTextEN,
};
