import  './Languages.scss'

import { useContext } from "react"
import TranslateContext from "../../context/context"
import SelectColorBtnContext from '../../context/SelectColorContext';



const Languages = () =>{
    const {slcLanguageColor} = useContext(SelectColorBtnContext);
    const {translatePageEnglish , translatePageSpanish , language} = useContext(TranslateContext)
    return(
        <>
         <li class={`nav-item dropdown ${slcLanguageColor}`}>
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {language}
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" onClick={translatePageSpanish}>Español</a></li>
                    <li><a class="dropdown-item" onClick={translatePageEnglish}>English</a></li>
                </ul>
            </li>
        </>
    )
}

export default Languages