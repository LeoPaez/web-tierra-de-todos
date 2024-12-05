import styled from "styled-components"
import CabañasHeaderBg from "../assets/cabañas-header.jpg"
import CabañaBg from "../assets/cabañas-bg.jpg"

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
`

const CabañaCard = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  background-image: url(${props => props.cardImage});
  display: flex;
  align-items: flex-end;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(255,255,255,0) 100%);
    opacity: 1; /* Ajusta la opacidad */
    z-index: 1; /* Se asegura de estar encima del fondo */
  }

  > * {
    position: relative;
    z-index: 2; /* Asegura que el contenido esté encima de la capa negra */
    color: white; /* Para contraste si el texto es blanco */
  }  

  p {
    font-size: 24px;
    margin: 0 0 20px 20px;
    font-weight: 500;
  }
`

const Cabañas = () => {
  return (
    <>
      <CabañasHeader>
        <h2>Cabañas</h2> 
      </CabañasHeader>
      <CabañasContainer>
        <CabañaCard cardImage={CabañaBg}>
          <p>Cabaña 1</p>  
        </CabañaCard>
      </CabañasContainer>
    </>
  )
}

export default Cabañas