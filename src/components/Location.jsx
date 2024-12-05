import styled from "styled-components"

const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LocationInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 26px;
  background-color: #343a40;
  width: 800px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 4px;

  h3 {
    font-size: 30px;
    font-weight: 500;
  }
`

const Location = () => {
  return (
    <LocationContainer>
      <LocationInfo>
        <h3>Ubicación</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iste vitae illo quis repellendus impedit incidunt, optio ullam nam eius architecto ipsam at perferendis, ratione pariatur. Totam iure dignissimos delectus.</p>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50345.62395850873!2d-57.83553820684703!3d-37.93973915285643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95852efdfd3420cf%3A0xdb2005c1cd0d533e!2sSierra%20de%20los%20Padres%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1731503387028!5m2!1ses-419!2sar" width="600" height="350" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </LocationInfo>
    </LocationContainer>
  )
}

export default Location