/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
        <a href='#'>
          <img src='/images/logo.svg' alt='' />
        </a>
        <Menu>
          <a href='#'>Model S</a>
          <a href='#'>Model 3</a>
          <a href='#'>Model X</a>
          <a href='#'>Model Y</a>
          <a href='#'>Solar Roof</a>
          <a href='#'>Solar Panels</a>
        </Menu>
        <RightMenu>
          <a href='#'>Shop</a>
          <a href='#'>Account</a>
          <a href='#'>Menu</a>
        </RightMenu>
        <CustomMenu>
        <a href='#'>Menu</a>
        </CustomMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  a {
    font-weight: 600;
    padding: 0 20px;
    flex-wrap: no-wrap;
  }

  @media(max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  align-items: center;

  a {
    font-weight: 600;
    margin-right: 20px;
  }

  @media(max-width: 1198px) {
    display: none;
  }
`

const CustomMenu = styled.div`
  cursor: pointer;

  a {
    font-weight: 600;
    margin-right: 20px;
  }

  @media(min-width: 1198px) {
    display: none;
  }
`