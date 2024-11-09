import styled from "styled-components"

import CabañaBg from "../assets/cabañas-bg.jpg"
import QuinchosBg from "../assets/quincho-bg.jpg"

const ServicesCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin: 100px 0;
`

const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  gap: 4px;
  box-sizing: border-box;
  background-color: #343a40;
  border-radius: 4px;

  img {
    width: 400px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }
`

const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px;

  h3 {
    font-size: 26px;
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    text-align: center;
  }

  button {
    font-size: 16px;
    padding: 8px 20px;
    font-weight: 300;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    margin-top: 10px;
    background-color: rgba(49, 87, 44, 1);
    color: #FFF;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(49, 87, 44, 0.9);
  }
`

const Services = () => {
  return (
    <ServicesCont>
      <Service>
        <img src={CabañaBg} alt="foto de cabaña" />
        <ServiceInfo>
          <h3>Cabañas</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magnam delectus expedita tenetur sed quibusdam. Ut perspiciatis nesciunt tempora dolorum voluptatibus.</p>
          <button>Ver las cabañas</button>
        </ServiceInfo>
      </Service>
      <Service>
        <img src={QuinchosBg} alt="foto de quincho" />
        <ServiceInfo>
          <h3>Quinchos</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magnam delectus expedita tenetur sed quibusdam. Ut perspiciatis nesciunt tempora dolorum voluptatibus.</p>
          <button>Ver los quinchos</button>
        </ServiceInfo>
      </Service>
    </ServicesCont>
  )
}

export default Services