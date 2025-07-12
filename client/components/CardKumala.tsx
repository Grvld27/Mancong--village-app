
import styled from 'styled-components';
import kumala from '../assets/laminpulaukumala.jpg'



const CardKumala = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <img  style = {{width:'32pc', height: 'auto'}}src={kumala} alt="" />
         
 
        <div className="card__content">
          <p className="card__title">Lamin at Kumala Island</p>
          <p className="card__description">
          Lamin at Kumala Island is a traditional Dayak longhouse replica located in the heart of the island, Tenggarong, East Kalimantan. It showcases the rich cultural heritage of the Dayak people through its unique architecture, carvings, and traditional design. As part of the island’s tourism attraction, the Lamin offers visitors a glimpse into the communal lifestyle and artistry of one of Borneo’s oldest indigenous groups.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 491px;
    height: 207px;
    margin : 11px 0pc 0pc 948px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    border: none
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 103%;
    height: 104%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #bdbdbd;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: black;
    line-height: 1.4;
  }

  .card:hover svg {
    scale: 0;
  }`;
  

export default CardKumala;
