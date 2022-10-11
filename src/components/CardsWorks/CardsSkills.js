//Styles
import "./CardsSkills.scss";

const CardsSkills = ({ item, styleContainer }) => {
  return (
    <>
      <div
        className={`${styleContainer} col-12 row justify-content-center justify-content-sm-between py-4 py-sm-0`}
      >
        {item.map((logos) => {
          return (
            <div
              className="col-xl-1 col-lg-2 col-sm-2 col-4 my-1 mx-3 px-4 px-lg-0 mx-lg-0 mx-xl-3 px-xl-4"
              key={logos.id}
            >
              <a
                className="d-flex flex-column justify-content-center section-skills align-items-center"
                href={logos.link}
              >
                <div className="img-logos">
                  {logos.img}
                </div>
                <p className="text-center pt-3 mb-0">{logos.nameLogo}</p>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardsSkills;
