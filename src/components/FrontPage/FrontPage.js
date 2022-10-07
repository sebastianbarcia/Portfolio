//Styles
import './FrontPage.scss'

//Components
import NavBar from "../NavBar/NavBar"
import Linkedin from '../logos/linkedin/Linkedin';
import Github from '../logos/github/Github';
import { Link } from 'react-scroll';

//context
import { useContext } from 'react'
import TranslateContext from '../../context/context';

const FrontPage= () =>{
    const { pressArrow , subTitleFront , titleFront } = useContext(TranslateContext)
    let linkPageLinkedin = 'https://www.linkedin.com/in/sebastian-barcia/'
    let linkPageGithub = 'https://github.com/sebastianbarcia';
    let hoverEffectContact = 'link-hover-front';
    let colorExtension = "white-linkedin-github";
    let padSpacce='pe-4'
    let sizeLink = "31.151"
    return(
        <div className="back-ground">
            <div className="container">
                <NavBar/>
                <div className="px-lg-5 mx-lg-5 front-style">
                    <h2>{titleFront}</h2>
                    <p>{subTitleFront}</p>
                    <div className='pt-4 '>
                        <Linkedin colorLink={ colorExtension } sizeLink={sizeLink} padding={padSpacce} hoverEffect = {hoverEffectContact} linkToLinkedin={linkPageLinkedin} />
                        <Github colorLink={ colorExtension } sizeLink={sizeLink} padding={padSpacce} hoverEffect = {hoverEffectContact} linkToGithub={linkPageGithub}/> 
                    </div>
                    <div className='d-flex flex-column align-items-center pt-5 mt-md-5 arrow-spaces-front'>
                        <p className='text-white text-center fs-6 pt-md-5 mt-md-5'>{pressArrow}</p>
                        <Link to ='sectionAboutUs'
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className='pointerCursor'
                        > 
                        <img src='./vectors/ionic-ios-arrow-down.svg' alt='arrow-down'></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage