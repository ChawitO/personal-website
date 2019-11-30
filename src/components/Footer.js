import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  height: 65px;

  p {
    font-size: 12px;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>© 2019 Chawit W. Ongcharit</p>
    </StyledFooter>
  )
}
