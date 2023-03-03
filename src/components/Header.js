/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
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
        <a href='#' onClick={() => setBurgerStatus(true)}>Menu</a>
        </CustomMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)}/>
          </CloseWrapper>
          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-in</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadster</a></li>
          <li><a href='#'>Existing Inventory</a></li>
        </BurgerNav>
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
  z-index: 1;
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

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  
  li {
    padding: 16px 0;

    a {
      font-weight: 600;
    }
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`