import styled from "styled-components"

import HeaderBg from "../assets/header-bg.jpg"
import Nav from "./Nav"

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${HeaderBg});
  background-size: cover;
  background-position: 0% 70%;
  height: 100vh;
  width: 100%;
  position: relative;
`

const HeaderInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 400px;

  h1 {
    background-color: rgba(19, 42, 19, 0.7);
    padding: 4px 16px;
    border-radius: 4px;
    font-size: 40px;
    font-weight: 500;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
      <HeaderInfo>
        <h1>Complejo de cabañas y quinchos</h1>
      </HeaderInfo>
    </HeaderContainer>
  )
}

export default Header