
import styled from 'styled-components';
import human1 from '../assets/human3.jpeg'



const CardHuman = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <img  style = {{width:'36pc', height: 'auto'}}src={human1} alt="" />
         
 
        <div className="card__content">
          <p className="card__title"> Blontakng Traditional Ceremony of the Dayak People</p>
          <p className="card__description">
        Blontakng is a traditional ceremony of the Dayak Benuaq and Dayak Tunjung people in East Kalimantan, Indonesia. This sacred ritual is held as an expression of gratitude to God (referred to as Dewa Beliq) and ancestral spirits for blessings such as a successful harvest, healing from illness, or protection from disasters.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 574px;
    height: 325px;
    margin : 27pc 0pc 7pc 37pc;
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
    background-color:#bdbdbd;
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
  

export default CardHuman;
