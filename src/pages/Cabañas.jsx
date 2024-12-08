import styled from "styled-components"
import CabañasHeaderBg from "../assets/cabañas-header.jpg"
import CabañaBg from "../assets/cabañas-bg.jpg"
import { Link } from "react-router"

const CabañasHeader = styled.div`
  background-image: url(${CabañasHeaderBg});
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: 0% 60%;
  display: flex;
  align-items: flex-end;

  h2 {
    padding: 20px 0 20px 400px;
    font-size: 54px;
    font-weight: 400;
    width: 100%;
    background-color: rgba(49, 87, 44, 0.8);
  }
`

const CabañasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 60px 0;
`

const CabañaCard = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background-image: url(${props => props.cardImage});
  display: flex;
  justify-content: center;
  background-size: cover;
  border-radius: 4px;
  transition: all 1s ease-out;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(255,255,255,0) 100%);
    z-index: 1;
    transition: all 0.3s ease-out;
  }

  > * {
    position: relative;
    z-index: 2;
    color: white;
  }

  p {
    font-size: 22px;
    margin: 0 0 20px 20px;
    font-weight: 500;
    align-content: flex-end;
    margin-right: auto;
  }

  span {
    position: absolute;
    background-color: rgba(49, 87, 44, 0.8);
    padding: 6px 14px;
    align-self: center;
    font-weight: 500;
    border-radius: 6px;
    display: none;
    transition: all 1s ease-out;
  }

  &:hover {
    &::before {
      height: 100%;
    }

    span {
      display: block;
    }
  }
`

const Cabañas = () => {
  return (
    <>
      <CabañasHeader>
        <h2>Cabañas</h2> 
      </CabañasHeader>
      <CabañasContainer>
        <Link to="#">
          <CabañaCard cardImage={CabañaBg}>
            <p>Cabaña 1</p>
            <span>Más informacion {">"}</span>
          </CabañaCard>
        </Link>
        <Link to="#">
          <CabañaCard cardImage={CabañaBg}>
            <p>Cabaña 2</p>
            <span>Más informacion {">"}</span>
          </CabañaCard>
        </Link>
        <Link to="#">
          <CabañaCard cardImage={CabañaBg}>
            <p>Cabaña 3</p>
            <span>Más informacion {">"}</span>
          </CabañaCard>
        </Link>
        <Link to="#">
          <CabañaCard cardImage={CabañaBg}>
            <p>Cabaña 4</p>
            <span>Más informacion {">"}</span>
          </CabañaCard>
        </Link>
      </CabañasContainer>
    </>
  )
}

export default Cabañas