import { createContext, useState } from "react";

import NavBarOptions, {
  Courses,
  CoursesEN,
  CardsText,
  CardsTextEN,
  AboutMeText,
  AboutMeTextEN,
  NavBarOptionsEN,
} from "../utils/records-utils";

const TranslateContext = createContext();

const TranslateProvider = ({ children }) => {
  //Translate certificed
  const [coursesStudy, setTexto] = useState(Courses);
  const [certifications, setCertifications] = useState("Mis certificados");
  const [toolsTitle, setToolsTitle] = useState("Herramientas que utilizo");
  const [mailHelp, setHelpMail] = useState("¿Te puedo ayudar?");
  const [workDescriptions, setWorkDescriptions] = useState(CardsText);
  const [workTitle, setWorkTitle] = useState("Trabajos");
  const [aboutMeTranslate, setAboutMeTranslate] = useState(AboutMeText);
  const [titleAboutMe, setTitleAboutMe] = useState("Acerca de mí");
  const [pressArrow, setPressArrow] = useState(
    "Presiona la flecha para conocer sobre mí"
  );
  const [subTitleFront, setSubtitleFront] = useState(
    "Soy Sebastian Barcia, desarrollador front end, con gran interés en la interacción entre la tecnologia y el diseño con los usuarios"
  );
  const [titleFront, setTitleFront] = useState("Bienvenido a mi portfolio!");
  const [linksNavBar, setLinksNavBar] = useState(NavBarOptions);
  const [btnContactNavBar, setBtnContactNavBar] = useState("Contactame");
  const [language, setLanguage] = useState("Idiomas");

  //To English
  const translatePageEnglish = () => {
    setTexto(CoursesEN);
    setCertifications("My certificates");
    setToolsTitle("Tools I use");
    setHelpMail("I can help you?");
    setWorkDescriptions(CardsTextEN);
    setWorkTitle("Works");
    setAboutMeTranslate(AboutMeTextEN);
    setTitleAboutMe("About me");
    setPressArrow("Press the arrow to know about me");
    setSubtitleFront(
      "I'm Sebastian Barcia, front end developer, with great interest in the interaction between technology and design with users."
    );
    setTitleFront("Welcome to my portfolio!");
    setLinksNavBar(NavBarOptionsEN);
    setBtnContactNavBar("Contact me");
    setLanguage("Languages");
  };
  //To Spanish
  const translatePageSpanish = () => {
    setTexto(Courses);
    setCertifications("Mis certificados");
    setToolsTitle("Herramientas que utilizo");
    setHelpMail("¿Te puedo ayudar?");
    setWorkDescriptions(CardsText);
    setAboutMeTranslate(AboutMeText);
    setTitleAboutMe("Acerca de mí");
    setWorkTitle("Trabajos");
    setPressArrow("Presiona la flecha para conocer sobre mí");
    setSubtitleFront(
      "Soy Sebastian Barcia, desarrollador front end, con gran interés en la interacción entre la tecnologia y el diseño con los usuarios"
    );
    setTitleFront("Bienvenido a mi portfolio!");
    setLinksNavBar(NavBarOptions);
    setBtnContactNavBar("Contactame");
    setLanguage("Idiomas");
  };

  const data = {
    translatePageEnglish,
    translatePageSpanish,
    coursesStudy,
    certifications,
    toolsTitle,
    mailHelp,
    workDescriptions,
    workTitle,
    aboutMeTranslate,
    titleAboutMe,
    pressArrow,
    subTitleFront,
    titleFront,
    linksNavBar,
    btnContactNavBar,
    language,
  };
  return (
    <TranslateContext.Provider value={data}>
      {children}
    </TranslateContext.Provider>
  );
};
export default TranslateContext;
export { TranslateProvider };
