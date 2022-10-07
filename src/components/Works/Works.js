//Styles
import './Works.scss'
//Records
import Github from '../logos/github/Github';
import ExternalLink from '../logos/ExternalLink/ExternalLink';
//context
import { useContext } from 'react'
import TranslateContext from '../../context/context';



const Works = () =>{
    const {workDescriptions} = useContext(TranslateContext)
    let hoverEffectContact = 'link-hover-footer'
    let colorExtension = "color-linkedin-github";
    let padSpacce='ps-2 pe-2'
    let sizeLink = "26"
    
    return(
        <>
            <div className='container works-container'>
                <div className="row d-flex justify-content-md-between justify-content-center px-lg-5 mx-lg-5 text-grey-center">
                    {workDescriptions.map((text) => {
                        return(
                    <div className='shadow-lg cards-works px-3 my-2 my-lg-0 pb-2' key={text.id}>
                        <div className='pb-4 pt-4 mt-2'>{text.image}</div>
                            <p className='cards-works-paragraph'>{text.paragraph}</p>
                            <p className='cards-works-skills d-flex justify-content-center align-items-center'>{text.skills}</p>
                        <div className='py-4'>
                            <Github colorLink={ colorExtension } sizeLink={sizeLink} padding={padSpacce} hoverEffect = {hoverEffectContact} linkToGithub={text.linkGitHub}/>
                            <ExternalLink  sizeLink={sizeLink} padding={padSpacce} linkExtern= {text.linkpage}/>
                        </div>
                    </div>
                    )})
                    }
                </div>
            </div>
        </>
    )
}

export default Works