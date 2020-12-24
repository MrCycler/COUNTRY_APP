import React from "react"
import styled from "styled-components"

//social networks react icons
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineGithub,
} from "react-icons/ai"
import { IconContext } from "react-icons"

const FooterDiv = styled.div`
  width: 100%;
  background-color: #20313b;
  padding: 2rem;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const Copyrigth = styled.div`
  width: 100%;
  margin-top: 0.8rem;
  font-size: 10px;
  line-height: 1.5;
  color: white;
  display: flex;
  justify-content: center;
  @media (min-width: 350px) {
    font-size: 12px;
    width: 70rem;
    justify-content: left;
  }
  @media (min-width: 800px) {
    font-size: 14px;
    width: 70rem;
    justify-content: left;
  }
`

const Social = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  font-size: 14px;
  line-height: 1.5;
  color: #767b8a;
  display: flex;
  justify-content: space-around;
  @media (min-width: 800px) {
    width: 30rem;
    justify-content: space-around;
  }
`

export default function Footer() {
  /*Aca iria la conexion al servicio para mandar correo */
  return (
    <footer>
      <FooterDiv>
        <Copyrigth>© Hecho por Juan M. Mendoza. Lima, Perú 2020</Copyrigth>
        <Social>
          <IconContext.Provider
            value={{ color: "white", size: "2.5em", className: "social_icon" }}
          >
            <a href="https://www.linkedin.com/in/juan-manuel-mendoza-jacinto-18515ab0">
              <AiOutlineLinkedin />
            </a>
            <a href="https://github.com/fararay">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/juan-manuel-mendoza-jacinto-18515ab0">
              <AiOutlineLinkedin />
            </a>
            <a href="https://www.facebook.com/juanmanuel.mendozajacinto/">
              <AiOutlineFacebook />
            </a>
            <a href="https://www.instagram.com/_jm.mj_/">
              <AiOutlineInstagram />
            </a>
          </IconContext.Provider>
        </Social>
      </FooterDiv>
    </footer>
  )
}
