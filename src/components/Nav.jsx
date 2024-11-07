import styled from "styled-components"
import TdtLogo from "../assets/tierra_de_todos.png"

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(52,58,64,0.8);
  height: 100px;
  width: 100%;
  padding: 0 400px;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  img {
    height: 80px;
  }
`

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-bottom: 1px solid transparent;

  a {
    text-transform: uppercase;
    padding-bottom: 6px;
  }

  a:hover {
    border-bottom: 1px solid #FFF;
  }
`



const Nav = () => {
  return (
    <NavContainer>
      <img src={TdtLogo} alt="Tierra de todos logo" />
      <NavLinks>
        <a href="#">Cabañas</a>
        <a href="#">Quinchos</a>
        <a href="#">Ubicación</a>
        <a href="#">Contacto</a>
      </NavLinks>
    </NavContainer>
  )
}

export default Nav