import './IconArrowUp.scss'

import { useState , useEffect } from 'react';

const IconArrowUp = () =>{
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 100){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  //Desmontar evento window
  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  });
  
    return(
        <>
            <svg className='arrowUpLink' xmlns="http://www.w3.org/2000/svg" 
            width="47.619" height="41.503" viewBox="0 0 47.619 41.503" 
            onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}}>
                <g id="Grupo_164" data-name="Grupo 164" transform="translate(68.309 -8244.749)">
                    <rect id="Rectángulo_54" data-name="Rectángulo 54" width="47.619" height="41.503" transform="translate(-68.309 8244.749)" fill="#fff"/>
                    <path id="Icon_ionic-ios-arrow-up" data-name="Icon ionic-ios-arrow-up" d="M18,15.321l8.93,8.937a1.688,1.688,0,1,0,2.384-2.391L19.2,11.742a1.685,1.685,0,0,0-2.327-.049L6.68,21.86a1.688,1.688,0,0,0,2.384,2.391Z" transform="translate(-62.497 8247.498)" fill="#5b5b5b"/>
                </g>
            </svg>
        </>
    )
}

export default IconArrowUp