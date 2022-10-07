import './ExternalLink.scss'

const ExternalLink = ({sizeLink , padding ,linkExtern }) =>{
  return(
    <a href={linkExtern} className='hoverExternalLink' target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" className={padding} height={ sizeLink } viewBox="0 0 34.371 34.371">
          <g id="Icon_feather-external-link"  data-name="Icon feather-external-link" transform="translate(1.5 2.121)">
            <path id="Trazado_1" className='color-hover-ext' data-name="Trazado 1" d="M27,19.5v9a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3V12a3,3,0,0,1,3-3h9" transform="translate(-4.5 -0.75)" fill="none" stroke="#5b5b5b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            <path id="Trazado_2" className='color-hover-ext' data-name="Trazado 2" d="M22.5,4.5h9v9" transform="translate(-0.75 -4.5)" fill="none" stroke="#5b5b5b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            <path id="Trazado_3" className='color-hover-ext' data-name="Trazado 3" d="M15,21,31.5,4.5" transform="translate(-0.75 -4.5)" fill="none" stroke="#5b5b5b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          </g>  
      </svg>
    </a>

)
}

export default ExternalLink
