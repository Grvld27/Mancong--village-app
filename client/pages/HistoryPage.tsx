import HeaderCustom from "../components/Header.tsx";

import AnimatedText from '../components/MotionHistory1.tsx'

import CardLamin from "../components/CardLamin.tsx";
import CardSultan from "../components/CardSultan.tsx";
import CardKeraton from "../components/CardKeraton.tsx";
import CardKumala from "../components/CardKumala.tsx";
import CardBlontak from "../components/CardBlontak.tsx";
import CardHuman from "../components/CardHuman1.tsx";
import Aurora from "../components/Aurora.tsx";


const HistoryPage = () => {

  const items = [
    { label: "Home", href: "/" },
  { label: "History", href: "/HistoryPage" },
  { label: "Village Profile", href: "/ProfilePage" },
    { label: "Gallery", href: "#" },
    { label: "Contact", href: "#" },

];
  
  return (


  <div>


<HeaderCustom/>

<Aurora/>
<AnimatedText/>






  </div>
);
}
export default HistoryPage;