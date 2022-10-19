//Styles
import './NavBar.scss'

//Components
import Languages from '../Languages/Languages';

//instruments
import { Link } from 'react-scroll'

//context
import { useContext } from 'react'
import TranslateContext from '../../context/context';

import SelectColorBtnContext from '../../context/SelectColorContext'

const NavBar = () =>{
    const { linksNavBar , btnContactNavBar } = useContext(TranslateContext);
    const { wordColor } = useContext(SelectColorBtnContext);
    return(
        <>
            <nav class="navbar navbar-expand-lg justify-content-between navbar-dark px-lg-5 mx-lg-5 align-items-start">
                <div>
                    <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {linksNavBar.map((selectNav)=>{
                                return(
                                    <Link 
                                    key={selectNav.id} class="nav-link ps-lg-0 pe-lg-3 pointerCursor" 
                                    to={selectNav.href} 
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    >{selectNav.title}
                                    </Link>
                                )
                            } )}
                             <div className='idioms-desktop'>
                            <Languages/>
                        </div>
                        </div>
                    </div>
                </div> 
                <div>
                    <ul class="navbar-nav">
                        <div className='idioms'>
                            <Languages/>
                        </div>
                        <a href='mailto:sebastianbarcia.97@gmail.com'> <button className={`btn ms-3 pe-3 ps-3 btnNavBar ${wordColor}`}>{btnContactNavBar}</button></a>
                    </ul>
                    </div> 
                
            </nav>
        </>
    )
}

export default NavBar