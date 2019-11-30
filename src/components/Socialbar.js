import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  fill: #8ceaff;

  * {
    transition: all 0.2s;
  }

  &:hover circle {
    fill: #F6676D;
  }
`

function EmailIcon() {
  return (
    <Svg id="email" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
      <circle id="Ellipse_2" data-name="Ellipse 2" class="cls-1" cx="12.5" cy="12.5" r="12.5" />
      <g id="Icon_ionic-ios-mail" data-name="Icon ionic-ios-mail" transform="translate(4.189 6.981)">
        <path id="Path_6" data-name="Path 6" class="cls-2" fill='#17151c' d="M20.5,10.339l-4.467,4.572a.081.081,0,0,0,0,.117l3.126,3.345a.541.541,0,1,1-.764.768l-3.113-3.333a.085.085,0,0,0-.12,0l-.76.776a3.334,3.334,0,0,1-2.383,1.009,3.4,3.4,0,0,1-2.433-1.039l-.731-.747a.085.085,0,0,0-.12,0L5.625,19.141a.541.541,0,0,1-.764-.768l3.126-3.345a.089.089,0,0,0,0-.117L3.516,10.339a.082.082,0,0,0-.141.058v9.148A1.336,1.336,0,0,0,4.7,20.881H19.315a1.336,1.336,0,0,0,1.328-1.335V10.4A.083.083,0,0,0,20.5,10.339Z" transform="translate(-3.375 -8.925)" />
        <path id="Path_7" data-name="Path 7" class="cls-2" fill="#17151c" d="M12.376,15.2A2.307,2.307,0,0,0,14,14.548L20.53,8.155a1.34,1.34,0,0,0-.824-.28H5.05a1.331,1.331,0,0,0-.824.28l6.527,6.393A2.307,2.307,0,0,0,12.376,15.2Z" transform="translate(-3.741 -7.875)" />
      </g>
    </Svg>
  )
}

export default EmailIcon
