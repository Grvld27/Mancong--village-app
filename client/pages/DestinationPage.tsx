// import MotionCounter from "../components/MotionCounter";
import Aurora from '../components/Aurora';
import DestinationMap from '../components/DestinationMap';
import HeaderCustom from '../components/Header';


const DestinationPage = () => {
  return (
    <div>
<HeaderCustom/>
  
<Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>

<DestinationMap/>


    </div>
  );
}
export default DestinationPage