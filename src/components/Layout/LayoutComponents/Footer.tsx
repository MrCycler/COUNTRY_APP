import React from "react"
import styled from "styled-components"

//react icons
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai"
import { IconContext } from "react-icons"

const FooterHeader = styled.div`
  width: 1%00;
  padding-left: 5rem;
  padding-right: 5rem;
  background-color: #262626;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const PostFooter = styled.div`
  width: 100%;
  background-color: #262626;
  padding: 2rem;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const Logo = styled.img`
  width: 200px;
  height: 200px;
  display: none;
  @media (min-width: 800px) {
    display: block;
  }
`

const EmailUsDiv = styled.div`
  width: 100%;
  margin-top: 3rem;
  margin-left: 0rem;
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    margin-left: 20rem;
    width: 40%;
  }
`

const ContactUsDiv = styled.div`
  width: 100%;
  margin-top: 3rem;
  margin-left: 0rem;
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    margin-left: 0rem;
    width: 60%;
  }
`

const SubscriptionInput = styled.input`
  margin-top: 2rem;
  color: #fff;
  border-radius: 0;
  background: transparent;
  outline: 0;
  border: 0;
  border-bottom: 1px solid #c4c4c4;
  line-height: 32px;
  font-size: 14px;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`

const SubscriptionButton = styled.button`
  margin-top: 1rem;
  border: 1px solid #e7e6e0;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  font-style: normal;
  font-weight: 600;
  color: #e7e6e0;
  background-color: #262626;
  text-align: center;
  height: 40px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`
const EmailLink = styled.a`
  color: #767b8a;
  font-weight: 200;
  margin-top: 3rem;
`

const Dot = styled.div`
  background-color: #0b9299;
  width: 8px;
  height: 8px;
  margin-top: 5px;
  margin-right: 8px;
  border-radius: 50%;
`

const FooterTitle = styled.p`
  display: flex;
  flex-direction: row;
`

const Copyrigth = styled.div`
  width: 100%;
  margin-top: 1rem;
  font-size: 14px;
  line-height: 1.5;
  color: #767b8a;
  @media (min-width: 800px) {
    width: 70rem;
  }
`

const Social = styled.div`
  width: 100%;
  margin-top: 1rem;
  font-size: 14px;
  line-height: 1.5;
  color: #767b8a;
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    width: 20rem;
    justify-content: space-around;
  }
`

export default function Footer() {
  /*Aca iria la conexion al servicio para mandar correo */
  return (
    <footer>
      <PostFooter>
        <Copyrigth>
          © Hecho por Juan M. Mendoza. Lima, Perú 2020
        </Copyrigth>
        <Social>
          <IconContext.Provider
            value={{ color: "white", size: "2.5em", className: "social_icon" }}
          >
            <a href="https://www.instagram.com/aporta_peru/">
              <AiOutlineInstagram />
            </a>
            <a href="https://www.linkedin.com/company/aporta-peru/">
              <AiOutlineLinkedin />
            </a>
            <a href="https://www.facebook.com/aportainnovacion/">
              <AiOutlineFacebook />
            </a>
          </IconContext.Provider>
        </Social>
      </PostFooter>
    </footer>);}