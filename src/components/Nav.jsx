import styled from "styled-components"
import TdtLogo from "../assets/tierra_de_todos.png"
import { Link } from "react-router"

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
  z-index: 1;

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

  p {
    text-transform: uppercase;
    padding: 6px 0;
  }

  p:hover {
    border-bottom: 1px solid #FFF;
  }
`



const Nav = () => {
  return (
    <NavContainer>
      <Link to="/">
        <img src={TdtLogo} alt="Tierra de todos logo" />
      </Link>
      <NavLinks>
        <Link to="/cabañas">
          <p>Cabañas</p>
        </Link>
        <Link to="/quinchos">
          <p>Quinchos</p>
        </Link>
        <Link to="#">
          <p>Ubicación</p>
        </Link>
        <Link to="#">
          <p>Contacto</p>
        </Link>
      </NavLinks>
    </NavContainer>
  )
}

export default Nav