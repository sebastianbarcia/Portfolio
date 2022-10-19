import { createContext, useState } from "react";

const SelectColorBtnContext = createContext();

const SelectColorProvider = ({children}) => {
    const [selectColors, setSelectColors] = useState("firstColor"); 
    const [wordColor, setWordColor] = useState("wordColorOne");
    const [aboutColor , setColorAbout] = useState("firstAboutColor")
    const [arrowSelect , setArrows] = useState("arrowFirstSelected")
    const [slcLanguageColor, setSelectLanguageColor] = useState("firstLanguageColor")

    const handleChangeColorOne = () =>{
        setSelectColors("firstColor");
        setWordColor("wordColorOne");
        setColorAbout("firstAboutColor");
        setArrows("arrowFirstSelected");
        setSelectLanguageColor("firstLanguageColor");
    }
    const handleChangeColorTwo = () =>{
        setSelectColors("blackColor");
        setWordColor("wordColorTwo");
        setColorAbout("secondAboutColor");
        setArrows("arrowSecondSelected");
        setSelectLanguageColor("secondLanguageColor")
    }
    const handleChangeColorThree = () =>{
        setSelectColors("violetColor");
        setWordColor("wordColorThree");
        setColorAbout("thirdAboutColor");
        setArrows("arrowThirdSelected");
        setSelectLanguageColor("thirdLanguageColor")
    }
    const handleChangeColorFour = () =>{
        setSelectColors("fourColor");
        setWordColor("wordColorFour");
        setColorAbout("fourAboutColor");
        setArrows("arrowFourSelected");
        setSelectLanguageColor("fourLanguageColor")
    }

    const data ={
        handleChangeColorOne,
        handleChangeColorTwo,
        handleChangeColorThree,
        handleChangeColorFour,
        selectColors,
        wordColor,
        aboutColor,
        arrowSelect,
        slcLanguageColor
    }
    return (
        <SelectColorBtnContext.Provider value={data}>
          {children}
        </SelectColorBtnContext.Provider>
      );
} 

export default SelectColorBtnContext;
export { SelectColorProvider }