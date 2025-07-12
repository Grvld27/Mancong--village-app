
import styled from 'styled-components';
import Lamin from '../assets/Lamin.jpeg'



const CardLamin = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <img  style = {{width:'40pc', height: 'auto'}}src={Lamin} alt="" />
         
 
        <div className="card__content">
          <p className="card__title">Lamin Mancong</p>
          <p className="card__description">
            Built entirely of wood with intricate carvings and vibrant Dayak motifs, the longhouse reflects the deep spiritual and communal values of the indigenous community.

Historically, Lamin Mancong was not only a place to live, but also a gathering space for important ceremonies, family meetings, and cultural rituals. Its unique architecture—featuring a high stilted structure and an expansive communal hall—represents the strength and unity of the Dayak people.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 635px;
    height: 365px;
    margin : -159pc 0pc 0pc 50pc;
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
    width: 100%;
    height: 100%;
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
    color: #000000;
    line-height: 1.4;
  }

  .card:hover svg {
    scale: 0;
  }`;

export default CardLamin;
