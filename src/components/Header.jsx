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
  height: 85vh;
  width: 100%;
  position: relative;
`

const HeaderInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  padding: 0 400px;

  h1 {
    background-color: rgba(19, 42, 19, 0.9);
    padding: 4px 16px;
    border-radius: 4px;
    font-size: 40px;
    font-weight: 500;
  }
  h2 {
    background-color: rgba(49, 87, 44, 0.9);
    padding: 4px 16px;
    font-weight: 400;
    border-radius: 4px;
    font-size: 40px;
  }

`

const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
      <HeaderInfo>
        <h1>Tierra de todos</h1>
        <h2>Complejo de cabañas y quinchos</h2>
      </HeaderInfo>
    </HeaderContainer>
  )
}

export default Header