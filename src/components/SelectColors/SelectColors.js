import "./SelectColors.scss";

import { useContext } from "react";
import SelectColorBtnContext from "../../context/SelectColorContext";

const SelectColors = () => {
  const {
    handleChangeColorOne,
    handleChangeColorTwo,
    handleChangeColorThree,
    handleChangeColorFour,
  } = useContext(SelectColorBtnContext);

  return (
    <div className="text-center mb-5 selectColorsButtons">
      <div>
        <p className="mb-1">Gracias por llegar hasta aqui, te agradezco de ❤️!</p>
        <p>Elije el color que mas te guste para el fondo de mí portfolio</p>
      </div>
      <div>
        <button
          type="button"
          onClick={handleChangeColorOne}
          className="btn btnColorFirst ms-1 me-1"
        ></button>
        <button
          type="button"
          onClick={handleChangeColorTwo}
          className="btn btnColorSecond ms-1 me-1"
        ></button>
        <button
          type="button"
          onClick={handleChangeColorThree}
          className="btn btnColorThird ms-1 me-1"
        ></button>
        <button
          type="button"
          onClick={handleChangeColorFour}
          className="btn btnColorFour ms-1 me-1"
        ></button>
      </div>
    </div>
  );
};

export default SelectColors;
