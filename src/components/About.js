import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 100vh;
  padding: 120px 50px 0;
`

export default function About() {
  return (
    <AboutWrapper id='about'>
      <div>
        <h2>{'<About>'}</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
      </div>
      <div></div>
      <div>
        <h3>Experience</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
        <h3>Skills</h3>
        <h4>HTML5</h4>
        <h4>CSS</h4>
        <h4>JavaScript</h4>
      </div>
    </AboutWrapper>
  )
}
