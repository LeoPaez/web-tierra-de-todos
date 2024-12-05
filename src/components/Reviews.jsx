import { useEffect } from "react";
import styled from "styled-components"

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  gap: 30px;

  h3 {
    font-size: 30px;
    font-weight: 500;
  }
`

const GoogleReviews = styled.div`
  width: 600px;

  div {
    background-color: #FFF;
  }
`

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ReviewsContainer>
      <h3>Nuestras reseñas</h3>
      <GoogleReviews>
        <div
          className="elfsight-app-0ddefd9d-b099-40e9-81f0-676e9e6154ca"
          data-elfsight-app-lazy
        ></div>
      </GoogleReviews>
    </ReviewsContainer>
  )
}

export default Reviews
