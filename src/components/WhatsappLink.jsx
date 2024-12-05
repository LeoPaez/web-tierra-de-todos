import styled from "styled-components"
import WhatsappIcon from "../assets/whatsapp-icon.png"

const WhatsappLinkCont = styled.a `
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 16px;
  bottom: 0;
  right: 0;
  margin: 0 20px 20px 0;
  background-color: #25d366;
  border-radius: 50%;
  transition: transform 0.2s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }

`

const WhatsappLinkIcon = styled.img `
  width: 34px;
`

const WhatsappLink = () => {
  return (
    <WhatsappLinkCont href="#">
      <WhatsappLinkIcon src={WhatsappIcon} alt="icono whatsapp"/>
    </WhatsappLinkCont>
  )
}

export default WhatsappLink