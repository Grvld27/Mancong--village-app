
import styled from 'styled-components';
import keraton from '../assets/The-Keraton-Kesultanan-of-Kutai-in-the-times-of-Sultan-Aji-Muhammad-Alimuddin-r.png'



const CardKeraton = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <img  style = {{width:'31pc', height: 'auto'}}src={keraton} alt="" />
         
 
        <div className="card__content">
          <p className="card__title">Keraton Kutai</p>
          <p className="card__description">
          The Kutai Kartanegara Palace, located in Tenggarong, East Kalimantan, Indonesia, is a historic royal palace that symbolizes the grandeur and legacy of the Kutai Kartanegara Sultanate—the oldest known kingdom in Indonesia.

Also known as "Keraton Kutai", the palace stands as a cultural and architectural landmark. It once served as the official residence of the sultans and the center of royal governance. The structure blends traditional Dayak and Malay architectural elements with colonial influences, reflecting centuries of history and transitions.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 492px;
    height: 224px;
    margin : -441px 0pc 0pc 948px;
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
  

export default CardKeraton;
