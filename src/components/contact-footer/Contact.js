//Styles
import "./Contact.scss";

//Components
import Linkedin from "../logos/linkedin/Linkedin";
import Github from "../logos/github/Github";

//Context
import { useContext } from "react";
import TranslateContext from "../../context/context";

const Contact = () => {
  const { mailHelp } = useContext(TranslateContext);
  let linkPageLinkedin = "https://www.linkedin.com/in/sebastian-barcia/";
  let linkPageGithub = "https://github.com/sebastianbarcia";
  let hoverEffectContact = "link-hover-footer";
  let colorExtension = "color-linkedin-github";
  let padSpacce = "ps-2 pe-2";
  let sizeLink = "31.151";
  return (
    <>
      <div className="d-flex justify-content-center align-items-center pt-5 mt-5 pb-2 flex-column flex-sm-row">
        <p className="mb-0 pe-sm-2 me-sm-3 fs-5 mt-3">{mailHelp}</p>
        <img
          className="mt-3 arrow-right"
          src={`./vectors/icon-arrow-right.svg`}
        ></img>
        <p className="mb-0 ps-sm-2 ms-sm-3 fs-5 mt-3">
          <a
            id="paragraphLinkMail"
            href="mailto:sebastianbarcia.97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            sebastianbarcia.97@gmail.com
          </a>
        </p>
      </div>
      <div className="d-flex justify-content-center pt-4 pb-5 mb-3">
        <Linkedin
          colorLink={colorExtension}
          sizeLink={sizeLink}
          padding={padSpacce}
          hoverEffect={hoverEffectContact}
          linkToLinkedin={linkPageLinkedin}
        />
        <Github
          colorLink={colorExtension}
          sizeLink={sizeLink}
          padding={padSpacce}
          hoverEffect={hoverEffectContact}
          linkToGithub={linkPageGithub}
        />
      </div>
    </>
  );
};

export default Contact;
