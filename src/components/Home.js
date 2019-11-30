import React, { Component } from 'react'
import styled from 'styled-components'

const HomeWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 50%);

  > div {
    grid-column-start: 2;
  }

  p {
      margin: 80px 0;
  }
`

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div>
          <h1>
            Hello, I’m Chawit.<br/>
            A very energetic, colourful
            and determined web developer
          </h1>
          <p>I have a strong belief in a well-organised and systematic coding. I’m always willing to learn more and develop my skills as well as building good websites.</p>
          <button>Read More</button>
        </div>
      </HomeWrapper>
    )
  }
}
