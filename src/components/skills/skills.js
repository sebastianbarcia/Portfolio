//Styles
import "./skills.scss";

//Components
import CardsSkills from "../CardsWorks/CardsSkills";

const Skills = ({
  titleSubSection,
  product,
  stylesClass,
  stylesPosition,
  paddingClass,
  groupContainer,
  id,
}) => {
  return (
    <>
      <h4
        className={`${paddingClass} mt-5 mb-lg-5 pt-5 text-white text-center`}
        id={id}
      >
        {titleSubSection}
      </h4>
      <div className={`container ${stylesPosition}`} id="container-skills">
        <div className="px-lg-5 mx-lg-5">
          <div
            className={`skills-group shadow-lg d-flex align-content-center justify-content-around px-sm-5 ${groupContainer} `}
          >
            <CardsSkills item={product} styleContainer={stylesClass} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
