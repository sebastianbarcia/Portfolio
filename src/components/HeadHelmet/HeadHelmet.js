import { Helmet } from "react-helmet"

import { useContext } from "react";
import SelectColorBtnContext from '../../context/SelectColorContext';
const HeadHelmet = () =>{
    const {changeMetaColor} = useContext(SelectColorBtnContext);
    return(
        <>
        <Helmet>
            <meta name="theme-color" content={changeMetaColor}/>
        </Helmet>
        </>
    )
}

export default HeadHelmet