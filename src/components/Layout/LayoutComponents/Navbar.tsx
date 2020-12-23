import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

//react icons
import { IoMdMenu } from "react-icons/io"
import { IconContext } from "react-icons"

const StyledNavbar = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
`

const NavbarLogo = styled.img`
  width: 120px;
  height: 50px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`

const NavbarSlogan = styled.div`
  height: 22px;
  padding-top: 2rem;
  /*font-style*/
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 136.8%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #262626;
`

const NavbarLink = styled(Link)`
  text-decoration: none !important;
  ${({ active }) => active && `border-bottom: 3px solid #56CCF2;`}
`

const NavbarTitles = styled.div`
  height: 22px;
  padding-top: 2rem;
  /*font-style*/
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 136.8%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #939393;
  display: none;
  @media (min-width: 1100px) {
    display: block;
  }
  ${({ active }) => active && `color: #262626;`}
`

const NavbarMinTitles = styled.div`
  height: 30px;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: center;
  /*font-style*/
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 136.8%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #939393;
  ${({ active }) =>
    active &&
    `color: #262626;
    border-bottom: 3px solid #56CCF2;`}
`
const ApplyButton = styled.button`
  /* Auto Layout */
  margin-top: 1.5rem;
  width: 147px;
  height: 37px;
  /* alerta */
  background: #ec5959;
  border-radius: 8px;
  border: solid 1px #ec5959;
  cursor: pointer;
  /*font-style*/
  font-style: normal;
  font-weight: 400;
  font-size: 14x;
  line-height: 136.8%;
  /* identical to box height, or 25px */
  letter-spacing: 0.03em;
  color: #ffffff;
  display: none;
  @media (min-width: 1100px) {
    display: block;
  }
`

const MenuButton = styled.button`
  /* Auto Layout */
  margin-top: 1.5rem;
  width: 50px;
  height: 50px;
  /* alerta */
  background: white;
  border-radius: 8px;
  border: solid 1px black;
  cursor: pointer;
  display: block;
  @media (min-width: 1100px) {
    display: none;
  }
`

const Menu = styled.div`
  display: none;
  background-color: white;
  margin-top: 0;
  right: 0;
  z-index: 2;
  position: absolute;
  ${({ active }) =>
    active &&
    `
  display: block;
  `}
  @media (min-width: 1100px) {
    display: none;
  }
`
// TODO: POSTULA debe ser un boton gravitante
export default function Navbar(props) {
  const [menuActived, setMenuActived] = useState(false)

  function toggleMenu() {
    setMenuActived(!menuActived)
  }

  return (
    <navbar href="#">
      <StyledNavbar>
        <NavbarLink to="/">
          <NavbarLogo src="/" />
        </NavbarLink>
        <NavbarSlogan>
          SEARCH COUNTRIES
        </NavbarSlogan>
        <NavbarLink to="/" active={(props.active === 1||props.active === 5)? true : false}>
          <NavbarTitles active={(props.active === 1||props.active === 5) ? true : false}>
            PAISES
          </NavbarTitles>
        </NavbarLink>
        <NavbarLink to="/MONEDA" active={props.active === 2 ? true : false}>
          <NavbarTitles active={props.active === 2 ? true : false}>
            MONEDA
          </NavbarTitles>
        </NavbarLink>
        <NavbarLink to="/aboutus" active={props.active === 3 ? true : false}>
          <NavbarTitles active={props.active === 3 ? true : false}>
            REGIÓN
          </NavbarTitles>
        </NavbarLink>
        
        <MenuButton onClick={toggleMenu}>
          <IconContext.Provider value={{ color: "black", size: "2em" }}>
            <IoMdMenu />
          </IconContext.Provider>
        </MenuButton>
      </StyledNavbar>
      <Menu active={menuActived}>
        <NavbarLink to="/" active={props.active === 1 ? true : false}>
          <NavbarMinTitles active={props.active === 1 ? true : false}>
            PAISES
          </NavbarMinTitles>
        </NavbarLink>
        <NavbarLink to="/MONEDA" active={props.active === 2 ? true : false}>
          <NavbarMinTitles active={props.active === 2 ? true : false}>
            MONEDA
          </NavbarMinTitles>
        </NavbarLink>
        <NavbarLink to="/aboutus" active={props.active === 3 ? true : false}>
          <NavbarMinTitles active={props.active === 3 ? true : false}>
            REGIÓN
          </NavbarMinTitles>
        </NavbarLink>
      
      </Menu>
    </navbar>
  )
}