const Linkedin = ({
  sizeLink,
  colorLink,
  padding,
  hoverEffect,
  linkToLinkedin,
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={padding}
        height={sizeLink}
        viewBox="0 0 38.252 38.252"
      >
        <a href={linkToLinkedin} target="_blank" rel="noopener noreferrer">
          <g
            id="Grupo_170"
            className={hoverEffect}
            data-name="Grupo 170"
            transform="translate(-906 -4089.54)"
          >
            <g id="Grupo_168" data-name="Grupo 168">
              <rect
                id="Rectángulo_56"
                data-name="Rectángulo 56"
                width="38.25"
                height="38.25"
                rx="3"
                transform="translate(906 4089.54)"
                fill="transparent"
              />
            </g>
            <g id="Grupo_166" data-name="Grupo 166">
              <rect
                id="Rectángulo_55"
                data-name="Rectángulo 55"
                width="33"
                height="33"
                transform="translate(909 4092)"
                fill="rgba(255,255,255,0)"
              />
              <g
                id="Grupo_112"
                data-name="Grupo 112"
                transform="translate(117 1985.54)"
              >
                <g
                  id="Icon_simple-linkedin"
                  data-name="Icon simple-linkedin"
                  transform="translate(789 2104)"
                >
                  <path
                    id="Icon_simple-linkedin-2"
                    className={colorLink}
                    data-name="Icon simple-linkedin"
                    d="M32.589,32.6H26.925V23.721c0-2.117-.043-4.84-2.952-4.84-2.953,0-3.4,2.3-3.4,4.684V32.6H14.9V14.344h5.441v2.488h.073a5.969,5.969,0,0,1,5.371-2.949c5.739,0,6.8,3.777,6.8,8.694V32.6ZM8.506,11.847A3.29,3.29,0,1,1,11.8,8.556,3.286,3.286,0,0,1,8.506,11.847Zm2.84,20.75H5.666V14.344h5.68ZM35.423,0H2.823A2.789,2.789,0,0,0,0,2.756V35.5a2.788,2.788,0,0,0,2.823,2.756h32.6A2.8,2.8,0,0,0,38.252,35.5V2.756A2.8,2.8,0,0,0,35.418,0Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </a>
      </svg>
    </>
  );
};

export default Linkedin;
