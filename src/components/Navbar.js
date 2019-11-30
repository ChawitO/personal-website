import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../images/cw_fullLogo.svg'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 35px 0;
`

const FullLogo = styled.img`
  height: 50px;
`

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;

  > a:not(:last-of-type) {
    margin-right: 80px;
  }
`

export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <FullLogo src={logo} alt='cw logo'/>
        <NavLinkWrapper>
          <a href='#'>About</a>
          <a href='#'>Work</a>
          <a href='#'>Contact</a>
        </NavLinkWrapper>
      </Nav>
    )
  }
}
