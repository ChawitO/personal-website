import React from 'react'
import styled from 'styled-components'

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 120px;

  > *:not(:last-of-type) {
    margin-bottom: 20px;
  }
`

const Svg = styled.svg`
  * {
    transition: all 0.2s;
  }

  circle {
    fill: #8ceaff;
  }

  path {
    fill: #17151c;
  }

  &#github path {
    fill: #8eeaff;
  }

  &:hover circle,
  &#github:hover path {
    fill: #F6676D;
  }
`

const GithubIcon = () => (
  <a href='https://github.com/ChawitO' target='_blank' rel='noopener noreferrer'>
    <Svg id='github' xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25'>
      <path id='Icon_ionic-logo-github' data-name='Icon ionic-logo-github' d='M14.75,2.25A12.665,12.665,0,0,0,2.25,15.068,12.794,12.794,0,0,0,10.8,27.228a.98.98,0,0,0,.212.022.6.6,0,0,0,.642-.636c0-.307-.011-1.11-.017-2.182a5.714,5.714,0,0,1-1.261.151,2.9,2.9,0,0,1-2.952-1.869,3.385,3.385,0,0,0-1.39-1.875c-1.088-.765-.006-.787.078-.787h.006a2.687,2.687,0,0,1,1.914,1.328,2.454,2.454,0,0,0,2.21,1.4,3.513,3.513,0,0,0,1.429-.335,2.769,2.769,0,0,1,.792-1.713C9.689,20.408,6.77,19.309,6.77,14.4a5.017,5.017,0,0,1,1.283-3.437,4.718,4.718,0,0,1,.123-3.393,1.04,1.04,0,0,1,.279-.028,5.943,5.943,0,0,1,3.158,1.345,11.619,11.619,0,0,1,6.261,0A5.943,5.943,0,0,1,21.033,7.54a1.04,1.04,0,0,1,.279.028,4.718,4.718,0,0,1,.123,3.393A5.037,5.037,0,0,1,22.719,14.4c0,4.922-2.924,6-5.709,6.323a3.108,3.108,0,0,1,.848,2.372c0,1.713-.017,3.1-.017,3.516a.6.6,0,0,0,.636.642,1.08,1.08,0,0,0,.223-.022,12.791,12.791,0,0,0,8.549-12.16A12.665,12.665,0,0,0,14.75,2.25Z' transform='translate(-2.25 -2.25)' />
    </Svg>
  </a>
)

const LinkedinIcon = () => (
  <a href='https://www.linkedin.com/in/chawit-ongcharit/' target='_blank' rel='noopener noreferrer'>
    <Svg id='linkedin' xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25'>
      <circle id='Ellipse_1' data-name='Ellipse 1' cx='12.5' cy='12.5' r='12.5' />
      <path id='Icon_awesome-linkedin-in' data-name='Icon awesome-linkedin-in' d='M3.252,14.529H.24v-9.7H3.252ZM1.744,3.506A1.753,1.753,0,1,1,3.489,1.745,1.759,1.759,0,0,1,1.744,3.506ZM14.526,14.529H11.52V9.807c0-1.125-.023-2.568-1.566-2.568-1.566,0-1.806,1.223-1.806,2.487v4.8H5.139v-9.7H8.028V6.152H8.07a3.165,3.165,0,0,1,2.85-1.566c3.048,0,3.609,2.007,3.609,4.615v5.328Z' transform='translate(4.419 4.842)' />
    </Svg>
  </a>
)

const EmailIcon = () => (
  <a href='mailto: chawit.ocr@gmail.com' target='_blank' rel='noopener noreferrer'>
    <Svg id='email' xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25'>
      <circle id='Ellipse_2' data-name='Ellipse 2' cx='12.5' cy='12.5' r='12.5' />
      <g id='Icon_ionic-ios-mail' data-name='Icon ionic-ios-mail' transform='translate(4.189 6.981)'>
        <path id='Path_6' data-name='Path 6' d='M20.5,10.339l-4.467,4.572a.081.081,0,0,0,0,.117l3.126,3.345a.541.541,0,1,1-.764.768l-3.113-3.333a.085.085,0,0,0-.12,0l-.76.776a3.334,3.334,0,0,1-2.383,1.009,3.4,3.4,0,0,1-2.433-1.039l-.731-.747a.085.085,0,0,0-.12,0L5.625,19.141a.541.541,0,0,1-.764-.768l3.126-3.345a.089.089,0,0,0,0-.117L3.516,10.339a.082.082,0,0,0-.141.058v9.148A1.336,1.336,0,0,0,4.7,20.881H19.315a1.336,1.336,0,0,0,1.328-1.335V10.4A.083.083,0,0,0,20.5,10.339Z' transform='translate(-3.375 -8.925)' />
        <path id='Path_7' data-name='Path 7' d='M12.376,15.2A2.307,2.307,0,0,0,14,14.548L20.53,8.155a1.34,1.34,0,0,0-.824-.28H5.05a1.331,1.331,0,0,0-.824.28l6.527,6.393A2.307,2.307,0,0,0,12.376,15.2Z' transform='translate(-3.741 -7.875)' />
      </g>
    </Svg>
  </a>
)

function Socialbar() {
  return (
    <SocialWrapper>
      <GithubIcon />
      <LinkedinIcon />
      <EmailIcon />
    </SocialWrapper>
  )
}

export default Socialbar
