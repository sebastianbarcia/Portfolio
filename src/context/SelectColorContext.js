import { createContext, useState } from "react";

const SelectColorBtnContext = createContext();

const SelectColorProvider = ({children}) => {
    const [selectColors, setSelectColors] = useState("firstColor"); 
    const [wordColor, setWordColor] = useState("wordColorOne");
    const [aboutColor , setColorAbout] = useState("firstAboutColor")
    const [arrowSelect , setArrows] = useState("arrowFirstSelected")
    const [slcLanguageColor, setSelectLanguageColor] = useState("firstLanguageColor")
    const [changeMetaColor, setChangeMetaColor] = useState("#fa6370")

    const handleChangeColorOne = () =>{
        setSelectColors("firstColor");
        setWordColor("wordColorOne");
        setColorAbout("firstAboutColor");
        setArrows("arrowFirstSelected");
        setSelectLanguageColor("firstLanguageColor");
        setChangeMetaColor('#fa6370')
    }
    const handleChangeColorTwo = () =>{
        setSelectColors("blackColor");
        setWordColor("wordColorTwo");
        setColorAbout("secondAboutColor");
        setArrows("arrowSecondSelected");
        setSelectLanguageColor("secondLanguageColor");
        setChangeMetaColor('black')
    }
    const handleChangeColorThree = () =>{
        setSelectColors("violetColor");
        setWordColor("wordColorThree");
        setColorAbout("thirdAboutColor");
        setArrows("arrowThirdSelected");
        setSelectLanguageColor("thirdLanguageColor");
        setChangeMetaColor('red')
    }
    const handleChangeColorFour = () =>{
        setSelectColors("fourColor");
        setWordColor("wordColorFour");
        setColorAbout("fourAboutColor");
        setArrows("arrowFourSelected");
        setSelectLanguageColor("fourLanguageColor")
        setChangeMetaColor('blue')
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
        slcLanguageColor,
        changeMetaColor
    }
    return (
        <SelectColorBtnContext.Provider value={data}>
          {children}
        </SelectColorBtnContext.Provider>
      );
} 

export default SelectColorBtnContext;
export { SelectColorProvider }