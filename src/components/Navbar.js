import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../images/cw_fullLogo.svg'

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  left: 0;
  width: 100vw;
  padding: 35px 80px;

  &:before {
    content: ' ';
    position: absolute;
    top: -50%;
    left: 0;
    width: 100%;
    height: 150%;
    background-color: #17161C;
    filter: blur(10px);
    z-index: 1;
  }
`

const FullLogo = styled.img`
  height: 50px;
  z-index: 2;
`

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;

  > a:not(:last-of-type) {
    margin-right: 80px;
  }
`

export default class Navbar extends Component {
  render() {
    return (
      <>
      <Nav>
        <FullLogo src={logo} alt='cw logo'/>
        <NavLinkWrapper>
          <a href='#about'>About</a>
          <a href='#work'>Work</a>
          <a href='#contact'>Contact</a>
        </NavLinkWrapper>
      </Nav>
      </>
    )
  }
}
