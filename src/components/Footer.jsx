import styled from "styled-components"
import TdtLogo from "../assets/tierra_de_todos.png"
import FacebookIcon from "../assets/facebook-icon.png"
import InstagramIcon from "../assets/instagram-icon.png"
import LocationIcon from "../assets/location-icon.png"
import PhoneIcon from "../assets/phone-icon.png"
import MailIcon from "../assets/mail-icon.png"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  background-color: #343a40;
  padding: 30px 0;
`

const FooterLogo = styled.img`
  width: 160px;
`

const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img {
    width: 22px;
  }
`

const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }
  div img {
    width: 20px;
  }
  div img,
  div p {
    opacity: 0.8;
  }
`

const FooterBorder = styled.div`
  width: 50%;
  height: 1px;
  background-color: #495057;
`

const FooterRights = styled.p`
  text-align: center;
  opacity: 0.8;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={TdtLogo} alt="tierra de todos logo"/>
      <FooterSocial>
        <img src={FacebookIcon} alt="facebook icon" />
        <img src={InstagramIcon} alt="instagram icon" />
      </FooterSocial>
      <FooterInfo>
        <div>
          <img src={LocationIcon} alt="icon" />
          <p>Direccion 1234</p>
        </div>
        <div>
          <img src={PhoneIcon} alt="icon" />
          <p>+54 2231112233</p>
        </div>
        <div>
          <img src={MailIcon} alt="icon" />
          <p>correo@correo.com</p>
        </div>
      </FooterInfo>
      <FooterBorder></FooterBorder>
      <FooterRights>Copyright &copy; 2024 - Tierra de Todos </FooterRights>
    </FooterContainer>
  )
}

export default Footer