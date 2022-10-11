//Styles
import "./GroupSecondSection.scss";

//Components
import Works from "../Works/Works";
import Skills from "../skills/skills";

//Records
import { SkillsLogos } from "../../utils/records-utils";

//Context
import { useContext } from "react";
import TranslateContext from "../../context/context";

const GroupSecondSection = () => {
  const { coursesStudy, certifications, toolsTitle, workTitle } =
    useContext(TranslateContext);

  let stylesClassCourses = "col-xl-9";
  let backgroundPosition = "backgroundPositionCourses";
  let containerStyles = "container-groups";

  return (
    <>
      <h4
        className="text-grey-center mt-5 pb-5 pb-xl-4 mb-lg-5 pt-4"
        id="works"
      >
        {workTitle}
      </h4>
      <div className="background-works">
        <Works />
        <Skills
          paddingClass={"pb-lg-3 pb-5"}
          id="skills-area"
          groupContainer={containerStyles}
          stylesPosition={""}
          stylesClass={""}
          titleSubSection={toolsTitle}
          product={SkillsLogos}
        />
        <Skills
          paddingClass={"pb-lg-1 pb-4"}
          id="courses-area"
          groupContainer={"py-1"}
          stylesPosition={backgroundPosition}
          stylesClass={stylesClassCourses}
          titleSubSection={certifications}
          product={coursesStudy}
        />
      </div>
    </>
  );
};

export default GroupSecondSection;
